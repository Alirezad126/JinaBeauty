export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between font-serif">
        
        {/* Brand */}
        <div className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Jina Beauty
        </div>

        {/* Nav */}
        <nav className="hidden md:flex space-x-8 text-xl text-gray-900 font-medium">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#team" className="hover:opacity-80">Team</a>
          <a href="#products" className="hover:opacity-80">Products</a>
          <a href="#cancellations" className="hover:opacity-80">Cancellations</a>
        </nav>

        {/* Right side */}
        
        <div className="flex items-center space-x-4">
        <a href="https://book.squareup.com/appointments/hib9f1d12bolub/location/LG4W5S8K0SXDN/services">
        <button className="border border-black px-4 py-1 text-sm hover:bg-black hover:text-white transition font-medium">
            Book Now
          </button>
          </a>
          

          {/* Search Icon */}
          <button className="text-gray-800 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="text-gray-800 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1.35 9.03a2 2 0 01-1.98 1.72H6.33a2 2 0 01-1.98-1.72L3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h2a2 2 0 002-2H7a2 2 0 00-2 2zm10 0h2a2 2 0 002-2h-2a2 2 0 00-2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
