import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { agency } from "@/config/agency";

export const metadata: Metadata = {
  title: "Privacy notice",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <main className="legal-page page-shell" id="main-content">
        <p className="eyebrow"><span className="eyebrow-mark" />Legal</p>
        <h1>Privacy notice</h1>
        <p className="legal-updated">Draft for review before launch</p>
        <p className="legal-draft-notice">This is a starter draft, not a finished privacy policy. Before publishing, confirm the data controller, hosting provider, form service, retention periods, lawful bases and contact details for your actual setup.</p>
        <div className="legal-content">
          <h2>About this site</h2>
          <p>{agency.name} is an independent digital studio. This website template does not add analytics or advertising tools. The hosting provider may process technical data as part of serving the site; confirm the provider’s details and practices before launch.</p>
          <h2>Project enquiries</h2>
          <p>The enquiry form is not connected in this starter. It does not send a submission until an endpoint is configured. Once connected, form details are sent to the endpoint you choose. Update this notice to identify that provider, explain how enquiry data is used and retained, and describe the choices available to people who contact you.</p>
          <h2>Contact</h2>
          <p>For privacy questions, contact <a href={"mailto:" + agency.email}>{agency.email}</a>. Replace this placeholder address and review the complete notice against the services and processes used by your business.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
