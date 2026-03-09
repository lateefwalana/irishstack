import SectionIntro from './SectionIntro';

function VenturesSection({ ventures }) {
  return (
    <section id="ventures">
      <div className="container">
        <SectionIntro
          label="Consumer Technology"
          title="Curated Tech Ventures"
          description="Beyond consultancy, we're actively building and exploring e-commerce opportunities in consumer technology — products that improve how people live, work, and experience the world."
        />

        <div className="ventures-grid">
          {ventures.map((venture, index) => (
            <article
              className={`venture-card ${venture.className} reveal`}
              key={venture.title}
              data-delay={index * 80}
            >
              <div className="venture-visual">
                <span className="emoji" aria-hidden="true">
                  {venture.emoji}
                </span>
              </div>
              <div className="venture-content">
                <p className="venture-tag">{venture.tag}</p>
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                <span className="venture-badge">Coming Soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VenturesSection;
