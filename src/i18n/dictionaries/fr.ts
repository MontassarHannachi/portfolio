const dictionary = {
  language: "Français",
  navigation: {
    about: "À propos",
    experience: "Expérience",
    education: "Formation",
    certifications: "Certifications",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    location: "TOZEUR, TUNISIE",
    availability: "PORTFOLIO PERSONNEL",
    greeting: "Bonjour, je suis",
    name: "Montassar Hannachi",
    role: "Cloud, DevOps & System Administration",
    description: "Diplômé en Technologies de l’Informatique et actuellement étudiant en Master professionnel Cloud & DevOps à l’ISET de Tozeur, je m'intéresse à la conception, au déploiement et à l'administration d'infrastructures informatiques. À travers mes projets pratiques, j'ai travaillé avec OpenStack, Linux, Docker, Kubernetes et Flux CD, ainsi que sur la sécurisation des communications réseau. Mon objectif est de développer mes compétences et de contribuer à des projets dans les domaines du Cloud, du DevOps et de l'administration système.",
    expertise: "MES DOMAINES D'INTÉRÊT",
    technologies: ["CLOUD", "LINUX", "DEVOPS", "AUTOMATION"],
    projectsButton: "Découvrir mes projets",
    githubButton: "Voir mon GitHub",
    profileLabel: "CLOUD & DEVOPS",
  },


  experience: {
    eyebrow: "01 / EXPÉRIENCE",
    title: "Parcours professionnel",
    items: [
      {
        period: "Septembre 2022 – Juillet 2026",
        role: "Sous-officier",
        organization: "Ministère de la Défense nationale — Tunisie",
      },
      {
        period: "Janvier 2022 – Février 2022",
        role: "Stagiaire en support informatique",
        organization: "Office de l’Aviation Civile et des Aéroports (OACA) — Tozeur",
        description: "Participation aux activités de support informatique et assistance dans les opérations de dépannage.",
      },
    ],
  },
  education: {
    eyebrow: "02 / FORMATION",
    title: "Formation académique",
    items: [
      {
        period: "2026 – 2027",
        degree: "Master professionnel en Cloud & DevOps",
        institution: "ISET de Tozeur — Tunisie",
      },
      {
        period: "2021 – 2026",
        degree: "Licence appliquée en Technologies de l’Informatique — Réseaux et Systèmes Informatiques (RSI)",
        institution: "ISET de Tozeur — Tunisie",
        detail: "Diplôme obtenu en juin 2026 — Mention Bien",
      },
    ],
  },
  certifications: {
    eyebrow: "03 / CERTIFICATIONS",
    title: "Certifications et formations complémentaires",
    items: [
      { name: "CCNAv7 — Introduction to Networks", issuer: "Cisco Networking Academy", date: "Juillet 2022" },
      { name: "AI for Beginners", issuer: "HP LIFE", date: "Novembre 2025" },
      { name: "TechUp Explorer", issuer: "Udacity", date: "Juillet 2026" },
      { name: "Introduction to AI and Generative AI", issuer: "Udacity", date: "Juillet 2026" },
    ],
  },

skills: {
  eyebrow: "04 / COMPÉTENCES TECHNIQUES",
  title: "Compétences techniques",
  intro: "Technologies et outils expérimentés à travers mes projets, mes travaux pratiques et mon environnement de laboratoire.",
  categories: [
    {
      number: "01",
      title: "Cloud & Virtualisation",
      description: "Déploiement d'environnements OpenStack et gestion de ressources cloud avec Kolla-Ansible.",
      technologies: ["OpenStack", "Kolla-Ansible", "VMware", "VirtualBox"],
    },
    {
      number: "02",
      title: "Systèmes & Réseaux",
      description: "Administration des environnements Linux et Windows, configuration réseau et mise en place de tunnels VPN.",
      technologies: ["Linux", "Ubuntu", "Windows Server", "Bash", "TCP/IP", "Cisco", "pfSense", "IPsec"],
    },
    {
      number: "03",
      title: "DevOps & GitOps",
      description: "Conteneurisation, intégration continue et déploiement d'applications avec Kubernetes et Flux CD.",
      technologies: ["Docker", "Git", "GitHub Actions", "Kubernetes", "Minikube", "Flux CD"],
    },
    {
      number: "04",
      title: "Supervision & Platform Engineering",
      description: "Supervision des services avec Zabbix et expérimentation de portails développeur avec Backstage.",
      technologies: ["Zabbix", "Backstage"],
    },
    {
      number: "05",
      title: "Développement & Scripting",
      description: "Pratique de Python, SQL et Next.js à travers des projets et des environnements de laboratoire.",
      technologies: ["Python", "SQL", "Next.js"],
    },
  ],
},

  contact: {
    eyebrow: "06 / CONTACT",
    title: "Construisons quelque chose ensemble",
    description:
      "Vous avez une opportunité, un projet ou souhaitez échanger sur le Cloud et le DevOps ? Je serais ravi d'en discuter avec vous.",
    email: "montassarmh04@gmail.com",
    emailButton: "Me contacter",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  projects: {
    eyebrow: "05 / PROJETS SÉLECTIONNÉS",
    title: "Mes réalisations",
    intro:
      "Des projets pratiques autour du Cloud, de l'automatisation, du Platform Engineering et de la conteneurisation.",
    items: [
      {
        number: "01",
        category: "INFRASTRUCTURE CLOUD",
        title: "Infrastructure Cloud sécurisée multi-site",
        description:
          "Conception et déploiement d'une infrastructure Cloud privée avec OpenStack, initialement mise en œuvre avec DevStack pour comprendre et valider les services de la plateforme. Une seconde phase a porté sur le déploiement avec Kolla-Ansible. Interconnexion de deux sites via pfSense et un VPN IPsec IKEv2, supervision avec Zabbix et déploiement d'une application WordPress avec une base MySQL séparée. La phase DevStack a permis de valider 7 machines virtuelles, 3 réseaux, 2 routeurs virtuels et 6 Floating IPs.",
        technologies: [
          "OpenStack",
          "Kolla-Ansible",
          "Ubuntu",
          "pfSense",
          "IPsec",
          "Zabbix",
        ],
        links: [],
      },
      {
        number: "02",
        category: "PLATFORM ENGINEERING",
        title: "Portail développeur avec Backstage",
        description:
          "Configuration d'un portail développeur Backstage en environnement de laboratoire, avec catalogue logiciel, intégration GitHub Actions et backend PostgreSQL. Expérimentation de templates Scaffolder pour standardiser la création de microservices.",
        technologies: [
          "Backstage",
          "React",
          "Node.js",
          "PostgreSQL",
          "GitHub Actions",
        ],
        links: [
          {
            label: "Voir le dépôt",
            url: "https://github.com/MontassarHannachi/platform-engineering-demo",
          },
        ],
      },
      {
        number: "03",
        category: "KUBERNETES & GITOPS",
        title: "Déploiement automatisé avec GitOps",
        description:
          "Développement d'un microservice REST avec Node.js et Express, automatisation des tests et de la construction d'images Docker avec GitHub Actions, publication sur GHCR et déploiement sur Minikube piloté par Flux CD depuis un dépôt GitOps centralisé.",
        technologies: [
          "Docker",
          "Kubernetes",
          "Minikube",
          "Flux CD",
          "GitHub Actions",
          "GHCR",
        ],
        links: [
          {
            label: "Voir le microservice",
            url: "https://github.com/MontassarHannachi/user-service",
          },
          {
            label: "Voir le dépôt GitOps",
            url: "https://github.com/MontassarHannachi/platform-gitops",
          },
        ],
      },
      {
        number: "04",
        category: "CONTENEURISATION",
        title: "Application Flask conteneurisée",
        description:
          "Développement et conteneurisation d'une application Flask avec Docker. Création d'images versionnées, mise en place d'un endpoint /health pour vérifier l'état de l'application et configuration de limites de ressources CPU et mémoire pour les conteneurs.",
        technologies: [
          "Python",
          "Flask",
          "Docker",
          "Docker Hub",
        ],
        links: [
          {
            label: "Voir le dépôt",
            url: "https://github.com/MontassarHannachi/mini-projet-docker",
          },
        ],
      },
    ],
  },
};

export default dictionary;
