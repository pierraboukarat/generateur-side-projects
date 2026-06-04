from html.parser import HTMLParser
from pathlib import Path
from xml.sax.saxutils import escape
import re
import zipfile


ROOT = Path("ESM/generateur-side-projects")
OUT = ROOT / "textes-generateur-idees.docx"


class VisibleTextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.items = []

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style", "head"}:
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in {"script", "style", "head"} and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if self.skip:
            return
        text = " ".join(data.split())
        if text:
            self.items.append(text)


def html_texts(path):
    parser = VisibleTextParser()
    parser.feed(path.read_text(encoding="utf-8"))
    texts = []
    for item in parser.items:
        if not texts or texts[-1] != item:
            texts.append(item)
    return texts


def js_string_list(array_body):
    return re.findall(r'"([^"]*)"', array_body)


def local_ideas(js_text):
    data_match = re.search(
        r"const LOCAL_SIDE_PROJECTS_DATA = \{(.*?)\n\};",
        js_text,
        re.S,
    )
    if not data_match:
        return []

    body = data_match.group(1)
    categories = []
    category_pattern = re.compile(
        r'\s*(?:"([^"]+)"|([a-zA-Z_][\w]*)):\s*\{\s*'
        r"get:\s*\[(.*?)\],\s*"
        r"to:\s*\[(.*?)\],\s*"
        r"by:\s*\[(.*?)\],\s*"
        r"\},",
        re.S,
    )

    for match in category_pattern.finditer(body):
        key = match.group(1) or match.group(2)
        categories.append(
            {
                "key": key,
                "get": js_string_list(match.group(3)),
                "to": js_string_list(match.group(4)),
                "by": js_string_list(match.group(5)),
            }
        )
    return categories


def js_ui_texts(js_text):
    patterns = [
        r'textContent\s*=\s*isLoading\s*\?\s*"([^"]+)"\s*:\s*"([^"]+)"',
        r'notificationHtml\(\s*"([^"]+)"',
        r'throw new Error\("([^"]+)"\)',
    ]
    found = []
    for pattern in patterns:
        for match in re.finditer(pattern, js_text, re.S):
            for group in match.groups():
                if group and group not in found:
                    found.append(group)
    return found


def paragraph(text="", style=None):
    ppr = ""
    if style:
        ppr = f'<w:pPr><w:pStyle w:val="{style}"/></w:pPr>'
    return f"<w:p>{ppr}<w:r><w:t xml:space=\"preserve\">{escape(text)}</w:t></w:r></w:p>"


def doc_xml(blocks):
    body = "\n".join(blocks)
    section = (
        '<w:sectPr>'
        '<w:pgSz w:w="12240" w:h="15840"/>'
        '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" '
        'w:header="720" w:footer="720" w:gutter="0"/>'
        "</w:sectPr>"
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        f"<w:body>{body}{section}</w:body>"
        "</w:document>"
    )


def styles_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Title">
    <w:name w:val="Title"/>
    <w:basedOn w:val="Normal"/>
    <w:pPr><w:spacing w:before="0" w:after="240"/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="44"/><w:color w:val="106BF4"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/>
    <w:basedOn w:val="Normal"/>
    <w:pPr><w:spacing w:before="360" w:after="160"/><w:keepNext/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="32"/><w:color w:val="106BF4"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading2">
    <w:name w:val="heading 2"/>
    <w:basedOn w:val="Normal"/>
    <w:pPr><w:spacing w:before="220" w:after="100"/><w:keepNext/></w:pPr>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:b/><w:sz w:val="26"/><w:color w:val="FF6700"/></w:rPr>
  </w:style>
</w:styles>"""


def content_types_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""


def root_rels_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""


def word_rels_xml():
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""


def build_blocks():
    blocks = [
        paragraph("Textes du générateur d’idées", "Title"),
        paragraph("Document éditable pour révision des textes du site En Sous-Marin."),
        paragraph("Modifier directement les textes dans ce document, puis renvoyer le fichier."),
    ]

    html_files = [
        ("Homepage", ROOT / "index.html"),
        ("Page générateur", ROOT / "generateur.html"),
        ("À propos", ROOT / "a-propos.html"),
        ("Mentions légales", ROOT / "mentions-legales.html"),
        ("Contact", ROOT / "contact.html"),
    ]

    for title, path in html_files:
        blocks.append(paragraph(title, "Heading1"))
        for text in html_texts(path):
            blocks.append(paragraph(text))

    js_text = (ROOT / "js/app.js").read_text(encoding="utf-8")

    blocks.append(paragraph("Messages JavaScript", "Heading1"))
    for text in js_ui_texts(js_text):
        blocks.append(paragraph(text))

    blocks.append(paragraph("Banque d’idées locale", "Heading1"))
    for category in local_ideas(js_text):
        blocks.append(paragraph(category["key"], "Heading2"))
        for label in ("get", "to", "by"):
            blocks.append(paragraph(label.upper(), "Heading2"))
            for item in category[label]:
                blocks.append(paragraph(item))

    return blocks


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types_xml())
        docx.writestr("_rels/.rels", root_rels_xml())
        docx.writestr("word/_rels/document.xml.rels", word_rels_xml())
        docx.writestr("word/styles.xml", styles_xml())
        docx.writestr("word/document.xml", doc_xml(build_blocks()))
    print(OUT)


if __name__ == "__main__":
    main()
