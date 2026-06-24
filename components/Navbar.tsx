"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctor" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Us", href: "#why-us" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">🦷</span>
            <span
              className={`font-bold text-lg leading-tight ${
                scrolled ? "text-teal-700" : "text-white"
              }`}
            >
              Phoenix Dental Care
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919003226380?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 text-sm font-medium py-1 hover:text-teal-600"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/919003226380?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
