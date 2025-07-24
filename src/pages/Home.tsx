import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Shield, BookOpen, Calendar } from 'lucide-react';

// Import des images locales
import slidImage from '../assets/SLID.jpeg';
import agEleImage from '../assets/AG ELE.jpeg';
import formationImage from '../assets/formation .jpeg';
import developImage from '../assets/develop.jpg';
import ambassadeImage from '../assets/ambassade.png';
import idImage from '../assets/ID.png';
import africaImage from '../assets/africa.png';
import f3eImage from '../assets/F3E.png';

const Home = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Non-violence active",
      description: "Promouvoir la résolution pacifique des conflits"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Justice sociale",
      description: "Œuvrer pour l'équité et les droits humains"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Respect de la dignité humaine",
      description: "Valoriser chaque personne sans discrimination"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Engagement communautaire",
      description: "Impliquer les communautés dans leur développement"
    }
  ];

  const partners = [
    { name: "Initiative Développement", logo: idImage },
    { name: "F3E", logo: f3eImage },
    { name: "Ambassade de France", logo: ambassadeImage },
    { name: "Africa Circular", logo: africaImage }
  ];


  const recentNews = [
    {
      title: "Formation des jeunes sur la résolution des conflits",
      date: "15 Janvier 2025",
      category: "Formation"
    },
    {
      title: "Campagne de sensibilisation dans les écoles",
      date: "10 Janvier 2025",
      category: "Sensibilisation"
    },
    {
      title: "Nouveau projet d'économie circulaire lancé",
      date: "5 Janvier 2025",
      category: "Développement"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slidImage})`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ensemble pour la paix et la non-violence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              "La non-violence, c'est le respect absolu de la personne humaine et de toute la création."
            </p>
            <p className="text-lg mb-8 text-emerald-200">
              Depuis 1992, l'ATNV œuvre pour la promotion de la culture de paix, 
              la cohésion sociale et le développement local au Tchad.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/actions"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
              >
                Découvrir nos actions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-emerald-600 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-lg text-gray-600">Les principes qui guident notre action quotidienne</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Actualités récentes</h2>
              <p className="text-lg text-gray-600">Suivez nos dernières activités et réalisations</p>
            </div>
            <Link
              to="/blog"
              className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
            >
              Voir tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {news.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <Link to="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center">
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos actions sur le terrain</h2>
            <p className="text-lg text-gray-600">Découvrez l'impact de notre travail au quotidien</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={formationImage}
                alt="Formation communautaire"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Médiation agricole</h3>
                <p className="text-sm">Résolution des conflits agro-pastoraux</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={developImage}
                alt="Éducation jeunesse"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Formations communautaires</h3>
                <p className="text-sm">Sensibilisation et formation des leaders locaux</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={agEleImage}
                alt="Médiation agricole"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Éducation à la paix</h3>
                <p className="text-sm">Programmes dans les écoles et universités</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos partenaires</h2>
            <p className="text-lg text-gray-600">Ensemble pour un impact plus fort</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex justify-center items-center mb-3 h-16">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;