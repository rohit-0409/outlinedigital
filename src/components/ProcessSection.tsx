import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { processSteps } from "@/config/agency";

export function ProcessSection() {
  return (
    <section className="process-section section-wrap" id="process" aria-labelledby="process-title">
      <div className="page-shell">
        <Reveal>
          <SectionTitle id="process-title" label="How we work" title="A straightforward process. No unnecessary complexity." description="Clear steps, open communication and a considered approach from the first conversation to launch." />
        </Reveal>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="process-step">
                <div className="process-step-top"><span>{step.number}</span><ArrowDownRight size={17} aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
