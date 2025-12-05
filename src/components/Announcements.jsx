import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const announcements = [
  {
    id: 1,
    title: "2024 Fall Semester Registration Now Open",
    excerpt:
      "Registration for the upcoming fall semester is now open. All new and returning students are encouraged to complete their enrollment by the deadline.",
    date: "December 1, 2024",
    category: "Admissions",
    isNew: true,
  },
  {
    id: 2,
    title: "Annual Design Exhibition Coming Soon",
    excerpt:
      "Join us for our annual showcase of student work featuring projects from Fashion, Industrial, and Graphic Design programs.",
    date: "November 28, 2024",
    category: "Events",
    isNew: true,
  },
  {
    id: 3,
    title: "Guest Lecture: Contemporary African Design",
    excerpt:
      "Renowned designer Amsale Aberra will be speaking about the evolution of Ethiopian design on the global stage.",
    date: "November 20, 2024",
    category: "Lecture",
    isNew: false,
  },
  {
    id: 4,
    title: "Scholarship Applications Open for 2025",
    excerpt:
      "Merit-based and need-based scholarships are now available for prospective students. Apply before the February deadline.",
    date: "November 15, 2024",
    category: "Financial Aid",
    isNew: false,
  },
];

const Announcements = () => {
  return (
    <section id="announcements" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Latest News
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Announcements
            </h2>
          </div>

          <button className="flex items-center px-6 py-3 rounded-full border-primary text-primary font-medium hover:bg-orange-50 transition">
            View All News
            <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {announcements.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold">
                    {item.category}
                  </span>

                  {item.isNew && (
                    <span className="px-2 py-1 rounded bg-red-600 text-white text-xs font-bold uppercase">
                      New
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
