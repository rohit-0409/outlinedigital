"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { agency, navigation, sitePath } from "@/config/agency";
import { cn } from "@/lib/utils";

export function SiteNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 18);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={cn("site-nav", scrolled && "is-scrolled", menuOpen && "menu-open")}>
      <div className="nav-inner page-shell">
        <a className="wordmark" href={sitePath("/")} onClick={() => setMenuOpen(false)} aria-label={agency.name + " home"}>
          <BrandMark />
          <span>{agency.shortName}<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={sitePath("/") + item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href={sitePath("/") + "#contact"}>
          <span>{agency.primaryCta}</span><ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav page-shell"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            {navigation.map((item, index) => (
              <a key={item.href} href={sitePath("/") + item.href} onClick={() => setMenuOpen(false)}>
                <span className="mobile-nav-number">0{index + 1}</span>{item.label}<ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-nav-cta" href={sitePath("/") + "#contact"} onClick={() => setMenuOpen(false)}>
              Start a project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
