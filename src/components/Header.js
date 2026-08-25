"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";

const HEADER_CONTAINER = "w-full px-5 sm:px-8 lg:px-12";

const navLinkClass = (active) =>
  `group relative py-2 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-blue after:transition-transform after:duration-300 hover:after:scale-x-100 ${
    active ? "text-blue after:scale-x-100" : "text-ink hover:text-blue"
  }`;

const DROPDOWN_MENUS = {
  "/treks": {
    viewAllLabel: "View All Treks",
    items: treks.map((t) => ({ href: `/treks/${t.slug}`, label: t.name })),
  },
  "/experiences": {
    viewAllLabel: "View All Helicopter Tours",
    items: experiences.map((e) => ({ href: `/experiences/${e.slug}`, label: e.name })),
  },
};

const SEARCH_INDEX = [
  ...treks.map((t) => ({ href: `/treks/${t.slug}`, label: t.name, type: "Trek" })),
  ...experiences.map((e) => ({ href: `/experiences/${e.slug}`, label: e.name, type: "Tour" })),
];

function getSuggestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 6);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");
  const [desktopQuery, setDesktopQuery] = useState("");
  const [desktopFocused, setDesktopFocused] = useState(false);
  const pathname = usePathname();

  const mobileSuggestions = getSuggestions(mobileQuery);
  const desktopSuggestions = getSuggestions(desktopQuery);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") setSearchOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-ink/5 bg-white/80 backdrop-blur-md">
        <div className={`${HEADER_CONTAINER} py-1.5 md:py-1.5`}>
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
              />
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search treks"
                onClick={() => {
                  setSearchOpen((v) => !v);
                  setMenuOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => {
                  setMenuOpen((v) => !v);
                  setSearchOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors"
              >
                {menuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="relative border-t border-ink/10 pb-3 pt-3 md:hidden">
              <form action="/treks" className="flex items-center gap-2">
                <input
                  type="text"
                  name="q"
                  autoFocus
                  value={mobileQuery}
                  onChange={(e) => setMobileQuery(e.target.value)}
                  placeholder="Search treks — e.g. Everest, Annapurna"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue text-white transition-colors hover:bg-blue-dark"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                  </svg>
                </button>
              </form>

              {mobileSuggestions.length > 0 && (
                <div className="absolute inset-x-0 top-full z-10 bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/10">
                  {mobileSuggestions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileQuery("");
                        setSearchOpen(false);
                      }}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium text-ink hover:bg-ink/5 hover:text-blue"
                    >
                      {item.label}
                      <span className="shrink-0 text-xs font-normal uppercase tracking-wide text-ink/40">{item.type}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="hidden md:flex md:items-center md:justify-between">
            <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}
              />
            </Link>

            <div className="relative flex items-center gap-7">
              <form
                action="/treks"
                className="group flex w-full max-w-[200px] items-center gap-2 rounded-full bg-ink/5 py-2 pl-4 pr-1.5 shadow-sm ring-1 ring-black/5 transition-colors focus-within:bg-ink/[0.07] focus-within:ring-blue/30 lg:max-w-[220px]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-ink/40 transition-colors group-focus-within:text-blue">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  name="q"
                  value={desktopQuery}
                  onChange={(e) => setDesktopQuery(e.target.value)}
                  onFocus={() => setDesktopFocused(true)}
                  onBlur={() => setTimeout(() => setDesktopFocused(false), 150)}
                  placeholder="Search treks"
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-ink/50 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search treks"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue text-white transition-colors hover:bg-blue-dark"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>

              {desktopFocused && desktopSuggestions.length > 0 && (
                <div className="absolute left-0 top-full z-10 mt-2 w-[280px] bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/10">
                  {desktopSuggestions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDesktopQuery("")}
                      className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-medium text-ink hover:bg-ink/5 hover:text-blue"
                    >
                      {item.label}
                      <span className="shrink-0 text-xs font-normal uppercase tracking-wide text-ink/40">{item.type}</span>
                    </Link>
                  ))}
                </div>
              )}

              <nav className="flex items-center gap-7">
                {navLinks.map((link) => {
                  const dropdown = DROPDOWN_MENUS[link.href];
                  if (!dropdown) {
                    return (
                      <Link key={link.href} href={link.href} className={navLinkClass(pathname === link.href)}>
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <div key={link.href} className="group relative">
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 ${navLinkClass(pathname.startsWith(link.href))}`}
                      >
                        {link.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <div className="invisible absolute right-0 top-full w-72 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                        <div className="overflow-hidden bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/10">
                          <div className="max-h-80 overflow-y-auto py-2">
                            {dropdown.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-ink/5 hover:text-blue"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <Link
                            href={link.href}
                            className="block border-t border-ink/10 px-4 py-3 text-sm font-semibold text-blue hover:bg-blue/5"
                          >
                            {dropdown.viewAllLabel}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Link href="/contact" className={navLinkClass(pathname === "/contact")}>
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-24 pt-24">
          <nav className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...navLinks, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((link, i) => {
              const dropdown = DROPDOWN_MENUS[link.href];
              const subOpen = openSubmenu === link.href;

              if (!dropdown) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                    className={`border-b border-white/10 py-4 text-xl font-medium text-white transition-all duration-300 hover:text-blue ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <div key={link.href} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenSubmenu(subOpen ? null : link.href)}
                    style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
                    className={`flex w-full items-center justify-between py-4 text-xl font-medium text-white transition-all duration-300 hover:text-blue ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                    }`}
                  >
                    {link.label}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`shrink-0 transition-transform ${subOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {subOpen && (
                    <div className="mb-4 flex flex-col gap-1">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="py-1.5 text-base font-medium text-white/70 hover:text-blue"
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="py-1.5 text-base font-semibold text-blue"
                      >
                        {dropdown.viewAllLabel}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
