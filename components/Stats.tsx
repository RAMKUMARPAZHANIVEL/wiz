const stats = [
  { value: "500+", label: "Happy Patients", icon: "😊" },
  { value: "10+", label: "Years of Experience", icon: "🏆" },
  { value: "10", label: "Treatments Offered", icon: "🦷" },
  { value: "98%", label: "Patient Satisfaction", icon: "⭐" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-teal-600 to-teal-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl">{s.icon}</span>
              <span className="text-4xl sm:text-5xl font-bold">{s.value}</span>
              <span className="text-teal-200 text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
