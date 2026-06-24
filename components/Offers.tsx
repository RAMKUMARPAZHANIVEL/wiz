const offers = [
  {
    tag: "Limited Time",
    title: "Free Dental Check-up",
    desc: "Get a comprehensive dental examination and X-ray at no cost for first-time visitors. Know the exact state of your oral health.",
    cta: "Claim Free Check-up",
    highlight: true,
  },
  {
    tag: "Family Package",
    title: "Family Cleaning Package",
    desc: "Professional scaling and polishing for the whole family at a discounted group rate. Fresh, clean teeth for everyone!",
    cta: "Book Family Package",
    highlight: false,
  },
  {
    tag: "Special Offer",
    title: "Teeth Whitening Deal",
    desc: "Professional in-clinic teeth whitening at a special price this season. Walk out with a brighter, more confident smile.",
    cta: "Get Brighter Smile",
    highlight: false,
  },
  {
    tag: "Student Offer",
    title: "Student Discount",
    desc: "Students get an exclusive 15% discount on all treatments. Just show your valid student ID at the time of consultation.",
    cta: "Avail Student Offer",
    highlight: false,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Special Offers
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Current Promotions</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Quality dental care at even more accessible prices. Don&apos;t miss these limited offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((o) => (
            <div
              key={o.title}
              className={`rounded-2xl p-7 border-2 transition-all ${
                o.highlight
                  ? "bg-teal-600 border-teal-600 text-white"
                  : "bg-white border-gray-100 hover:border-teal-200 hover:shadow-md"
              }`}
            >
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                  o.highlight ? "bg-yellow-400 text-teal-900" : "bg-teal-100 text-teal-700"
                }`}
              >
                {o.tag}
              </span>
              <h3
                className={`text-xl font-bold mb-3 ${
                  o.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {o.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  o.highlight ? "text-teal-100" : "text-gray-500"
                }`}
              >
                {o.desc}
              </p>
              <a
                href={`https://wa.me/919003226380?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(o.title)}%20offer`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors ${
                  o.highlight
                    ? "bg-white text-teal-700 hover:bg-teal-50"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {o.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Offers subject to availability. Contact us to confirm eligibility. T&amp;C apply.
        </p>
      </div>
    </section>
  );
}
