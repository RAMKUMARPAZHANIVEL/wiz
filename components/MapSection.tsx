export default function MapSection() {
  const mapsUrl =
    "https://www.google.com/maps/search/Phoenix+Dental+Care+Chitlapakkam+Chennai";

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Find Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Our Location</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Conveniently located in Chitlapakkam, Chennai. Easy to reach by road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Info card */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Address</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Phoenix Dental Care<br />
                      Chitlapakkam, Chennai<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Phone</p>
                    <a
                      href="tel:+919003226380"
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                    >
                      +91 90032 26380
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">Hours</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Mon – Sat: 9:00 AM – 8:00 PM<br />
                      Sunday: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions on Maps
              </a>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center justify-center"
              style={{ height: "380px" }}
            >
              <span className="text-6xl mb-4">🗺️</span>
              <p className="text-gray-600 font-medium text-lg mb-2">Chitlapakkam, Chennai</p>
              <p className="text-gray-400 text-sm mb-6">Phoenix Dental Care</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
              >
                Open in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
