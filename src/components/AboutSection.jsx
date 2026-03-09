function AboutSection({ points }) {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-box">
              <div className="about-box-text">
                IRISH
                <br />
                STACK
              </div>
            </div>
            <div className="about-corner">
              🇮🇪 Irish
              <br />
              Owned &amp; Operated
            </div>
          </div>

          <div className="about-content reveal">
            <p className="section-label">About IrishStack</p>
            <h2>Lean, Capable &amp; Built for Growth</h2>
            <p>
              IrishStack was founded with a straightforward belief: great technology doesn't
              need to be overcomplicated. We're a lean Irish technology company that combines
              deep technical expertise with commercial ambition.
            </p>
            <p>
              As an IT consultancy, we bring senior-level thinking to every engagement. As a
              ventures company, we're building and exploring product opportunities in consumer
              technology — finding the right products for the European market.
            </p>
            <ul className="about-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
