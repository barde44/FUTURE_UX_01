import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="font-bold text-xl text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Health Plus Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary font-medium' : 'text-foreground'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Make an appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`py-2 transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`py-2 transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary font-medium' : 'text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`py-2 transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Make an appointment
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
