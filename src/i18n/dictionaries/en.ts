const dictionary = {
  language: "English",
  navigation: {
    about: "About",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    location: "TOZEUR, TUNISIA",
    greeting: "Hello, I'm",
    name: "Montassar Hannachi",
    role: "Cloud, DevOps & Systems Administration",
    description: "An Information Technology graduate, currently pursuing a Professional Master's degree in Cloud & DevOps at ISET Tozeur.",
    projectsButton: "Explore my projects",
    githubButton: "Visit my GitHub",
    profileLabel: "CLOUD & DEVOPS",
  },

  about: {
    eyebrow: "01 / ABOUT",
    title: "A background focused on infrastructure and automation",
    description: "I am interested in designing, deploying and managing IT infrastructure. Through hands-on projects, I have explored OpenStack, Linux, Docker, Kubernetes and Flux CD, along with infrastructure automation and security. I aim to further develop my skills and contribute to projects in Cloud, DevOps and systems administration.",
  },


  experience: {
    eyebrow: "02 / EXPERIENCE",
    title: "Professional Experience",
    items: [
      {
        period: "September 2022 – July 2026",
        role: "Non-commissioned officer",
        organization: "Ministry of National Defence — Tunisia",
      },
      {
        period: "January 2022 – February 2022",
        role: "IT Support Intern",
        organization: "Office of Civil Aviation and Airports (OACA) — Tozeur",
        description: "Assisted with IT support activities and basic troubleshooting operations.",
      },
    ],
  },
  education: {
    eyebrow: "03 / EDUCATION",
    title: "Academic Background",
    items: [
      {
        period: "2026 – 2027",
        degree: "Professional Master's Degree in Cloud & DevOps",
        institution: "ISET Tozeur — Tunisia",
      },
      {
        period: "2021 – 2026",
        degree: "Applied Bachelor's Degree in Information Technology — Computer Networks and Systems (RSI)",
        institution: "ISET Tozeur — Tunisia",
        detail: "Graduated in June 2026 — awarded “Mention Bien”.",
      },
    ],
  },
  certifications: {
    eyebrow: "04 / CERTIFICATIONS",
    title: "Certifications & Additional Training",
    items: [
      { name: "CCNAv7 — Introduction to Networks", issuer: "Cisco Networking Academy", date: "July 2022" },
      { name: "AI for Beginners", issuer: "HP LIFE", date: "November 2025" },
      { name: "TechUp Explorer", issuer: "Udacity", date: "July 2026" },
      { name: "Introduction to AI and Generative AI", issuer: "Udacity", date: "July 2026" },
    ],
  },

skills: {
  eyebrow: "05 / TECHNICAL SKILLS",
  title: "Technical Skills",
  intro: "Technologies and tools applied across my projects, practical labs and personal lab environment.",
  categories: [
    {
      number: "01",
      title: "Cloud & Virtualization",
      description: "Deployment of OpenStack environments and management of cloud resources using Kolla-Ansible.",
      technologies: ["OpenStack", "Kolla-Ansible", "VMware", "VirtualBox"],
    },
    {
      number: "02",
      title: "Systems & Networking",
      description: "Linux and Windows environment administration, network configuration and VPN tunnel setup.",
      technologies: ["Linux", "Ubuntu", "Windows Server", "Bash", "TCP/IP", "Cisco", "pfSense", "IPsec"],
    },
    {
      number: "03",
      title: "DevOps & GitOps",
      description: "Containerization, continuous integration and application deployment with Kubernetes and Flux CD.",
      technologies: ["Docker", "Git", "GitHub Actions", "Kubernetes", "Minikube", "Flux CD"],
    },
    {
      number: "04",
      title: "Monitoring & Platform Engineering",
      description: "Service monitoring with Zabbix and experimentation with developer portals using Backstage.",
      technologies: ["Zabbix", "Backstage"],
    },
    {
      number: "05",
      title: "Development & Scripting",
      description: "Hands-on practice with Python, SQL and Next.js through projects and lab environments.",
      technologies: ["Python", "SQL", "Next.js"],
    },
  ],
},

  contact: {
    eyebrow: "07 / CONTACT",
    title: "Let's build something together",
    description:
      "Have an opportunity, a project, or want to discuss Cloud and DevOps? I would be happy to hear from you.",
    email: "montassarmh04@gmail.com",
    emailButton: "Get in touch",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  projects: {
    eyebrow: "06 / SELECTED PROJECTS",
    title: "My Work",
    intro:
      "Hands-on projects focused on Cloud infrastructure, automation, Platform Engineering and containerization.",
    items: [
      {
        number: "01",
        category: "CLOUD INFRASTRUCTURE",
        title: "Secure Multi-Site Cloud Infrastructure",
        description:
          "Designed and deployed a private Cloud infrastructure with OpenStack, initially implemented with DevStack to understand and validate the platform services. A second phase focused on deployment with Kolla-Ansible. Connected two sites through pfSense and an IPsec IKEv2 VPN, implemented monitoring with Zabbix, and deployed WordPress with a separate MySQL database. The DevStack phase validated 7 virtual machines, 3 networks, 2 virtual routers, and 6 Floating IPs.",
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
        links: [
          {
            label: "View Repository",
            url: "https://github.com/MontassarHannachi/platform-engineering-demo",
          },
        ],
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
            label: "View Microservice",
            url: "https://github.com/MontassarHannachi/user-service",
          },
          {
            label: "View GitOps Repository",
            url: "https://github.com/MontassarHannachi/platform-gitops",
          },
        ],
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
      },
    ],
  },
};

export default dictionary;
