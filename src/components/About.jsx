const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our History
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
              A Legacy of Creative Excellence
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Studies in Design at Addis Ababa University began at The Addis Ababa School of Fine Arts when it was founded in 1957. By 1993, its Design Department developed the vision to expand and include Industrial Design, Fashion Design, Visual Communications and other Design Programs.
              </p>
              <p>
                Since the integration of The School of Fine Arts into Addis Ababa University, the Department upgraded its status to Degree level and a new department resulted. Design Education at the Alle School of Fine Arts and Design (ASFAD) is intended to include Fashion Design, Industrial Design, and Graphic Design.
              </p>
              <p>
                The Design Department at ASFAD currently awards a Bachelor of Fine Arts in Design Degree. The BFA in Design consists of a four year program course load in the selected Design discipline and a Senior Thesis.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 flex gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-blue-600">1957</span>
                </div>
                <p className="text-xs text-gray-500">Founded</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-blue-600">1993</span>
                </div>
                <p className="text-xs text-gray-500">Expanded</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-blue-600">BFA</span>
                </div>
                <p className="text-xs text-gray-500">Degree</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-blue-600">A</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">ASFAD</h3>
                  <p className="text-gray-600">Alle School of Fine Arts & Design</p>
                  <p className="text-sm text-gray-500 mt-2">Addis Ababa University</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-blue-600/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-400/10 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
