export default function About() {
    return (
      <section
        className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/salon.jpg')" }}
      >
        {/* Overlay box */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-10">
          <div className="bg-white p-8 md:p-10 max-w-md shadow-lg rounded-sm">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
              Jina working since 2012
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We’ve been serving the community for over a decade, in the same historic location.
            </p>
            <button className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 text-sm transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  }
  
