export default function Hero() {
  return (
    <section
      className="relative w-full h-[800px] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Right-aligned content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-end px-6 md:px-10">
        <div className="text-right text-white max-w-md">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Modern Hair <br /> Re-imagined
          </h1>
          <p className="mt-4 text-base text-gray-200">
            Experience the ultimate hair transformation at our <br />
            full-service salon and with our line of hair care products
          </p>
        <a
          href="https://book.squareup.com/appointments/hib9f1d12bolub/location/LG4W5S8K0SXDN/services"
          className="mt-6 inline-block text-black bg-white text-lg font-semibold border border-black px-8 py-3 rounded-md shadow-sm hover:shadow-md hover:scale-105 transition duration-300 ease-in-out"
        >
          Book Now
        </a>


        </div>
      </div>
    </section>
  );
}
