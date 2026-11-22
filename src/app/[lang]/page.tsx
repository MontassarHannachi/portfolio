import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { isLocale } from "@/i18n/config";
import fr from "@/i18n/dictionaries/fr";
import en from "@/i18n/dictionaries/en";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = lang === "fr" ? fr : en;
  const hero = dictionary.hero;

  return (
    <main className="site-shell">
      <header className="site-header">
        <nav
  className="navigation"
  aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}
>
          <Link href={`/${lang}`} className="brand" aria-label={lang === "fr" ? "Accueil" : "Home"}>
            MH<span>.</span>
          </Link>

          <div className="nav-links">
            <a href="#about">{dictionary.navigation.about}</a>
            <a href="#experience">{dictionary.navigation.experience}</a>
            <a href="#education">{dictionary.navigation.education}</a>
            <a href="#certifications">{dictionary.navigation.certifications}</a>
            <a href="#skills">{dictionary.navigation.skills}</a>
            <a href="#projects">{dictionary.navigation.projects}</a>
            <a href="#contact">{dictionary.navigation.contact}</a>
            <LanguageSwitcher locale={lang} />
            <ThemeToggle locale={lang} />
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-location">
            {hero.location}
          </div>

          <p className="hero-greeting">{hero.greeting}</p>

          <h1>{hero.name}</h1>

          <h2 className="hero-role">{hero.role}</h2>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {hero.projectsButton}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/MontassarHannachi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.githubButton}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="visual-frame">
            <div className="frame-top">
              <span>MH / 2026</span>
              <span className="frame-indicator">●</span>
            </div>

            <Image
              src="/images/profile.webp"
              alt={lang === "fr" ? "Portrait de Montassar Hannachi" : "Portrait of Montassar Hannachi"}
              fill
              priority
              sizes="(max-width: 850px) 80vw, 350px"
              className="profile-image"
            />

            <div className="frame-bottom">
              <span>{hero.profileLabel}</span>
              <span>01 — 04</span>
            </div>
          </div>

          <div className="floating-label floating-label-top">
            <span className="floating-symbol">⌘</span>
            Cloud Infrastructure
          </div>

          <div className="floating-label floating-label-bottom">
            <span className="floating-symbol">{"</>"}</span>
            DevOps & Automation
          </div>
        </div>
      </section>



      <section className="about-section" id="about">
        <div className="about-content">
          <p className="section-eyebrow">{dictionary.about.eyebrow}</p>
          <h2>{dictionary.about.title}</h2>
          <p className="about-description">{dictionary.about.description}</p>
        </div>
      </section>

      <section className="resume-section" id="experience">
        <div className="resume-heading">
          <p className="section-eyebrow">{dictionary.experience.eyebrow}</p>
          <h2>{dictionary.experience.title}</h2>
        </div>
        <div className="resume-grid">
          {dictionary.experience.items.map((item) => (
            <article className="resume-card" key={item.period}>
              <span className="resume-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="resume-organization">{item.organization}</p>
              {"description" in item && item.description && (
                <p className="resume-detail">{item.description}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" id="education">
        <div className="resume-heading">
          <p className="section-eyebrow">{dictionary.education.eyebrow}</p>
          <h2>{dictionary.education.title}</h2>
        </div>
        <div className="resume-grid">
          {dictionary.education.items.map((item) => (
            <article className="resume-card" key={item.period}>
              <span className="resume-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="resume-organization">{item.institution}</p>
              {"detail" in item && item.detail && (
                <p className="resume-detail">{item.detail}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" id="certifications">
        <div className="resume-heading">
          <p className="section-eyebrow">{dictionary.certifications.eyebrow}</p>
          <h2>{dictionary.certifications.title}</h2>
        </div>
        <div className="resume-grid certifications-grid">
          {dictionary.certifications.items.map((item) => (
            <article className="resume-card certification-card" key={item.name}>
              <span className="resume-period">{item.date}</span>
              <h3>{item.name}</h3>
              <p className="resume-organization">{item.issuer}</p>
            </article>
          ))}
        </div>
      </section>

<section className="skills-section" id="skills">
  <div className="skills-heading">
    <p className="section-eyebrow">{dictionary.skills.eyebrow}</p>
    <h2>{dictionary.skills.title}</h2>
    <p>{dictionary.skills.intro}</p>
  </div>

  <div className="skills-grid">
    {dictionary.skills.categories.map((category) => (
      <article className="skill-card" key={category.number}>
        <span className="skill-number">{category.number}</span>

        <h3>{category.title}</h3>

        <p className="skill-description">{category.description}</p>

        <div className="skill-tags">
          {category.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>



<section className="projects-section" id="projects">
  <div className="projects-heading">
    <p className="section-eyebrow">{dictionary.projects.eyebrow}</p>
    <h2>{dictionary.projects.title}</h2>
    <p>{dictionary.projects.intro}</p>
  </div>

  <div className="projects-grid">
    {dictionary.projects.items.map((project) => (
      <article className="project-card" key={project.number}>
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {(project.links?.length ?? 0) > 0 && (
          <div className="project-links">
            {project.links?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </article>
    ))}
  </div>
</section>


      <section className="contact-section" id="contact">
  <div className="contact-content">
    <p className="section-eyebrow">
      {dictionary.contact.eyebrow}
    </p>

    <h2>{dictionary.contact.title}</h2>

    <p className="contact-description">
      {dictionary.contact.description}
    </p>

    <div className="contact-actions">
      <a
        className="contact-email"
        href={`mailto:${dictionary.contact.email}`}
      >
        {dictionary.contact.emailButton}
        <span aria-hidden="true">↗</span>
      </a>

      <a
        className="contact-social"
        href="https://www.linkedin.com/in/montassar-hannachi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {dictionary.contact.linkedinLabel}
        <span aria-hidden="true">↗</span>
      </a>

      <a
        className="contact-social"
        href="https://github.com/MontassarHannachi"
        target="_blank"
        rel="noopener noreferrer"
      >
        {dictionary.contact.githubLabel}
        <span aria-hidden="true">↗</span>
      </a>

    </div>
  </div>
</section>

<footer className="site-footer">
  <span>© 2026 Montassar Hannachi</span>
  <span>Cloud · Linux · DevOps</span>
</footer>
    </main>
  );
}
