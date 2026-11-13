const projects = [
  {
    title: "Infrastructure Cloud OpenStack",
    description: "Cloud privé multi-site sécurisé avec VPN IPsec et supervision.",
    tech: "OpenStack · Kolla-Ansible · pfSense · Zabbix",
  },
  {
    title: "Platform Engineering",
    description: "Portail développeur interne avec Backstage et GitHub.",
    tech: "Backstage · Docker · PostgreSQL",
  },
  {
    title: "Kubernetes GitOps",
    description: "Déploiement automatisé avec Flux CD et GitHub Actions.",
    tech: "Kubernetes · Minikube · Flux CD",
  },
  {
    title: "Docker Mini Project",
    description: "Conteneurisation d'une application Flask.",
    tech: "Docker · Python · Flask",
  },
];

export default function Home() {
  return (
    <main>
      <nav>
        <strong>MH.</strong>
        <div>
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="https://github.com/MontassarHannachi" target="_blank">GitHub</a>
        </div>
      </nav>

      <section className="hero" id="about">
        <p className="tag">PORTFOLIO · TOZEUR, TUNISIE</p>
        <h1>Montassar Hannachi</h1>
        <h2>Junior Cloud & DevOps Engineer</h2>
        <p>
          Je conçois et déploie des infrastructures Cloud sécurisées.
          Je m&apos;intéresse à Linux, l&apos;automatisation, la conteneurisation
          et les architectures DevOps.
        </p>
        <a className="btn" href="#projects">Découvrir mes projets</a>
        <a className="btn" href="https://github.com/MontassarHannachi" target="_blank">
          Mon GitHub
        </a>
      </section>

      <section id="skills">
        <h2>Compétences techniques</h2>
        <div className="skills">
          {["Linux & Administration système", "Docker & Kubernetes",
            "Ansible & Terraform", "OpenStack & Cloud",
            "Réseaux & pfSense", "Git & GitHub Actions",
            "VPN IPsec & Zabbix"].map((skill) => (
            <article className="card" key={skill}>{skill}</article>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projets réalisés</h2>
        <div className="projects">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </section>

      <footer>
        © 2026 Montassar Hannachi · Cloud & DevOps Portfolio
      </footer>
    </main>
  );
}
