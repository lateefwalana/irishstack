import SectionIntro from './SectionIntro';

function ContactSection({ links }) {
  return (
    <section id="contact">
      <div className="container">
        <SectionIntro
          label="Get In Touch"
          title={
            <>
              Let's Build
              <br />
              Something Together
            </>
          }
          description="Whether you need a technology partner for your business, or want to be among the first to know about our upcoming product launches — we'd love to hear from you."
          centered
        />

        <a href="mailto:hello@irishstack.com" className="contact-email reveal">
          hello@irishstack.com
        </a>

        <div className="contact-links">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link reveal"
              data-delay={index * 80}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              <span aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
