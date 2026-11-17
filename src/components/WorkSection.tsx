import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/config/agency";

function ProjectCard({ project, delay }: { project: (typeof projects)[number]; delay: number }) {
  return (
    <Reveal className={"project-card project-card-" + project.visual} delay={delay}>
      <article>
        <a className={"project-visual project-visual-" + project.visual} href={project.url} target="_blank" rel="noreferrer" aria-label={"Visit " + project.name + " website (opens in a new tab)"}>
          <span className="project-browser-top"><span>{project.domain}</span><span className="project-browser-pill">Live website</span></span>
          <span className="project-preview-art" aria-hidden="true"><span /><span /><span /></span>
          <span className="project-preview-copy">
            <span className="project-preview-label">{project.previewLabel}</span>
            <strong>{project.name}</strong>
            <span className="project-preview-link">Visit live website <ArrowUpRight size={14} /></span>
          </span>
          <span className="project-visual-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </a>
        <div className="project-meta">
          <div>
            <p className="project-category"><span>{project.number}</span>{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          <p className="project-note">{project.note}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function WorkSection() {
  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="page-shell">
        <Reveal>
          <SectionTitle id="work-title" label="Selected work" title="Digital experiences, thoughtfully crafted." description="A selection of live websites for businesses across agriculture, real estate, food and animal health." />
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.number} project={project} delay={index * 0.07} />)}
        </div>
      </div>
    </section>
  );
}
