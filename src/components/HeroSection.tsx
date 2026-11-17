"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { agency, sitePath } from "@/config/agency";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const fadeUp = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };
  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="page-shell hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow hero-eyebrow" {...fadeUp} transition={{ duration: 0.55 }}>
            <span className="eyebrow-mark" />Independent digital studio
          </motion.p>
          <motion.h1
            id="hero-title"
            {...(reduceMotion ? {} : { initial: { opacity: 0, y: 25 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.2, 0.7, 0.25, 1] }}
          >
            Digital experiences built to move your business <span>forward.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            {...(reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            We design and develop modern websites that help ambitious businesses establish their online presence, communicate their value, and generate meaningful enquiries.
          </motion.p>
          <motion.div
            className="hero-actions"
            {...(reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } })}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a className="button button-primary" href="#contact">{agency.primaryCta}<ArrowUpRight size={17} /></a>
            <a className="text-link" href="#work">Explore our work<ArrowDown size={15} /></a>
          </motion.div>
          <motion.div
            className="availability"
            {...(reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 } })}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            <span className="availability-dot" />Available for selected projects
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          {...(reduceMotion ? {} : { initial: { opacity: 0, y: 28, scale: 0.985 }, animate: { opacity: 1, y: 0, scale: 1 } })}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.2, 0.7, 0.25, 1] }}
        >
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-browser">
            <div className="browser-bar">
              <span className="browser-dots"><i /><i /><i /></span>
              <span className="browser-address">estateandco.co.uk</span>
              <span className="browser-menu-mark">···</span>
            </div>
            <div className="property-site">
              <div className="property-nav">
                <span className="property-brand">ESTATE <span>&</span> CO.</span>
                <div className="property-nav-links"><span>Buy</span><span>Rent</span><span>Sell</span><b>Contact</b></div>
              </div>
              <div className="property-hero">
                <Image src={sitePath("/images/estate-exterior.jpg")} alt="Modern home surrounded by mature trees" fill priority sizes="(max-width: 900px) 90vw, 48vw" />
                <div className="property-scrim" />
                <div className="property-copy">
                  <span>Find your place</span>
                  <h2>A home for<br />what comes next.</h2>
                  <div className="property-search"><Search size={14} /><span>Area, postcode or property</span><b>Search</b></div>
                </div>
                <div className="property-count"><b>01</b><span>— 03</span></div>
              </div>
              <div className="property-footer"><span>Thoughtful moves start here.</span><span>↓ Discover your next home</span></div>
            </div>
          </div>
          <div className="hero-float-card">
            <div className="float-card-image"><Image src={sitePath("/images/modern-architecture.jpg")} alt="Contemporary home detail" fill sizes="110px" /></div>
            <div><span>FEATURED PROPERTY</span><strong>A quieter kind of luxury</strong><small>Richmond · Guide £1.25m</small></div>
            <span className="float-card-arrow"><ArrowUpRight size={14} /></span>
          </div>
          <div className="hero-side-note"><span>01 / 03</span><span>Digital, considered.</span></div>
        </motion.div>
      </div>
      <div className="hero-baseline page-shell"><span>Independent by design</span><span>Strategy · Design · Development</span></div>
    </section>
  );
}
