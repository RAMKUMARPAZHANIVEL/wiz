export default function Doctor() {
  const credentials = [
    "BDS — Bachelor of Dental Surgery",
    "MDS — Master of Dental Surgery",
    "Family Dental Surgeon",
    "Associate Professor",
  ];

  const expertise = [
    "Cosmetic & Smile Designing",
    "Orthodontics & Braces",
    "Laser Dentistry",
    "Pediatric Dentistry",
    "Implants & Prosthetics",
    "Root Canal Therapy",
  ];

  return (
    <section id="doctor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Our Doctor
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Meet Dr. Divya</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Dedicated to delivering world-class dental care with a personal touch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              {/* Avatar placeholder */}
              <div className="bg-gradient-to-br from-teal-400 to-teal-700 rounded-3xl h-80 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-6xl">
                    👩‍⚕️
                  </div>
                  <h3 className="text-2xl font-bold">Dr. Divya</h3>
                  <p className="text-teal-200 text-sm mt-1">BDS, MDS</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-6 py-3 text-center whitespace-nowrap">
                <p className="text-teal-700 font-bold text-lg leading-none">500+</p>
                <p className="text-gray-500 text-xs font-medium">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="pt-6 lg:pt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Divya</h3>
            <p className="text-teal-600 font-semibold mb-6">
              Family Dental Surgeon & Associate Professor
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Divya is a highly qualified dental professional with postgraduate expertise
              in dental surgery. Combining academic excellence as an Associate Professor with
              hands-on clinical practice, she brings a unique blend of knowledge, skill, and
              empathy to every patient she treats.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Her philosophy is simple: every patient deserves a pain-free experience and a
              healthy smile. She stays updated with the latest advancements in dentistry to
              provide the best possible care at Phoenix Dental Care.
            </p>

            {/* Credentials */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Qualifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {credentials.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-teal-500">▸</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise tags */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span
                    key={e}
                    className="bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
