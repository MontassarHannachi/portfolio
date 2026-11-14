const dictionary = {
  language: "Français",
  navigation: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  hero: {
    location: "TOZEUR, TUNISIE",
    availability: "PORTFOLIO PERSONNEL",
    greeting: "Bonjour, je suis",
    name: "Montassar Hannachi",
    role: "Junior Cloud & DevOps Engineer",
    description:
      "Diplômé en Technologies de l'Informatique et étudiant en Master professionnel Cloud & DevOps, je développe mes compétences dans la conception, le déploiement et l'administration d'infrastructures informatiques. À travers mes projets pratiques, j'ai conçu une infrastructure Cloud privée avec OpenStack, sécurisé les communications inter-sites par VPN IPsec, déployé une solution de supervision avec Zabbix et expérimenté les pratiques DevOps avec Docker, Kubernetes et Flux CD. Je m'intéresse particulièrement à l'administration Linux, au Cloud Computing, à l'automatisation et au Platform Engineering. Mon objectif est de contribuer à des projets d'infrastructure et de déploiement tout en approfondissant mes compétences techniques.",
    expertise: "MES DOMAINES D'INTÉRÊT",
    technologies: ["CLOUD", "LINUX", "DEVOPS", "AUTOMATION"],
    projectsButton: "Découvrir mes projets",
    githubButton: "Voir mon GitHub",
    cvButton: "CV bientôt disponible",
    profileLabel: "CLOUD & DEVOPS",
  },
  skills: {
    eyebrow: "01 / COMPÉTENCES TECHNIQUES",
    title: "Mon environnement technique",
    intro: "Les technologies et outils que j’ai utilisés dans mes projets et travaux pratiques.",
    categories: [
      {
        number: "01",
        title: "Cloud & Infrastructure",
        description: "Conception et administration d’infrastructures virtualisées et Cloud.",
        technologies: ["OpenStack", "Kolla-Ansible", "VMware", "VirtualBox"],
      },
      {
        number: "02",
        title: "Linux & Réseaux",
        description: "Administration système, configuration réseau et sécurisation des communications.",
        technologies: ["Linux", "Ubuntu", "Windows Server", "TCP/IP", "Cisco", "pfSense", "IPsec"],
      },
      {
        number: "03",
        title: "DevOps & Automatisation",
        description: "Conteneurisation, intégration continue et déploiement automatisé.",
        technologies: ["Docker", "Git", "GitHub Actions", "Kubernetes", "Minikube", "Flux CD"],
      },
      {
        number: "04",
        title: "Monitoring & Développement",
        description: "Supervision des services et développement d’applications et de scripts.",
        technologies: ["Zabbix", "Python", "Bash", "SQL", "Backstage", "Next.js"],
      },
    ],
  },
  contact: {
    eyebrow: "03 / CONTACT",
    title: "Construisons quelque chose ensemble",
    description:
      "Vous avez une opportunité, un projet ou souhaitez échanger sur le Cloud et le DevOps ? Je serais ravi d'en discuter avec vous.",
    email: "montassarmh04@gmail.com",
    emailButton: "Me contacter",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
  },
  projects: {
    eyebrow: "02 / PROJETS SÉLECTIONNÉS",
    title: "Mes réalisations",
    intro:
      "Des projets pratiques autour du Cloud, de l'automatisation, du Platform Engineering et de la conteneurisation.",
    items: [
      {
        number: "01",
        category: "CLOUD INFRASTRUCTURE",
        title: "Infrastructure Cloud sécurisée multi-site",
        description:
          "Conception et déploiement d'une infrastructure Cloud privée avec OpenStack et Kolla-Ansible. Mise en place de deux sites interconnectés par un VPN IPsec IKEv2 via pfSense et supervision avec Zabbix. L'infrastructure comprend 7 machines virtuelles, 3 réseaux, 2 routeurs virtuels et 6 Floating IPs. Déploiement d'une application WordPress avec MySQL.",
        technologies: [
          "OpenStack",
          "Kolla-Ansible",
          "Ubuntu",
          "pfSense",
          "IPsec",
          "Zabbix",
        ],
        links: [],
        status: "Dépôt à publier",
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
        links: [],
        status: "Dépôt à publier",
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
            label: "Dépôt GitOps",
            url: "https://github.com/MontassarHannachi/platform-gitops",
          },
          {
            label: "Microservice",
            url: "https://github.com/MontassarHannachi/user-service",
          },
        ],
        status: "",
      },
      {
        number: "04",
        category: "CONTAINERIZATION",
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
        status: "",
      },
    ],
  },
};

export default dictionary;
