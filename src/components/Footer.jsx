export default function Footer() {
    return (
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-serif">
          
          {/* Brand + About */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Jina Beauty</h3>
            <p className="text-gray-300">
              Providing custom beauty services with care and creativity. Based in Montréal since 2012.
            </p>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-base font-medium mb-3">Get in Touch</h4>
            <p className="text-gray-300">Email: hello@irisonyx.ca</p>
            <p className="text-gray-300">Phone: (514) 555-1234</p>
            <p className="text-gray-300 mt-2">Instagram: @iris.onyx.beauty</p>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="text-base font-medium mb-3">Stay Updated</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-white text-black placeholder-gray-500 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black py-2 rounded hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom line */}
        <div className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Iris & Onyx. All rights reserved.
        </div>
      </footer>
    );
  }
  