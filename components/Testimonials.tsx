"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya R.",
    location: "Chitlapakkam",
    text: "Dr. Divya is absolutely wonderful! I was terrified of dentists but she made me feel completely at ease. My root canal was painless — I couldn't believe it. Highly recommended!",
    rating: 5,
  },
  {
    name: "Karthik M.",
    location: "Tambaram",
    text: "Excellent clinic! Very professional and clean. Dr. Divya explained everything clearly before starting treatment. The smile makeover she did for me exceeded all my expectations.",
    rating: 5,
  },
  {
    name: "Sowmya V.",
    location: "Chitlapakkam",
    text: "My kids were scared of dentists until we came here. Dr. Divya and her team are so patient and gentle with children. Now they actually look forward to their dental visits!",
    rating: 5,
  },
  {
    name: "Rajesh N.",
    location: "Pallavaram",
    text: "Best dental clinic in the area. Got my dental implants done here — quality work at a fair price. Dr. Divya's expertise is evident. The entire experience was smooth and comfortable.",
    rating: 5,
  },
  {
    name: "Anitha S.",
    location: "Chitlapakkam",
    text: "I had been putting off my orthodontic treatment for years. Dr. Divya made it so easy and affordable. My teeth are perfectly aligned now. Wonderful doctor, wonderful clinic!",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900">What Our Patients Say</h2>
          <p className="mt-3 text-gray-500">Real stories from real patients</p>
        </div>

        {/* Slider */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 relative min-h-64">
          <div className="text-5xl text-teal-200 font-serif mb-4 leading-none">&ldquo;</div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{t.text}</p>
          <StarRating count={t.rating} />
          <div className="mt-4">
            <p className="font-bold text-gray-900">{t.name}</p>
            <p className="text-sm text-gray-400">{t.location}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-teal-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-teal-50 hover:border-teal-300 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-teal-50 hover:border-teal-300 transition-colors"
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
