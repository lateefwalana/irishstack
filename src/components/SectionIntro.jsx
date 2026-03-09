function SectionIntro({ label, title, description, centered = false }) {
  return (
    <>
      <p className={centered ? 'section-label reveal section-label--centered' : 'section-label reveal'}>
        {label}
      </p>
      <h2 className="reveal">{title}</h2>
      <p className={centered ? 'section-desc reveal section-desc--centered' : 'section-desc reveal'}>
        {description}
      </p>
    </>
  );
}

export default SectionIntro;
