import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { agency } from "@/config/agency";

export const metadata: Metadata = {
  title: "Terms & conditions",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <main className="legal-page page-shell" id="main-content">
        <p className="eyebrow"><span className="eyebrow-mark" />Legal</p>
        <h1>Terms & conditions</h1>
        <p className="legal-updated">Draft for review before launch</p>
        <p className="legal-draft-notice">This page is a publishing placeholder, not an agreed set of legal terms. Have it reviewed and complete it with your business details, jurisdiction, service terms and any project-specific contracts before launch.</p>
        <div className="legal-content">
          <h2>Using this website</h2>
          <p>The information on this site is provided to introduce {agency.name} and its services. Portfolio entries link to the businesses’ live websites.</p>
          <h2>Project enquiries</h2>
          <p>Sending an enquiry does not create a client relationship or commit either party to a project. Any work would be subject to a separate written proposal and agreement.</p>
          <h2>Questions</h2>
          <p>For general questions, email <a href={"mailto:" + agency.email}>{agency.email}</a>. Replace the placeholder contact information and obtain appropriate review before relying on these terms.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
