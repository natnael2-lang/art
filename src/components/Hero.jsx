import { ArrowRight, GraduationCap, Palette, Users } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: "1957", label: "Established" },
    { icon: Users, value: "500+", label: "Students" },
    { icon: Palette, value: "3", label: "Programs" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students working on creative projects at Alle School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-medium text-gray-900">
              Addis Ababa University
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Alle School of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Fine Arts
            </span>{" "}
            & Design
          </h1>

          {/* Subheading */}
          <p
            className="text-xl text-gray-600 mb-10 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Shaping the future of Ethiopian design since 1957. Discover your
            creative potential through Fashion, Industrial, and Graphic Design.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
              Explore Programs
              <ArrowRight className="ml-2" />
            </button>

            <button className="px-6 py-3 rounded-full text-lg font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
              Virtual Tour
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-blue-600 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
