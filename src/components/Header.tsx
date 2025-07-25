import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Scale, Users } from 'lucide-react';
import logoImage from '../assets/new.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? 'text-emerald-600 bg-emerald-50'
        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
    }`;

  const mobileLinkClass = (path: string) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive(path)
        ? 'text-emerald-600 bg-emerald-50'
        : 'text-gray-700 hover:text-emerald-600 hover:bg-white'
    }`;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Bandeau haut */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Amour</span>
            </div>
            <div className="flex items-center space-x-2">
              <Scale className="h-4 w-4" />
              <span>Justice</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Paix</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Logo ATNV"
                className="h-16 w-16 object-contain rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">ATNV</h1>
              </div>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={linkClass('/')}>Accueil</Link>
            <Link to="/about" className={linkClass('/about')}>À propos</Link>
            <Link to="/actions" className={linkClass('/actions')}>Actions</Link>
            <Link to="/resources" className={linkClass('/resources')}>Ressources</Link>
            <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link
              to="/"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Soutenir nos actions
            </Link>
          </div>

          {/* Menu mobile bouton */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/')}>
                Accueil
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/about')}>
                À propos
              </Link>
              <Link to="/actions" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/actions')}>
                Actions
              </Link>
              <Link to="/resources" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/resources')}>
                Ressources
              </Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/blog')}>
                Blog
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkClass('/contact')}>
                Contact
              </Link>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-left bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Soutenir nos actions
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
