import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Heart className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Health Plus Clinic
              </span>
            </div>
            <p className="text-gray-400">
              Quality medical care, close to you. Your health is our priority.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Health Street<br />
                  75013 Lomé, Togo
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+228123456789" className="text-gray-400 hover:text-white transition-colors">
                  +228 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@santeplus.fr" className="text-gray-400 hover:text-white transition-colors">
                  contact@santeplus.tg
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Health Plus Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
