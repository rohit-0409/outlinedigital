import { Reveal } from "@/components/Reveal";
import { principles } from "@/config/agency";

export function IntroSection() {
  return (
    <section className="intro-section section-wrap" aria-labelledby="intro-title">
      <div className="page-shell intro-grid">
        <Reveal className="intro-lead">
          <p className="eyebrow"><span className="eyebrow-mark" />A better first impression</p>
          <h2 id="intro-title">Good websites do more than <span>look good.</span></h2>
        </Reveal>
        <Reveal className="intro-content" delay={0.08}>
          <p className="intro-copy">They communicate clearly, build trust, and make it easier for potential customers to take action.</p>
          <div className="principles-grid">
            {principles.map((principle) => (
              <div className="principle" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
