export default function Contact() {
  const whatsappUrl =
    "https://wa.me/919003226380?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Phoenix%20Dental%20Care";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Have questions or want to book an appointment? Reach out to us — we&apos;re happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

            {[
              {
                icon: "📍",
                title: "Address",
                content: "Phoenix Dental Care, Chitlapakkam, Chennai, Tamil Nadu, India",
                link: null,
              },
              {
                icon: "📞",
                title: "Phone",
                content: "+91 90032 26380",
                link: "tel:+919003226380",
              },
              {
                icon: "✉️",
                title: "Email",
                content: "info@phoenixdentalcare.in",
                link: "mailto:info@phoenixdentalcare.in",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                content: "Chat with us instantly on WhatsApp",
                link: whatsappUrl,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-teal-50 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-teal-600 hover:text-teal-700 text-sm mt-0.5 block"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm mt-0.5">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-1">Book Appointment Instantly</p>
              <p className="text-gray-500 text-sm mb-4">
                The fastest way to reach us is via WhatsApp. Click below to start a conversation.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Appointment booking card */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Book Your Appointment</h3>
            <p className="text-teal-200 mb-8">
              Ready for a healthier smile? Reach out to us through any of the following methods:
            </p>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp (Fastest)</p>
                  <p className="text-teal-200 text-xs">+91 90032 26380</p>
                </div>
              </a>

              <a
                href="tel:+919003226380"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Call Us Directly</p>
                  <p className="text-teal-200 text-xs">+91 90032 26380</p>
                </div>
              </a>

              <a
                href="mailto:info@phoenixdentalcare.in"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Email Us</p>
                  <p className="text-teal-200 text-xs">info@phoenixdentalcare.in</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
