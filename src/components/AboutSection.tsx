import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { agency } from "@/config/agency";

export function AboutSection() {
  return (
    <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
      <div className="page-shell about-grid">
        <Reveal className="about-heading">
          <SectionTitle id="about-title" label="Who we are" title="A small studio focused on meaningful digital work." />
          <a className="about-side-link" href="#contact">Get to know us <ArrowUpRight size={15} /></a>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="about-lead">We are an independent digital studio working with businesses to create thoughtful, modern and functional websites.</p>
          <p>Our approach combines creative design, practical technology and clear communication. From the first conversation to final delivery, we focus on understanding what your business needs and building a solution around it.</p>
          <p>We coordinate specialist development resources where a project calls for them, keeping communication direct and the work focused.</p>
          <div className="about-signoff"><BrandMark className="about-mark" /><span>{agency.shortName}<small>Independent digital studio</small></span><MoveUpRight size={18} /></div>
        </Reveal>
      </div>
    </section>
  );
}
