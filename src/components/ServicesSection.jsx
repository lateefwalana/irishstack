import SectionIntro from './SectionIntro';
import { useReveal } from '../hooks/useReveal';

function ServicesSection({ services }) {
  useReveal();

  return (
    <section id="services">
      <div className="container">
        <SectionIntro
          label="What We Do"
          title={
            <>
              IT Consultancy
              <br />
              for the Modern Business
            </>
          }
          description="We partner with businesses to deliver pragmatic, end-to-end technology solutions — from strategy and architecture to implementation and ongoing support."
        />

        <div className="services-grid reveal">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
