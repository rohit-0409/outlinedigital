import { ArrowUpRight, Clock3, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { agency } from "@/config/agency";

export function ContactSection() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <Reveal className="contact-heading">
          <SectionTitle id="contact-title" label="Start a conversation" title="Have a project in mind?" description="Tell us a little about your business and what you’re looking to build. We’ll get back to you to discuss the next steps." />
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-aside">
            <div className="contact-detail"><span className="contact-detail-icon"><Mail size={17} /></span><div><small>Prefer email?</small><a href={"mailto:" + agency.email}>{agency.email}<ArrowUpRight size={13} /></a></div></div>
            <div className="contact-detail"><span className="contact-detail-icon"><Clock3 size={17} /></span><div><small>Typical response</small><strong>{agency.responseTime}</strong></div></div>
            <div className="contact-aside-note"><span>Good work starts with a good conversation.</span><i aria-hidden="true">↗</i></div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.08}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
