const reasons = [
  {
    icon: "💊",
    title: "Truly Painless Procedures",
    desc: "We use the latest anaesthetic techniques and gentle methods to ensure you feel little to no discomfort during any treatment.",
  },
  {
    icon: "👩‍⚕️",
    title: "Expert Doctor",
    desc: "Dr. Divya holds BDS and MDS degrees and serves as an Associate Professor — bringing top-tier academic and clinical expertise.",
  },
  {
    icon: "💳",
    title: "Affordable Pricing",
    desc: "Quality dental care should be accessible to everyone. We offer transparent pricing, flexible payment options and special packages.",
  },
  {
    icon: "🔬",
    title: "Modern Equipment",
    desc: "From digital X-rays to laser dentistry equipment, we invest in the latest technology for faster, safer, and more precise treatments.",
  },
  {
    icon: "⏱️",
    title: "Efficient Appointments",
    desc: "We respect your time. Most procedures are completed in minimal visits, and we offer flexible timings including evenings.",
  },
  {
    icon: "🧒",
    title: "Family & Child Friendly",
    desc: "Our warm, welcoming environment puts both children and adults at ease. We make dentistry a positive experience for the whole family.",
  },
  {
    icon: "🏠",
    title: "Local & Trusted",
    desc: "Proudly serving Chitlapakkam and the surrounding Chennai neighbourhood. We know our community and our community knows us.",
  },
  {
    icon: "📞",
    title: "Easy to Reach",
    desc: "Book instantly via WhatsApp, call us directly, or walk in. We make accessing dental care as simple as possible.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-white">
            The Phoenix Difference
          </h2>
          <p className="mt-3 text-teal-200 max-w-2xl mx-auto">
            Here&apos;s why hundreds of families in Chennai trust Phoenix Dental Care for their smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all duration-300 border border-white/10"
            >
              <span className="text-3xl block mb-3">{r.icon}</span>
              <h3 className="font-bold text-white text-base mb-2">{r.title}</h3>
              <p className="text-teal-200 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
