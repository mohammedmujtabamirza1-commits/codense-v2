"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { MoonIcon, SunIcon } from "./Icons";

const links = [
  ["Home", "home"], ["What We Build", "services"], ["How It Works", "process"],
  ["About", "about"], ["Contact", "contact"],
];

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const frame = requestAnimationFrame(() => {
      setDark(document.documentElement.dataset.theme === "dark");
      setReady(true);
      onScroll();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -60%", threshold: 0 }
    );
    links.forEach(([, id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("codense-theme", next);
  }

  function closeMenu() { setOpen(false); }

  return (
    <header className={`navbar ${scrolled || open ? "navbar--filled" : ""}`}>
      <div className="nav-shell">
        <a className="nav-logo" href="#home" aria-label="Codense home" onClick={closeMenu}><Brand /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
            {ready && dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="button button--small desktop-cta" href="#contact">Let&apos;s Talk</a>
          <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, id], index) => <a key={id} href={`#${id}`} onClick={closeMenu}><span>0{index + 1}</span>{label}</a>)}
        <a className="button" href="#contact" onClick={closeMenu}>Let&apos;s Talk</a>
      </nav>
    </header>
  );
}
