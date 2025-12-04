import { ArrowRight } from "lucide-react";
import fashionImage from "../assets/fashion-design.jpg";
import industrialImage from "../assets/industrial-design.jpg";
import graphicImage from "../assets/graphic-design.jpg";

const programs = [
  {
    title: "Fashion Design",
    description: "Explore textile arts, garment construction, and contemporary fashion trends while honoring Ethiopian heritage and craftsmanship.",
    image: fashionImage,
    duration: "4 Years",
    degree: "BFA in Design",
  },
  {
    title: "Industrial Design",
    description: "Learn to create functional, aesthetically pleasing products that solve real-world problems through innovative design thinking.",
    image: industrialImage,
    duration: "4 Years",
    degree: "BFA in Design",
  },
  {
    title: "Graphic Design",
    description: "Master visual communications, branding, and digital design to create compelling visual narratives for the modern world.",
    image: graphicImage,
    duration: "4 Years",
    degree: "BFA in Design",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Shape Your Creative Future
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from three distinctive design disciplines, each offering a comprehensive four-year program culminating in a Bachelor of Fine Arts degree.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              id={program.title.toLowerCase().replace(/ /g, "-")}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  loading="lazy"
                  src={program.image}
                  alt={`${program.title} studio at Alle School`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-medium">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 text-gray-900 text-xs font-medium">
                      {program.degree}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {program.description}
                </p>
                <button  className="text-blue-500 flex justify-between items-center px-3 py-2">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 " />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
