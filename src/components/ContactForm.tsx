"use client";

import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { agency, budgetRanges, projectTypes, sitePath } from "@/config/agency";

type FormValues = {
  name: string;
  email: string;
  company: string;
  website: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

function getValues(form: HTMLFormElement): FormValues {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    company: String(data.get("company") ?? "").trim(),
    website: String(data.get("website") ?? "").trim(),
    projectType: String(data.get("projectType") ?? ""),
    budget: String(data.get("budget") ?? ""),
    message: String(data.get("message") ?? "").trim(),
  };
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid business email.";
  if (!values.company) errors.company = "Please enter your company name.";
  if (values.website && !/^https?:\/\/.+\..+/.test(values.website)) errors.website = "Include the full website address, starting with https://.";
  if (!values.projectType) errors.projectType = "Choose a project type.";
  if (!values.budget) errors.budget = "Choose an estimated budget.";
  if (values.message.length < 20) errors.message = "Please add a little more detail (at least 20 characters).";
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p className="field-error" id={id}>{message}</p> : null;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = getValues(form);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus("idle");
    const firstError = Object.keys(nextErrors)[0] as keyof FormValues | undefined;
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLElement | null)?.focus();
      return;
    }
    if (!agency.contactEndpoint) {
      setStatus("unconfigured");
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch(agency.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("The enquiry could not be submitted.");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const locked = status === "submitting";
  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Full name <span>*</span></label>
          <input id="name" name="name" autoComplete="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Business email <span>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.co.uk" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="company">Company name <span>*</span></label>
          <input id="company" name="company" autoComplete="organization" placeholder="Your company" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "company-error" : undefined} />
          <FieldError id="company-error" message={errors.company} />
        </div>
        <div className="form-field">
          <label htmlFor="website">Website URL <span className="optional">Optional</span></label>
          <input id="website" name="website" type="url" autoComplete="url" placeholder="https://yourwebsite.co.uk" aria-invalid={Boolean(errors.website)} aria-describedby={errors.website ? "website-error" : undefined} />
          <FieldError id="website-error" message={errors.website} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="projectType">Type of project <span>*</span></label>
          <select id="projectType" name="projectType" defaultValue="" aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "projectType-error" : undefined}>
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <FieldError id="projectType-error" message={errors.projectType} />
        </div>
        <div className="form-field">
          <label htmlFor="budget">Estimated budget <span>*</span></label>
          <select id="budget" name="budget" defaultValue="" aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "budget-error" : undefined}>
            <option value="" disabled>Select a budget range</option>
            {budgetRanges.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <FieldError id="budget-error" message={errors.budget} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Tell us about your project <span>*</span></label>
        <textarea id="message" name="message" rows={4} placeholder="A little about your business, what you need and when you hope to get started…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        <FieldError id="message-error" message={errors.message} />
      </div>
      <div className="form-submit-row">
        <button className="button button-primary form-submit" type="submit" disabled={locked}>
          {locked ? <>Sending<LoaderCircle size={17} className="spinner" /></> : <>Send enquiry<ArrowUpRight size={17} /></>}
        </button>
        <p>By sending this form, you agree to our <a href={sitePath("/privacy/")}>privacy notice</a>.</p>
      </div>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {status === "success" ? <p className="feedback-success" role="status">Thanks for getting in touch. Your enquiry has been sent; we’ll reply {agency.responseTime.toLowerCase()}.</p> : null}
        {status === "error" ? <p className="feedback-error" role="alert">We couldn’t send your enquiry just now. Please try again or email <a href={"mailto:" + agency.email}>{agency.email}</a>.</p> : null}
        {status === "unconfigured" ? <p className="feedback-error" role="alert">The enquiry form is not connected yet. Please email <a href={"mailto:" + agency.email}>{agency.email}</a> instead.</p> : null}
      </div>
    </form>
  );
}
