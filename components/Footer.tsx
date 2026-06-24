const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Doctor", href: "#doctor" },
  { label: "Treatments", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Offers", href: "#offers" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="font-bold text-lg text-teal-400">Phoenix Dental Care</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Rejuvenating smiles in Chitlapakkam, Chennai. Expert, painless, and affordable
              dental care by Dr. Divya — BDS, MDS.
            </p>
            <a
              href="https://wa.me/919003226380?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book Appointment
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Chitlapakkam, Chennai, Tamil Nadu</p>
              <p>
                📞{" "}
                <a href="tel:+919003226380" className="hover:text-teal-400 transition-colors">
                  +91 90032 26380
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:info@phoenixdentalcare.in"
                  className="hover:text-teal-400 transition-colors"
                >
                  info@phoenixdentalcare.in
                </a>
              </p>
              <div className="pt-2">
                <p className="font-medium text-gray-300 mb-1">Hours</p>
                <p>Mon – Sat: 9 AM – 8 PM</p>
                <p>Sunday: 9 AM – 1 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Phoenix Dental Care. All rights reserved.</p>
          <p>Dr. Divya — BDS, MDS | Chitlapakkam, Chennai</p>
        </div>
      </div>
    </footer>
  );
}
