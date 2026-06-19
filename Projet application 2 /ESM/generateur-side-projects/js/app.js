const WEBHOOK_GENERATE_URL = "";
const WEBHOOK_LEAD_URL = "https://n8n.pierreaboukrat.com/webhook-test/a43b0c96-6dfe-45c3-88e3-915d5aed3db0";
const CALENDLY_PAGE_URL = "calendly.html";
const LOCAL_SIDE_PROJECTS_DATA = {
  bricoleur: {
    get: [
      "Les personnes aux revenus modestes qui veulent améliorer leur intérieur",
      "Les fans de vélo en métropole",
      "Les étudiants qui viennent d’emménager dans un petit studio",
      "Les personnes qui n’osent pas bricoler seules",
      "Les personnes âgées qui vivent seules",
      "Les locataires qui veulent récupérer leur caution",
    ],
    to: [
      "Réorganiser leur logement sans acheter de nouveaux meubles",
      "Réparer rapidement leur vélo sans devoir chercher un atelier disponible",
      "Rendre leur logement plus pratique avec un budget très limité",
      "Apprendre les bases sans se sentir nulles devant une perceuse",
      "Sécuriser leur logement sans engager de gros travaux",
      "Remettre leur appartement en état avant l’état des lieux",
    ],
    by: [
      "En proposant un service de réaménagement à domicile à partir des objets déjà présents",
      "En lançant un service de réparation ambulant avec une carte des points d’arrêt",
      "En proposant un pack avec installation d’étagères et rangements récupérés ",
      "En lançant des ateliers courts pour réparer, fixer, poncer ou assembler",
      "En proposant une intervention courte pour fixer, réparer, ranger les câbles",
      "En proposant un forfait express pour reboucher les trous, retoucher les murs, revisser, nettoyer",
    ],
  },
  mode: {
    get: [
      "Les personnes invitées à des mariages ou galas",
      "Les étudiantes et jeunes actifs qui ont plusieurs événements dans l’année",
      "Les amateurs de vêtements vintage",
      "Les jeunes diplômés qui passent leurs premiers entretiens",
      "Les personnes qui achètent sur Vinted mais hésitent avant de payer",
    ],
    to: [
      "Porter une belle tenue sans acheter une robe ou un costume qui restera au placard",
      "Changer de tenue pour chaque occasion sans multiplier les achats",
      "Trouver des pièces originales sans fouiller pendant des heures",
      "Trouver une tenue professionnelle sans investir dans une garde-robe complète",
      "Éviter les mauvais achats de seconde main",
    ],
    by: [
      "En lançant un service local de prêt ou location de tenues habillées entre particuliers",
      "En créant une penderie partagée de robes de soirée disponibles à la location pour quelques jours",
      "En leur envoyant une sélection hebdomadaire de vêtements vintage repérés sur Vinted",
      "En proposant un pack de location ou d’achat malin avec veste, chemise, chaussures et conseils de fit selon le secteur visé",
      "En proposant un avis rapide sur la taille, la coupe, l’état, le prix et le potentiel de retouche à partir de l’annonce",
    ],
  },
  newsletter: {
    get: [
      "Les jeunes parents qui manquent d’idées le week-end",
      "Les personnes qui veulent mieux manger au bureau",
      "Les amateurs de vélo urbain",
      "Les personnes qui achètent sur Vinted",
      "Les propriétaires Airbnb",
    ],
    to: [
      "Organiser des sorties simples sans passer leur samedi matin à chercher quoi faire",
      "Préparer des repas simples sans finir tous les midis avec un sandwich triste",
      "Découvrir des trajets plus agréables et éviter les galères du quotidien",
      "Trouver de bonnes pièces sans scroller pendant deux heures",
      "Améliorer l’expérience de leurs voyageurs sans refaire tout leur logement",
    ],
    by: [
      "En leur envoyant chaque vendredi une sélection de 3 activités testées",
      "En leur envoyant chaque dimanche 3 idées de lunchbox",
      "En leur envoyant chaque semaine un itinéraire testé",
      "En leur envoyant une sélection hebdomadaire de vêtements repérés, classés par style",
      "En leur envoyant chaque semaine une idée concrète d’amélioration",
    ],
  },
  club: {
    get: [
      "Les freelances qui travaillent souvent seuls",
      "Les jeunes actifs qui veulent élargir leur réseau",
      "Les créateurs de contenu qui manquent de régularité",
      "Les entrepreneurs solo qui veulent sortir de leur bulle",
      "Les jeunes de quartiers qui veulent découvrir de nouvelles opportunités",
    ],
    to: [
      "Retrouver une dynamique collective sans louer un bureau à l’année",
      "Rencontrer des personnes intéressantes autour d’un vrai sujet de conversation",
      "Publier plus souvent sans dépendre uniquement de leur motivation",
      "Prendre de meilleures décisions grâce à des retours extérieurs structurés",
      "Développer leur confiance, leur logique et leur réseau autour d’un cadre stimulant",
    ],
    by: [
      "En lançant un club mensuel avec sessions de travail",
      "En organisant des dîners thématiques en petit comité autour d’un métier",
      "En lançant un club d’accountability avec défis hebdomadaires",
      "En créant un board collectif mensuel avec 5 membres",
      "En lançant un club d’échecs local avec initiations, tournois, mentors",
    ],
  },
  restauration: {
    get: [
      "Les personnes qui veulent organiser un dîner spécial chez elles",
      "Les couples qui veulent marquer une occasion sans sortir au restaurant",
      "Les entreprises qui veulent organiser un moment d’équipe plus chaleureux",
      "Les passionnés de cuisine qui veulent tester un concept avant d’ouvrir un restaurant",
      "Les familles qui veulent célébrer un anniversaire à la maison",
    ],
    to: [
      "Vivre une expérience gastronomique sans passer la journée en cuisine",
      "Créer un moment intime et mémorable à domicile",
      "Organiser une soirée à thème",
      "Créer du lien avec un dîner original avec des expériences",
      "Organiser un repas festif sans gérer toute la logistiques",
    ],
    by: [
      "En leur envoyant un chef à domicile avec menu personnalisé, dressage, service",
      "En proposant un dîner romantique clé en main avec chef, menu, bougies",
      "En envoyant un chef ou un passionné de cuisine animer un dîner thématique chez eux",
      "En proposant un déjeuner ou dîner privé avec chef, animation culinaire",
      "En organisant des dîners éphémères chez des particuliers ou dans des lieux partenaires",
    ],
  },
  photographie: {
    get: [
      "Des familles qui gardent peu de traces des histoires de leurs proches",
      "Des petits commerces avec des photos datées ou incohérentes",
      "Des habitants qui veulent regarder leur ville autrement",
      "Des créateurs qui vendent en ligne avec peu de moyens",
      "Des organisateurs qui perdent la mémoire de leurs événements",
    ],
    to: [
      "Créer un souvenir visuel et narratif durable",
      "Mieux présenter leur lieu sur le web",
      "Créer une pratique photo régulière et accessible",
      "Faire des photos produits propres sans louer un studio",
      "Capitaliser sur chaque édition",
    ],
    by: [
      "Une séance photo accompagnée d'une courte interview mise en page",
      "Un pack photo rapide avec usages prêts pour fiche Google, site et réseaux",
      "Un thème hebdomadaire, une galerie commune et une balade mensuelle",
      "Un kit lumière, fonds et tutoriels adaptés aux petits objets",
      "Un reportage court avec tri, légendes et dossier média prêt à réutiliser",
    ],
  },
  "jeuxdesociété": {
    get: [
      "Les fans de Donjons & Dragons qui n’ont pas toujours le temps de préparer une vraie session",
      "Les fans de true crime et d’enquêtes",
      "Les amateurs de vin qui veulent apprendre sans suivre un cours intimidant",
      "Les passionnés de mode qui aiment composer des looks",
      "Les personnes qui adorent les chiens",
    ],
    to: [
      "Vivre une aventure courte, drôle et rejouable sans organiser une campagne complète",
      "Résoudre une affaire entre amis sans passer par un jeu de plateau complexe ou un podcast de 8 épisodes",
      "Mieux comprendre les arômes, les accords et les régions tout en animant une soirée",
      "Tester leur sens du style selon une occasion, une contrainte et un budget",
      "Retrouver les situations absurdes de propriétaires de chiens dans un jeu de soirée simple et drôle",
    ],
    by: [
      "En lançant un jeu de cartes narratif avec quêtes, monstres, objets magiques, dilemmes",
      "En créant un jeu de cartes d’enquête avec suspects, preuves, alibis, lieux, fausses pistes",
      "En lançant un jeu de cartes avec cépages, plats, régions, défis de dégustation",
      "En créant un jeu de cartes qui mélange pièces, accessoires, dress codes, morphologies, événements",
      "En lançant un jeu de cartes avec bêtises, promenades, races, accessoires, urgences du quotidien",
    ],
  },
};

let currentIdea = null;
let lastGeneratedIdea = {
  titre: "",
  get: "",
  to: "",
  by: "",
};
let lockedFields = {
  get: false,
  to: false,
  by: false,
};
let hasGeneratedIdea = false;
let currentCategory = "jeuxdesociété";
let sideProjectsCache = null;
let currentDashboardStep = 0;

const dashboardState = {
  questionnaire: {
    objectif: "",
    objectifColor: "",
    temps: "",
    tempsColor: "",
    revenus: "",
    revenusColor: "",
    accompagne: "",
    financement: "",
    affirmation: "",
    affirmationColor: "",
  },
  cible: {
    resume: "",
    comportement: "",
    probleme: "",
    constat: "",
  },
  promesse: {
    resume: "",
    obtenir: "",
    eviter: "",
    desirabilite: "",
  },
  action: {
    resume: "",
    premiereVersion: "",
    testRapide: "",
    signal: "",
  },
};

const dashboardQuestions = [
  {
    key: "objectif",
    title: "Quel est l’objectif de votre Side Project ?",
    answers: [
      ["Développer mes compétences", "vert"],
      ["Générer un revenu complémentaire", "rouge"],
      ["Tirer partie d’une opportunité professionnelle", "bleu"],
      ["Aller vers l’entrepreneuriat", "jaune"],
    ],
  },
  {
    key: "temps",
    title: "Combien de temps avez-vous pour votre Side Project par semaine ?",
    answers: [
      ["Inférieur à 2 heures", "vert"],
      ["3 heures à 5 heures", "bleu"],
      ["6 heures à 10 heures", "rouge"],
      ["11 heures et plus", "jaune"],
    ],
  },
];

const revenueQuestion = {
  key: "revenus",
  title: "Quelle part de vos revenus aimeriez-vous générer avec ce Side Project ?",
  answers: [
    ["De 0 à 25 %", "bleu"],
    ["26 % à 50 %", "vert"],
    ["51 % à 75 %", "rouge"],
    ["76 % à 100 %", "jaune"],
  ],
};

const supportQuestion = {
  key: "accompagnement",
  title: "Êtes-vous accompagné dans votre Side Project ?",
  groups: [
    {
      key: "accompagne",
      title: "Êtes-vous accompagné dans votre Side Project ?",
      answers: [["Oui"], ["Non"]],
    },
    {
      key: "financement",
      title: "Connaissez-vous des moyens de financement tel que Hyper Capital ?",
      answers: [["Oui"], ["Non"]],
    },
  ],
};

const affirmationQuestion = {
  key: "affirmation",
  title: "Êtes-vous d’accord avec cette affirmation ?",
  statement:
    "Quand j’ai démarré mon Side Project, j’ai manqué de moyens, de connaissances ou d’accompagnement pour le développer durablement.",
  answers: [
    ["Je ne suis pas d’accord", "jaune"],
    ["Je suis moyennement d’accord", "rouge"],
    ["Je suis plutôt d’accord", "vert"],
    ["Je suis d’accord", "bleu"],
  ],
};

const dashboardFormSteps = [
  {
    section: "cible",
    stepLabel: "Cible",
    title: "Cible 🎯",
    intro:
      "Si vous avez une idée de business, vous pouvez commencer à ajouter des informations sur votre cible ici. Votre cible doit correspondre à une personne ou à un groupe de personnes que vous avez identifié comme capable d’utiliser votre solution.",
    summaryKey: "resume",
    summaryId: "getResult",
    summaryLabel: "Qui est votre cible ?",
    fields: [["probleme", "Quel problème rencontre-t-elle ?"]],
    resetField: "get",
    indicatorId: "getEditedIndicator",
  },
  {
    section: "promesse",
    stepLabel: "Promesse",
    title: "Promesse 💡",
    intro:
      "Si vous avez une idée de business, vous pouvez commencer à formuler votre promesse ici. Votre promesse doit expliquer ce que votre cible cherche à obtenir, améliorer ou résoudre grâce à votre solution.",
    summaryKey: "resume",
    summaryId: "toResult",
    summaryLabel: "Quelle promesse faites-vous à cette cible ?",
    fields: [["obtenir", "Quel résultat veut-elle obtenir ?"]],
    resetField: "to",
    indicatorId: "toEditedIndicator",
  },
  {
    section: "action",
    stepLabel: "Action",
    title: "Action ⚡",
    intro:
      "Si vous avez une idée de business, vous pouvez commencer à définir votre première action ici. Votre action doit expliquer par quel moyen concret vous allez permettre à votre cible d’obtenir la promesse formulée.",
    summaryKey: "resume",
    summaryId: "byResult",
    summaryLabel: "Quelle première action allez-vous tester ?",
    fields: [],
    resetField: "by",
    indicatorId: "byEditedIndicator",
  },
];

const dashboardSteps = [
  { type: "question", question: dashboardQuestions[0] },
  { type: "question", question: dashboardQuestions[1] },
  { type: "form", form: dashboardFormSteps[0] },
  { type: "question", question: revenueQuestion },
  { type: "question", question: supportQuestion },
  { type: "form", form: dashboardFormSteps[1] },
  { type: "question", question: affirmationQuestion },
  { type: "form", form: dashboardFormSteps[2] },
];

const dashboardFieldMap = {
  get: ["cible", "resume"],
  to: ["promesse", "resume"],
  by: ["action", "resume"],
};

const dashboardApp = document.getElementById("dashboardApp");

const generateButton = document.getElementById("generateButton");
const categoryBadge = document.getElementById("categoryBadge");
const messageArea = document.getElementById("messageArea");
const resultArea = document.getElementById("resultArea");
const getResult = document.getElementById("getResult");
const toResult = document.getElementById("toResult");
const byResult = document.getElementById("byResult");
const editedIndicators = {
  get: document.getElementById("getEditedIndicator"),
  to: document.getElementById("toEditedIndicator"),
  by: document.getElementById("byEditedIndicator"),
};
const roadmapButton = document.getElementById("roadmapButton");
const receiveIdeaButton = document.getElementById("receiveIdeaButton");
const leadModal = document.getElementById("leadModal");
const leadForm = document.getElementById("leadForm");
const leadEmail = document.getElementById("leadEmail");
const consentEmailStorage = document.getElementById("consentEmailStorage");
const subscribeNews = document.getElementById("subscribeNews");
const leadSubmitButton = document.getElementById("leadSubmitButton");
const leadMessageArea = document.getElementById("leadMessageArea");
const leadModalClose = document.querySelector(".lead-modal-close");
const leadModalOverlay = document.querySelector(".lead-modal-overlay");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuScrim = document.querySelector(".menu-scrim");
const sideMenu = document.getElementById("sideMenu");

function openMenu() {
  document.body.classList.add("is-menu-open");
  menuToggle?.setAttribute("aria-expanded", "true");
  sideMenu?.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  document.body.classList.remove("is-menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  sideMenu?.setAttribute("aria-hidden", "true");
}

if (menuToggle && menuClose && menuScrim && sideMenu) {
  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  menuScrim.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeLeadModal();
    }
  });
}

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("categorie") || "jeuxdesociété";
  return getCategoryTheme(category).key;
}

function formatCategoryLabel(category) {
  const normalizedCategory = getCategoryKey(category);
  const labels = {
    bricoleur: "Bricoleur",
    mode: "Mode",
    newsletter: "Newsletter",
    club: "Club",
    restauration: "Restauration",
    photographie: "Photographie",
    "jeuxdesociété": "Jeux de société",
  };

  return labels[normalizedCategory] || "Jeux de société";
}

function getCategoryKey(category) {
  const aliases = {
    digital: "jeuxdesociété",
    jeuxdesociete: "jeuxdesociété",
    "jeux-de-societe": "jeuxdesociété",
    "jeux-de-société": "jeuxdesociété",
  };

  return aliases[category] || category;
}

function getCategoryTheme(category) {
  const normalizedCategory = getCategoryKey(category);
  const themes = {
    bricoleur: {
      key: "bricoleur",
      color: "#FFB000",
      soft: "rgba(255, 176, 0, 0.22)",
    },
    mode: {
      key: "mode",
      color: "#8B00FF",
      soft: "rgba(139, 0, 255, 0.22)",
    },
    newsletter: {
      key: "newsletter",
      color: "#FF6700",
      soft: "rgba(255, 103, 0, 0.22)",
    },
    club: {
      key: "club",
      color: "#106BF4",
      soft: "rgba(16, 107, 244, 0.22)",
    },
    restauration: {
      key: "restauration",
      color: "#FF1010",
      soft: "rgba(255, 16, 16, 0.22)",
    },
    photographie: {
      key: "photographie",
      color: "#6B3F12",
      soft: "rgba(107, 63, 18, 0.28)",
    },
    "jeuxdesociété": {
      key: "jeuxdesociété",
      color: "#12B800",
      soft: "rgba(18, 184, 0, 0.22)",
    },
  };

  return themes[normalizedCategory] || themes["jeuxdesociété"];
}

function applyCategoryTheme(category) {
  const theme = getCategoryTheme(category);

  document.body.style.setProperty("--category-color", theme.color);
  document.body.style.setProperty("--category-soft", theme.soft);
  document.body.dataset.category = theme.key;

  if (categoryBadge) {
    categoryBadge.textContent = formatCategoryLabel(theme.key);
  }
}

function renderQuestionStep(index = currentDashboardStep) {
  if (!dashboardApp) {
    return;
  }

  const totalSteps = dashboardSteps.length;
  currentDashboardStep = Math.max(0, Math.min(index, totalSteps - 1));
  const currentStep = dashboardSteps[currentDashboardStep];

  if (currentStep.type === "form") {
    renderDashboardFormStep(currentStep.form, currentDashboardStep, totalSteps);
    return;
  }

  const question = currentStep.question;
  const progress = `${currentDashboardStep + 1} / ${totalSteps}`;
  const body = question.groups
    ? question.groups.map((group) => renderQuestionGroup(group, true)).join("")
    : renderQuestionGroup(question);

  dashboardApp.innerHTML = `
    <div class="question-step" data-step="${currentDashboardStep}">
      <p class="dashboard-kicker">Question ${progress}</p>
      <h1 id="generatorTitle" class="title generator-title dashboard-question-title">
        ${escapeHtml(question.title)}
      </h1>
      ${
        question.statement
          ? `<blockquote class="question-statement">« ${escapeHtml(question.statement)} »</blockquote>`
          : ""
      }
      <div class="question-options">
        ${body}
      </div>
      <div class="dashboard-actions">
        ${
          currentDashboardStep > 0
            ? '<button class="button dashboard-secondary-button" type="button" data-dashboard-action="previous">Précédent</button>'
            : ""
        }
        <button class="button generator-button" type="button" data-dashboard-action="next">Suivant</button>
      </div>
    </div>
  `;
}

function renderQuestionGroup(question, showHeading = false) {
  const selectedValue = dashboardState.questionnaire[question.key];
  const heading = showHeading ? `<h2 class="question-group-title">${escapeHtml(question.title)}</h2>` : "";

  return `
    <fieldset class="question-group">
      ${heading}
      ${question.answers
        .map(([value, color]) => {
          const isSelected = selectedValue === value;
          return `
            <button
              class="question-answer${isSelected ? " is-selected" : ""}"
              type="button"
              data-question-key="${escapeHtml(question.key)}"
              data-answer-value="${escapeHtml(value)}"
              data-answer-color="${escapeHtml(color || "")}"
            >
              <span class="answer-dot" data-color="${escapeHtml(color || "neutre")}"></span>
              <span>${escapeHtml(value)}</span>
            </button>
          `;
        })
        .join("")}
    </fieldset>
  `;
}

function selectQuestionAnswer(questionKey, value, color = "") {
  dashboardState.questionnaire[questionKey] = value;

  const colorKey = `${questionKey}Color`;
  if (Object.prototype.hasOwnProperty.call(dashboardState.questionnaire, colorKey)) {
    dashboardState.questionnaire[colorKey] = color;
  }

  renderQuestionStep(currentDashboardStep);
}

function canLeaveCurrentStep() {
  const currentStep = dashboardSteps[currentDashboardStep];

  if (!currentStep || currentStep.type !== "question") {
    return true;
  }

  const question = currentStep.question;

  if (!question) {
    return true;
  }

  if (question.groups) {
    return question.groups.every((group) => dashboardState.questionnaire[group.key]);
  }

  return Boolean(dashboardState.questionnaire[question.key]);
}

function nextStep() {
  if (!canLeaveCurrentStep()) {
    showError("Sélectionnez une réponse avant de continuer.");
    return;
  }

  clearMessages();
  currentDashboardStep += 1;
  renderQuestionStep(currentDashboardStep);
}

function previousStep() {
  clearMessages();
  renderQuestionStep(currentDashboardStep - 1);
}

function renderDashboardForms() {
  renderDashboardFormStep(dashboardFormSteps[0], currentDashboardStep, dashboardSteps.length);
}

function renderDashboardFormStep(config = dashboardFormSteps[0], stepIndex = currentDashboardStep, totalSteps = dashboardSteps.length) {
  if (!dashboardApp) {
    return;
  }

  const stepNumber = stepIndex + 1;
  const isLastStep = stepIndex === totalSteps - 1;

  dashboardApp.innerHTML = `
    <div class="dashboard-forms dashboard-form-step" aria-live="polite">
      <div class="dashboard-heading">
        <p class="dashboard-kicker">${escapeHtml(config.stepLabel)} ${stepNumber} / ${totalSteps}</p>
        <h1 id="generatorTitle" class="title generator-title dashboard-question-title">
          ${escapeHtml(config.title)}
        </h1>
      </div>

      <div class="generator-primary-action dashboard-generate-row">
        <button id="generateButton" class="button generator-button" type="button" data-dashboard-action="generate">
          Générer une base
        </button>
      </div>

      <p class="editable-brief-help">
        Vous pouvez partir de votre intuition ou générer une base, puis ajuster chaque bloc.
      </p>

      <div id="resultArea" class="dashboard-form-stack">
        ${renderDashboardCard(config)}
      </div>

      <div class="generator-secondary-actions">
        <button class="button dashboard-secondary-button" type="button" data-dashboard-action="previous">Précédent</button>
        ${
          isLastStep
            ? `
              <button id="roadmapButton" class="button roadmap-button" type="button" data-dashboard-action="roadmap">
                Obtenir mon cahier des charges <span aria-hidden="true">→</span>
              </button>
              <button id="receiveIdeaButton" class="button receive-button" type="button" data-dashboard-action="lead">
                Recevoir mon tableau de bord <span aria-hidden="true">→</span>
              </button>
            `
            : '<button class="button generator-button" type="button" data-dashboard-action="next">Suivant</button>'
        }
      </div>
    </div>
  `;

  renderIdea(currentIdea || {
    titre: "Tableau de bord Side Project",
    get: dashboardState.cible.resume,
    to: dashboardState.promesse.resume,
    by: dashboardState.action.resume,
  });
  updateEditedIndicators();
}

function renderDashboardCard(config) {
  const detailFieldsHtml = config.fields.length
    ? `
      <div class="dashboard-detail-grid" data-field-count="${config.fields.length}">
        ${config.fields
          .map(([key, label]) => `
            <label class="dashboard-detail-field">
              <span>${escapeHtml(label)}</span>
              <textarea
                data-dashboard-section="${escapeHtml(config.section)}"
                data-dashboard-key="${escapeHtml(key)}"
              >${escapeHtml(dashboardState[config.section][key])}</textarea>
            </label>
          `)
          .join("")}
      </div>
    `
    : "";

  return `
    <section class="idea-panel dashboard-form-card" aria-label="${escapeHtml(config.title)}">
      <div class="idea-panel-header dashboard-form-header">
        <h2>${escapeHtml(config.title)}</h2>
        <span id="${escapeHtml(config.indicatorId)}" class="edited-indicator" hidden>Modifié</span>
      </div>
      <p class="dashboard-card-intro">${escapeHtml(config.intro)}</p>
      <label class="dashboard-summary-field">
        <span>${escapeHtml(config.summaryLabel)}</span>
        <textarea
          id="${escapeHtml(config.summaryId)}"
          class="idea-editor dashboard-summary-editor"
          data-dashboard-section="${escapeHtml(config.section)}"
          data-dashboard-key="${escapeHtml(config.summaryKey)}"
        >${escapeHtml(dashboardState[config.section][config.summaryKey])}</textarea>
      </label>
      ${detailFieldsHtml}
      <button
        class="reset-field-button"
        type="button"
        data-reset-field="${escapeHtml(config.resetField)}"
        aria-label="Réinitialiser ${escapeHtml(config.summaryLabel.toLowerCase())}"
      >
        Réinitialiser
      </button>
    </section>
  `;
}

function updateDashboardField(section, key, value) {
  if (!dashboardState[section] || !Object.prototype.hasOwnProperty.call(dashboardState[section], key)) {
    return;
  }

  dashboardState[section][key] = value;

  if (section === "cible" && key === "resume") {
    handleFieldEdit("get", value);
  }

  if (section === "promesse" && key === "resume") {
    handleFieldEdit("to", value);
  }

  if (section === "action" && key === "resume") {
    handleFieldEdit("by", value);
  }
}

function syncDashboardFromIdea(idea) {
  const normalizedIdea = normalizeIdea(idea || {});
  dashboardState.cible.resume = normalizedIdea.get;
  dashboardState.promesse.resume = normalizedIdea.to;
  dashboardState.action.resume = normalizedIdea.by;
}

function getDashboardPayload(email = "") {
  const normalizedIdea = normalizeIdea(currentIdea || {});

  return {
    email,
    source: "generateur-side-project-dashboard",
    categorie: currentCategory,
    titre: normalizedIdea.titre || "Tableau de bord Side Project",
    get: dashboardState.cible.resume || normalizedIdea.get,
    to: dashboardState.promesse.resume || normalizedIdea.to,
    by: dashboardState.action.resume || normalizedIdea.by,
    questionnaire: dashboardState.questionnaire,
    cible: dashboardState.cible,
    promesse: dashboardState.promesse,
    action: dashboardState.action,
  };
}

function renderThankYouPage(email = "") {
  if (!dashboardApp) {
    return;
  }

  dashboardApp.innerHTML = `
    <section class="thank-you-step" aria-live="polite">
      <p class="dashboard-kicker">Tableau de bord envoyé</p>
      <h1 id="generatorTitle" class="title generator-title dashboard-question-title">
        Merci, votre Side Project est en route.
      </h1>
      <p class="thank-you-copy">
        Votre tableau de bord a bien été envoyé${email ? ` à ${escapeHtml(email)}` : ""}. Vous pouvez maintenant vous appuyer sur votre cible, votre promesse et votre première action pour avancer plus clairement.
      </p>
      <div class="generator-secondary-actions">
        <a class="button roadmap-button" href="index.html">
          Retour à l’accueil <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  `;
  clearMessages();
}

async function generateIdea() {
  currentCategory = getCategoryFromUrl();
  applyCategoryTheme(currentCategory);
  setLoading(true);
  clearMessages();

  try {
    const idea = await getIdeaForCategory(currentCategory);
    const generatedIdea = normalizeIdea(idea);
    lastGeneratedIdea = generatedIdea;
    currentIdea = mergeGeneratedIdea(generatedIdea);
    hasGeneratedIdea = true;
    renderIdea(currentIdea);
    clearMessages();
  } catch (error) {
    if (!hasGeneratedIdea && !Object.values(lockedFields).some(Boolean)) {
      currentIdea = null;
    }
    showError(
      "Impossible de générer une idée pour le moment. Réessayez dans quelques secondes."
    );
  } finally {
    setLoading(false);
  }
}

async function getIdeaForCategory(category) {
  if (isConfiguredUrl(WEBHOOK_GENERATE_URL)) {
    return generateIdeaWithWebhook(category);
  }

  return generateIdeaFromLocalData(category);
}

async function generateIdeaWithWebhook(category) {
  const response = await fetch(WEBHOOK_GENERATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categorie: category,
    }),
  });

  if (!response.ok) {
    throw new Error("Generate webhook error");
  }

  const data = await response.json();
  return buildIdeaFromData(data);
}

async function generateIdeaFromLocalData(category) {
  const sideProjects = await loadSideProjects();
  const categoryData = sideProjects[category] || sideProjects["jeuxdesociété"];

  if (!categoryData) {
    throw new Error("No ideas available for category");
  }

  return buildIdeaFromData(categoryData);
}

function buildIdeaFromData(data) {
  if (Array.isArray(data)) {
    return buildIdeaFromRows(data);
  }

  if (Array.isArray(data?.items)) {
    return buildIdeaFromRows(data.items);
  }

  const getOptions = normalizeOptions(data?.get);
  const toOptions = normalizeOptions(data?.to);
  const byOptions = normalizeOptions(data?.by);

  if (!getOptions.length || !toOptions.length || !byOptions.length) {
    throw new Error("Side project data must contain get, to and by options");
  }

  return {
    titre: data?.titre || "Idée de Side Project",
    get: pickRandom(getOptions),
    to: pickRandom(toOptions),
    by: pickRandom(byOptions),
  };
}

function buildIdeaFromRows(rows) {
  const getOptions = rows.map((row) => row.get);
  const toOptions = rows.map((row) => row.to);
  const byOptions = rows.map((row) => row.by);

  return buildIdeaFromData({
    get: getOptions,
    to: toOptions,
    by: byOptions,
  });
}

function normalizeOptions(value) {
  if (Array.isArray(value)) {
    return value.map((option) => String(option || "").trim()).filter(Boolean);
  }

  const trimmedValue = String(value || "").trim();
  return trimmedValue ? [trimmedValue] : [];
}

function pickRandom(options) {
  return options[Math.floor(Math.random() * options.length)];
}

async function loadSideProjects() {
  if (sideProjectsCache) {
    return sideProjectsCache;
  }

  sideProjectsCache = LOCAL_SIDE_PROJECTS_DATA;
  return sideProjectsCache;
}

function renderIdea(idea) {
  const normalizedIdea = normalizeIdea(idea || {});
  syncDashboardFromIdea(normalizedIdea);

  const liveGetResult = document.getElementById("getResult");
  const liveToResult = document.getElementById("toResult");
  const liveByResult = document.getElementById("byResult");

  if (liveGetResult) {
    liveGetResult.value = normalizedIdea.get;
  }

  if (liveToResult) {
    liveToResult.value = normalizedIdea.to;
  }

  if (liveByResult) {
    liveByResult.value = normalizedIdea.by;
  }

  updateEditedIndicators();
}

function mergeGeneratedIdea(generatedIdea) {
  const existingIdea = normalizeIdea(currentIdea || {});

  return {
    titre: generatedIdea.titre,
    get: lockedFields.get ? existingIdea.get : generatedIdea.get,
    to: lockedFields.to ? existingIdea.to : generatedIdea.to,
    by: lockedFields.by ? existingIdea.by : generatedIdea.by,
  };
}

function handleFieldEdit(field, value) {
  currentIdea = normalizeIdea(currentIdea || lastGeneratedIdea);
  currentIdea[field] = value;
  lockedFields[field] = true;

  const dashboardField = dashboardFieldMap[field];
  if (dashboardField) {
    const [section, key] = dashboardField;
    dashboardState[section][key] = value;
  }

  updateEditedIndicators();
}

function resetField(field) {
  lockedFields[field] = false;
  currentIdea = normalizeIdea(currentIdea || {});
  currentIdea[field] = lastGeneratedIdea[field] || "";
  renderIdea(currentIdea);
}

function updateEditedIndicators() {
  Object.keys(lockedFields).forEach((field) => {
    const indicator = editedIndicators[field];
    const editor = getEditorForField(field);

    if (indicator) {
      indicator.hidden = !lockedFields[field];
    }

    if (editor) {
      editor.closest(".idea-panel")?.classList.toggle("is-user-edited", lockedFields[field]);
    }
  });
}

function getEditorForField(field) {
  const editors = {
    get: document.getElementById("getResult"),
    to: document.getElementById("toResult"),
    by: document.getElementById("byResult"),
  };

  return editors[field];
}

function openLeadModal() {
  if (!leadModal) {
    return;
  }

  leadModal.classList.add("is-open");
  leadModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-lead-modal-open");

  if (!hasGeneratedIdea && !currentIdea && !dashboardApp) {
    leadMessageArea.innerHTML = notificationHtml(
      "Générez d’abord une idée pour pouvoir la recevoir par email.",
      "is-warning"
    );
  } else {
    leadMessageArea.innerHTML = "";
  }

  leadEmail?.focus();
}

function closeLeadModal() {
  if (!leadModal) {
    return;
  }

  leadModal.classList.remove("is-open");
  leadModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-lead-modal-open");
}

async function submitLead(event) {
  event.preventDefault();

  if (!hasGeneratedIdea && !currentIdea && !dashboardApp) {
    leadMessageArea.innerHTML = notificationHtml(
      "Générez d’abord une idée pour pouvoir la recevoir par email.",
      "is-warning"
    );
    return;
  }

  const trimmedEmail = leadEmail.value.trim();

  if (!leadEmail.checkValidity() || !trimmedEmail || !consentEmailStorage.checked) {
    leadMessageArea.innerHTML = notificationHtml(
      "L'envoi n'a pas fonctionné. Vérifiez votre email ou réessayez.",
      "is-danger"
    );
    return;
  }

  leadSubmitButton.disabled = true;
  leadSubmitButton.classList.add("is-loading");

  try {
    if (!isConfiguredUrl(WEBHOOK_LEAD_URL)) {
      throw new Error("Lead webhook is not configured");
    }

    const dashboardPayload = getDashboardPayload(trimmedEmail);
    const response = await fetch(WEBHOOK_LEAD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dashboardPayload,
        consent_email_storage: consentEmailStorage.checked,
        subscribe_news: subscribeNews.checked,
      }),
    });

    if (!response.ok) {
      throw new Error("Lead webhook error");
    }

    leadMessageArea.innerHTML = notificationHtml(
      "C'est envoyé. Votre idée arrive bientôt dans votre boîte mail.",
      "is-success"
    );
    leadForm.reset();
    closeLeadModal();
    renderThankYouPage(trimmedEmail);
  } catch (error) {
    leadSubmitButton.disabled = false;
    leadMessageArea.innerHTML = notificationHtml(
      "L'envoi n'a pas fonctionné. Vérifiez votre email ou réessayez.",
      "is-danger"
    );
  } finally {
    leadSubmitButton.disabled = false;
    leadSubmitButton.classList.remove("is-loading");
  }
}

function setLoading(isLoading) {
  const liveGenerateButton = document.getElementById("generateButton");

  if (!liveGenerateButton) {
    return;
  }

  liveGenerateButton.disabled = isLoading;
  liveGenerateButton.classList.toggle("is-loading", isLoading);
  liveGenerateButton.textContent = isLoading
    ? "Génération de votre idée..."
    : "Générer une base";

  if (isLoading) {
    showSuccess("Génération de votre idée…");
  }
}

function showError(message) {
  if (!messageArea) {
    return;
  }

  messageArea.innerHTML = notificationHtml(message, "is-danger");
}

function showSuccess(message) {
  if (!messageArea) {
    return;
  }

  messageArea.innerHTML = notificationHtml(message, "is-success");
}

function clearMessages() {
  if (messageArea) {
    messageArea.innerHTML = "";
  }
}

function normalizeIdea(idea) {
  return {
    titre: idea.titre || "Idée de Side Project",
    get: idea.get || "",
    to: idea.to || "",
    by: idea.by || "",
  };
}

function isConfiguredUrl(url) {
  return Boolean(url && !url.startsWith("PASTE_"));
}

function notificationHtml(message, type) {
  return `<div class="notification ${type}">${escapeHtml(message)}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function submitDashboardLead(event) {
  return submitLead(event);
}

if (categoryBadge) {
  currentCategory = getCategoryFromUrl();
  applyCategoryTheme(currentCategory);

  if (dashboardApp) {
    renderQuestionStep(0);
  } else if (generateButton) {
    generateButton.addEventListener("click", generateIdea);
    renderIdea(currentIdea || lastGeneratedIdea);
  }
}

[
  ["get", getResult],
  ["to", toResult],
  ["by", byResult],
].forEach(([field, editor]) => {
  editor?.addEventListener("input", (event) => {
    handleFieldEdit(field, event.target.value);
  });
});

document.addEventListener("input", (event) => {
  const field = event.target;

  if (!(field instanceof HTMLTextAreaElement) && !(field instanceof HTMLInputElement)) {
    return;
  }

  const { dashboardSection, dashboardKey } = field.dataset;

  if (dashboardSection && dashboardKey) {
    updateDashboardField(dashboardSection, dashboardKey, field.value);
  }
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const answerButton = event.target.closest("[data-question-key]");
  if (answerButton) {
    selectQuestionAnswer(
      answerButton.dataset.questionKey,
      answerButton.dataset.answerValue,
      answerButton.dataset.answerColor
    );
    return;
  }

  const actionButton = event.target.closest("[data-dashboard-action]");
  if (!actionButton) {
    return;
  }

  const action = actionButton.dataset.dashboardAction;

  if (action === "next") {
    nextStep();
  }

  if (action === "previous") {
    previousStep();
  }

  if (action === "generate") {
    generateIdea();
  }

  if (action === "lead") {
    openLeadModal();
  }

  if (action === "roadmap") {
    window.location.href = CALENDLY_PAGE_URL;
  }
});

document.querySelectorAll("[data-reset-field]").forEach((button) => {
  button.addEventListener("click", () => {
    resetField(button.dataset.resetField);
  });
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const resetButton = event.target.closest("[data-reset-field]");

  if (resetButton) {
    resetField(resetButton.dataset.resetField);
  }
});

if (roadmapButton) {
  roadmapButton.addEventListener("click", () => {
    window.location.href = CALENDLY_PAGE_URL;
  });
}

if (receiveIdeaButton) {
  receiveIdeaButton.addEventListener("click", openLeadModal);
}

if (leadForm) {
  leadForm.addEventListener("submit", submitLead);
}

if (leadModalClose) {
  leadModalClose.addEventListener("click", closeLeadModal);
}

if (leadModalOverlay) {
  leadModalOverlay.addEventListener("click", closeLeadModal);
}
