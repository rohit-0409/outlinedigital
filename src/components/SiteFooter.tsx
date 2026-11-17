import { ArrowUpRight } from "lucide-react";
import { agency, navigation, sitePath } from "@/config/agency";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div className="footer-brand-block">
              <a className="wordmark footer-wordmark" href={sitePath("/")} aria-label={agency.name + " home"}>
              <span className="wordmark-icon">O</span><span>{agency.shortName}<span className="wordmark-dot">.</span></span>
            </a>
            <p>Thoughtful websites and digital solutions for ambitious businesses.</p>
            <a className="footer-email" href={"mailto:" + agency.email}>{agency.email}<ArrowUpRight size={14} /></a>
          </div>
          <div className="footer-links-block">
            <div><h2>Explore</h2>{navigation.map((item) => <a href={sitePath("/") + item.href} key={item.href}>{item.label}</a>)}<a href={sitePath("/") + "#contact"}>Contact</a></div>
            <div><h2>Elsewhere</h2><a href={agency.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={12} /></a>{agency.instagramUrl ? <a href={agency.instagramUrl} target="_blank" rel="noreferrer">Instagram<ArrowUpRight size={12} /></a> : null}</div>
            <div><h2>Legal</h2><a href={sitePath("/privacy/")}>Privacy notice</a><a href={sitePath("/terms/")}>Terms & conditions</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {year} {agency.name}. All rights reserved.</span><a href="#top">Back to top ↑</a><span>Independent digital studio · UK</span></div>
      </div>
    </footer>
  );
}
