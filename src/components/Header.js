"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, telLink, whatsappLink } from "@/data/site";

const HEADER_CONTAINER = "w-full px-5 sm:px-8 lg:px-12";

const navLinkClass = (active) =>
  `group relative py-1 text-base font-semibold uppercase tracking-wide text-black transition-colors ${
    active ? "" : "hover:text-blue"
  }`;

function NavUnderline({ active }) {
  return (
    <span
      className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-blue transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-white/50 bg-white/75 backdrop-blur-[6px] shadow-[0_8px_30px_-8px_rgba(15,23,42,0.25)]">
        <div className="h-[3px] w-full bg-gradient-to-r from-blue via-sky to-blue" />
        <div className={`${HEADER_CONTAINER} py-2 md:py-2`}>
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className="h-20 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
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

          <div className="hidden md:flex md:items-center md:justify-between">
            <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
              <Image
                src={site.logo}
                alt={site.name}
                width={496}
                height={276}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link, i) => (
                  <span key={link.href} className="flex items-center gap-6">
                    {i > 0 && <span className="text-ink/25">·</span>}
                    <Link href={link.href} className={navLinkClass(pathname === link.href)}>
                      {link.label}
                      <NavUnderline active={pathname === link.href} />
                    </Link>
                  </span>
                ))}
              </nav>
              <span className="h-6 w-px bg-ink/15" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-0.5 rounded-2xl border border-ink/15 bg-white/50 px-4 py-1.5 transition-colors hover:border-blue/40"
              >
                <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/55">
                  Contact us
                </span>
                <span className="flex items-center gap-2 text-base font-semibold text-black">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-whatsapp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
                  </svg>
                  {site.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-2">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
                className={`font-serif text-4xl font-semibold text-ink transition-all duration-300 hover:text-blue ${
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-base font-semibold text-ink transition-colors hover:text-blue"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-whatsapp">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.44 5.71 1.44h.005c9.5 0 15.442-8.657 12.83-16.339zm-3.99 15.351a10.68 10.68 0 01-5.435 1.494h-.004a10.9 10.9 0 01-5.549-1.513l-.397-.235-3.766.982 1.005-3.671-.259-.379a10.09 10.09 0 01-1.65-5.616c.005-6.126 5.043-11.096 11.245-11.096 3.007 0 5.831 1.174 7.943 3.294 2.11 2.121 3.271 4.94 3.269 7.943-.003 6.126-5.041 11.096-11.402 11.797z" />
              </svg>
              {site.phoneDisplay}
            </a>
            <a href={telLink()} className="text-sm font-medium text-ink/60">
              Or call us directly
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
