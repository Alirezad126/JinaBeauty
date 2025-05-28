export default function Services() {
    return (
      <section id="services" className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-10">
          
          {/* Left Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-serif mb-6 leading-relaxed">
              We offer a wide range of services for your hair care needs. Our professional stylists will get to know you and your style, and make sure you leave our salon feeling and looking your best. We offer:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2 font-serif">
              <li>Cuts</li>
              <li>Colour</li>
              <li>Styling</li>
              <li>Blow-outs</li>
              <li>Undercuts</li>
            </ul>
            <button className="mt-8 bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition font-medium">
              Book Now
            </button>
          </div>
  
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full max-w-sm mx-auto md:mx-0 rounded-lg shadow-md object-contain"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden bg-black py-4 mt-20">
            <div className="whitespace-nowrap animate-marquee text-white text-2xl md:text-3xl font-serif tracking-wider">
                <span className="mx-8">Cuts</span>
                <span className="mx-8">Colour</span>
                <span className="mx-8">Styling</span>
                <span className="mx-8">Blowouts</span>
                <span className="mx-8">Undercuts</span>
                <span className="mx-8">Cuts</span>
                <span className="mx-8">Colour</span>
                <span className="mx-8">Styling</span>
                <span className="mx-8">Blowouts</span>
                <span className="mx-8">Undercuts</span>
            </div>
            </div>


      </section>
    );
  }
  