function HeroSection({ stats }) {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-tag">Based in Ireland · Est. 2025</div>
        <h1>
          Technology
          <br />
          Built to
          <br />
          <em>Scale.</em>
        </h1>
        <p className="hero-sub">
          IrishStack is an IT consultancy and technology ventures company helping businesses
          modernise, innovate, and grow — while exploring the cutting edge of consumer
          technology.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            Our Services →
          </a>
          <a href="#ventures" className="btn-ghost">
            Explore Ventures
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => {
            const [prefix, suffix] = stat.value.split(stat.accent);
            return (
              <div className="stat-item" key={stat.label}>
                <div className="stat-value">
                  {prefix}
                  <span>{stat.accent}</span>
                  {suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
