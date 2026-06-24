export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Smile Is Our
              <span className="text-teal-600"> Priority</span>
            </h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              Welcome to <strong>Phoenix Dental Care</strong> — a modern dental clinic in
              Chitlapakkam, Chennai, where we combine clinical expertise with genuine compassion to
              deliver the best dental experience possible.
            </p>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              Founded by <strong>Dr. Divya</strong>, our clinic is built on the belief that
              quality dental care should be <em>painless, accessible, and affordable</em> for
              every family. We use the latest techniques and equipment to ensure your comfort
              at every step.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From routine check-ups to complex smile makeovers, we handle it all under one roof —
              with warmth, transparency, and a patient-first approach.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Painless Dentistry", icon: "💉" },
                { label: "Affordable Plans", icon: "💰" },
                { label: "Family Friendly", icon: "👨‍👩‍👧" },
                { label: "Latest Technology", icon: "🔬" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-teal-50 rounded-xl p-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-6xl mb-6 text-center">🦷</div>
              <h3 className="text-2xl font-bold text-center mb-2">Phoenix Dental Care</h3>
              <p className="text-teal-200 text-center mb-8">Chitlapakkam, Chennai</p>
              <div className="space-y-4">
                {[
                  "Complete family dental services",
                  "Painless injection techniques",
                  "Transparent pricing — no hidden fees",
                  "Child-friendly environment",
                  "Emergency dental care available",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-teal-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-teal-100">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl p-4 shadow-lg">
              <p className="text-teal-900 font-bold text-2xl leading-none">10+</p>
              <p className="text-teal-800 text-xs font-medium">Years of<br/>Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
