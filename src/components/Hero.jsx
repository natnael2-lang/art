import { ArrowRight, GraduationCap, Palette, Users } from "lucide-react";
import heroImage1 from "../assets/artSchool.jpg";
import heroImage2 from "../assets/fashion-design.jpg";
import heroImage3 from "../assets/graphic-design.jpg";
import { useState, useEffect } from "react";

const ArtisticDots = ({ className = "", style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style}>
    {[...Array(12)].map((_, i) => (
      <circle
        key={i}
        cx={50 + 35 * Math.cos((i * 30 * Math.PI) / 180)}
        cy={50 + 35 * Math.sin((i * 30 * Math.PI) / 180)}
        r={2 + (i % 3)}
        fill="red"
        className="opacity-40"
      />
    ))}
  </svg>
);

const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: GraduationCap, value: "1957", label: "Established" },
    { icon: Users, value: "500+", label: "Students" },
    { icon: Palette, value: "3", label: "Programs" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ArtisticDots
        className="absolute top-40 right-1/4 w-32 h-32 z-20 animate-spin"
        style={{ animationDuration: "1s" }}
      />

      {/* Background Images */}
      <div className="absolute inset-0 z-0 hidden md:block" >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-1000
              ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}
            `}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/0 z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
        <div className="max-w-3xl ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-orange-600/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-gray-900/50">
              Addis Ababa University
            </span>
          </div>

          {/* Handwritten Heading */}
          <h1
            className="font-hand text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 leading-tight text-hand-shadow"
            style={{ lineHeight: 1.03 }}
          >
            <span className="block">
              Alle School of{" "}
              <span className="bg-gradient-to-r from-orange-700 to-yellow-500 text-transparent bg-clip-text">
                Fine Arts
              </span>
            </span>
            <span className="block"> &amp; Design</span>
          </h1>

          {/* Optional small script/signature under heading */}
          <div className="mb-4">
            <span className="signature">Shaping the future of Ethiopian design since 1957</span>
          </div>

          {/* Subheading (use regular sans for better readability) */}
          <p className="text-xl text-gray-700 mb-10 max-w-2xl signature">
            Discover your creative potential through Fashion, Industrial, and Graphic Design a place where craft meets contemporary practice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button className="flex items-center bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition">
              Explore More
              <ArrowRight className="ml-2" />
            </button>

            <button className="px-6 py-3 rounded-full text-lg font-medium border border-primary text-primary hover:bg-orange-50 transition">
              Virtual Tour
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-gray-500 ">{stat.label}</p>
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
