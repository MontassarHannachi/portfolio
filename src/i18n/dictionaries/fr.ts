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
      "Diplômé en Technologies de l'Informatique et étudiant en Master Cloud & DevOps, je m'intéresse à la conception, au déploiement et à la sécurisation des infrastructures Cloud. J'ai réalisé des projets pratiques autour d'OpenStack, Linux, des réseaux, de Docker et du déploiement Kubernetes avec GitOps.",
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
          "Conception et déploiement d'une infrastructure Cloud privée avec OpenStack, sécurisation des communications inter-sites par VPN IPsec et supervision avec Zabbix.",
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
          "Mise en place d'un portail développeur avec catalogue logiciel, intégration GitHub Actions et template Scaffolder pour faciliter la création de microservices.",
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
          "Mise en place d'une chaîne CI/CD pour tester et construire un microservice, publier son image sur GHCR et automatiser son déploiement Kubernetes avec Flux CD.",
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
          "Conteneurisation d'une application Flask avec création de versions d'image, endpoint de santé et définition de limites de ressources Docker.",
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
