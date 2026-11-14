const dictionary = {
  language: "English",
  navigation: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    location: "TOZEUR, TUNISIA",
    availability: "PERSONAL PORTFOLIO",
    greeting: "Hello, I'm",
    name: "Montassar Hannachi",
    role: "Junior Cloud & DevOps Engineer",
    description:
      "A graduate in Information Technology and currently pursuing a Master's in Cloud & DevOps, I focus on designing, deploying, and securing Cloud infrastructures. I have completed hands-on projects involving OpenStack, Linux, networking, Docker, and Kubernetes deployment with GitOps.",
    expertise: "AREAS OF INTEREST",
    technologies: ["CLOUD", "LINUX", "DEVOPS", "AUTOMATION"],
    projectsButton: "Explore my projects",
    githubButton: "Visit my GitHub",
    cvButton: "CV coming soon",
    profileLabel: "CLOUD & DEVOPS",
  },
  skills: {
    eyebrow: "01 / TECHNICAL SKILLS",
    title: "My Technical Environment",
    intro: "Technologies and tools I have used in my projects and hands-on labs.",
    categories: [
      {
        number: "01",
        title: "Cloud & Infrastructure",
        description: "Design and administration of virtualized and Cloud infrastructures.",
        technologies: ["OpenStack", "Kolla-Ansible", "VMware", "VirtualBox"],
      },
      {
        number: "02",
        title: "Linux & Networking",
        description: "System administration, network configuration and secure communications.",
        technologies: ["Linux", "Ubuntu", "Windows Server", "TCP/IP", "Cisco", "pfSense", "IPsec"],
      },
      {
        number: "03",
        title: "DevOps & Automation",
        description: "Containerization, continuous integration and automated deployment.",
        technologies: ["Docker", "Git", "GitHub Actions", "Kubernetes", "Minikube", "Flux CD"],
      },
      {
        number: "04",
        title: "Monitoring & Development",
        description: "Service monitoring and application and script development.",
        technologies: ["Zabbix", "Python", "Bash", "SQL", "Backstage", "Next.js"],
      },
    ],
  },
  contact: {
    eyebrow: "03 / CONTACT",
    title: "Let's build something together",
    description:
      "Have an opportunity, a project, or want to discuss Cloud and DevOps? I would be happy to hear from you.",
    email: "montassarmh04@gmail.com",
    emailButton: "Get in touch",
    githubLabel: "GitHub",
  },
  projects: {
    eyebrow: "02 / SELECTED PROJECTS",
    title: "My Work",
    intro:
      "Hands-on projects focused on Cloud infrastructure, automation, Platform Engineering and containerization.",
    items: [
      {
        number: "01",
        category: "CLOUD INFRASTRUCTURE",
        title: "Secure Multi-Site Cloud Infrastructure",
        description:
          "Designed and deployed a private Cloud infrastructure using OpenStack, secured inter-site communications with IPsec VPN and monitored services with Zabbix.",
        technologies: [
          "OpenStack",
          "Kolla-Ansible",
          "Ubuntu",
          "pfSense",
          "IPsec",
          "Zabbix",
        ],
        links: [],
        status: "Repository coming soon",
      },
      {
        number: "02",
        category: "PLATFORM ENGINEERING",
        title: "Developer Portal with Backstage",
        description:
          "Built a developer portal featuring a software catalog, GitHub Actions integration and a Scaffolder template to streamline microservice creation.",
        technologies: [
          "Backstage",
          "React",
          "Node.js",
          "PostgreSQL",
          "GitHub Actions",
        ],
        links: [],
        status: "Repository coming soon",
      },
      {
        number: "03",
        category: "KUBERNETES & GITOPS",
        title: "Automated Deployment with GitOps",
        description:
          "Implemented a CI/CD pipeline to test and build a microservice, publish its image to GHCR and automate Kubernetes deployment with Flux CD.",
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
            label: "GitOps Repository",
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
        title: "Containerized Flask Application",
        description:
          "Containerized a Flask application, created versioned Docker images, added a health endpoint and configured Docker resource limits.",
        technologies: [
          "Python",
          "Flask",
          "Docker",
          "Docker Hub",
        ],
        links: [
          {
            label: "View Repository",
            url: "https://github.com/MontassarHannachi/mini-projet-docker",
          },
        ],
        status: "",
      },
    ],
  },
};

export default dictionary;
