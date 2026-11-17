import { Code2, Gauge, PanelsTopLeft, PencilRuler } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/config/agency";

const serviceIcons = {
  design: PencilRuler,
  development: Code2,
  landing: PanelsTopLeft,
  optimization: Gauge,
};

export function ServicesSection() {
  return (
    <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
      <div className="page-shell services-grid">
        <Reveal className="services-intro">
          <SectionTitle id="services-title" label="What we do" title="Everything you need to build a stronger digital presence." description="From a first conversation to the final handover, the work is shaped around what your business needs." />
          <a className="text-link services-link" href="#contact">Talk through your project <span aria-hidden="true">↗</span></a>
        </Reveal>
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.number} delay={index * 0.04}>
                <article className="service-row">
                  <span className="service-number">{service.number}</span>
                  <div className="service-main">
                    <div className="service-heading"><h3>{service.title}</h3><span className="service-icon"><Icon size={19} strokeWidth={1.55} /></span></div>
                    <p>{service.description}</p>
                    <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
