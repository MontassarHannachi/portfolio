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
      "A graduate in Information Technology and currently pursuing a Professional Master's degree in Cloud & DevOps, I am developing my skills in designing, deploying, and administering IT infrastructures. Through hands-on projects, I have built a private Cloud infrastructure with OpenStack, secured inter-site communications using IPsec VPN, deployed monitoring with Zabbix, and explored DevOps practices with Docker, Kubernetes, and Flux CD. My main interests include Linux system administration, Cloud Computing, automation, and Platform Engineering. My goal is to contribute to infrastructure and deployment projects while continuously improving my technical skills.",
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
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
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
          "Designed and deployed a private Cloud infrastructure using OpenStack and Kolla-Ansible. Connected two sites through an IPsec IKEv2 VPN using pfSense and implemented monitoring with Zabbix. The infrastructure includes 7 virtual machines, 3 networks, 2 virtual routers, and 6 Floating IPs. Deployed a WordPress application with MySQL.",
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
          "Configured a Backstage developer portal in a lab environment, featuring a software catalog, GitHub Actions integration, and a PostgreSQL backend. Explored Scaffolder templates to standardize microservice creation.",
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
          "Developed a REST microservice with Node.js and Express, automated testing and Docker image builds with GitHub Actions, published images to GHCR, and deployed to Minikube using Flux CD and a centralized GitOps repository.",
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
          "Developed and containerized a Flask application with Docker. Created versioned images, added a /health endpoint to check application status, and configured CPU and memory resource limits for containers.",
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
