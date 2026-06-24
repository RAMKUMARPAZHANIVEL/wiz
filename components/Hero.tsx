export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f766e 0%, #0d9488 40%, #0ea5e9 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-8">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Accepting New Patients · Chitlapakkam, Chennai
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Rejuvenating
          <br />
          <span className="text-yellow-300">Smiles...</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-4 font-light">
          Expert, painless & affordable dental care for the whole family.
        </p>
        <p className="text-lg text-white/75 max-w-2xl mx-auto mb-12">
          Trusted by hundreds of patients in Chitlapakkam and across Chennai.
          Dr. Divya and her team are here to give you the smile you deserve.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919003226380?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Phoenix%20Dental%20Care"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>

          <a
            href="#treatments"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full transition-all border border-white/30"
          >
            Our Treatments
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { icon: "✅", label: "Painless Procedures" },
            { icon: "💰", label: "Affordable Pricing" },
            { icon: "🏆", label: "Expert Care" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs text-white/80 font-medium text-center">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 66.7C120 53 240 27 360 16C480 5 600 11 720 21.3C840 32 960 48 1080 53.3C1200 59 1320 53 1380 50.7L1440 48V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
