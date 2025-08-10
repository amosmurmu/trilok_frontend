import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="text-black py-10 w-full border-t border-gray-300 bg-no-repeat relative"
      style={{
        backgroundImage: "url('./trilok_footer.png')",
        backgroundPosition: "bottom right",
        backgroundSize: "auto"
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 "
      >
        <div className="flex flex-row justify-between items-center mb-8">
          <img
            src="/trilok_logo.png"
            alt="Trilok Logo"
            className="h-12 w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm mb-4">
              We are the leaders in precast industry in India since 2005. With 74 manufacturing units across India. We are committed to provide the highest quality.
            </p>

            <h4 className="text-sm font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="group">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="group">
                <img src="/instagram.svg" alt="Instagram" className="h-5 w-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="group">
                <img src="/facebook.svg" alt="Facebook" className="h-5 w-5 filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500">About us</a></li>
              <li><a href="/products" className="hover:text-blue-500">Products</a></li>
              <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
              <li><a href="/#" className="hover:text-blue-500">Resources</a></li>
              <li><a href="/#" className="hover:text-blue-500">Career</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Our Products</h3>
            <ul className="space-y-1 text-sm">
              <li>Compound Wall</li>
              <li>Labor Quarter</li>
              <li>Security Cabin</li>
              <li>Precast House/ Bungalow</li>
              <li>Precast Swimming pool</li>
              <li>Precast Bus Station</li>
              <li>Precast Road</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact us</h3>
            <p className="text-sm flex items-start gap-2 mb-2">
              <Phone className="h-6 w-6 p-1 bg-gray-200 text-blue-800 rounded shadow-md" />
              <span>+91 58565 48526</span>
            </p>
            <p className="text-sm flex items-start gap-2 mb-2">
              <Mail className="h-6 w-6 bg-gray-200 rounded text-blue-800 shadow-md" />
              <span>trilokwall@gmail.com</span>
            </p>
            <p className="text-sm flex items-start gap-2 mb-2">
              <MapPin className="h-7 w-7 p-1 bg-gray-200 rounded text-blue-800 shadow-md" />
              <span>401, Vikas Shopper, Vraj Chowk Road, Sarthana Jakatnaka, Surat-395006</span>
            </p>
          </div>
        </div>

      </div>

      <hr className="border-t border-gray-700 w-full my-6" />

      <div className="mt-5">
        <div className="text-center text-xs text-gray-500">
          © Copyright {new Date().getFullYear()} – <span className="font-semibold">Trilok Precast Pvt. Ltd.</span> – All Rights Reserved
        </div>
      </div>
    </footer>
  );
}


