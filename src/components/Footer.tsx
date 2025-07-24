import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/new.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et citation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="ATNV Logo" 
                className="h-20 w-20 object-contain"
              />
            </div>
            <blockquote className="text-slate-300 italic">
              "La non-violence, c'est le respect absolu de la personne humaine et de toute la création."
            </blockquote>
            <p className="text-slate-400 text-sm">— Martin Luther King</p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/actions" className="text-slate-300 hover:text-white transition-colors">
                  Nos actions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors inline-block"
              >
                Soutenir nos actions
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-300">Dombao, Moundou</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-300">+235 66 25 70 31</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a 
                  href="mailto:contact@atnv.td" 
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  contact@atnv.td
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2025 Association Tchadienne pour la Non-Violence. Tous droits réservés</p>
            <p className="mt-2 md:mt-0">Fondée en 1992 à Moundou</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;