import { Calendar, MapPin, Users, Target } from 'lucide-react';
import aproposImage from '../assets/Apropos.jpg';
const About = () => {
  const milestones = [
    {
      year: "1992",
      title: "Fondation de l'ATNV",
      description: "Création de l'association à Moundou par des leaders communautaires engagés."
    },
    {
      year: "2000",
      title: "Expansion régionale",
      description: "Développement des structures décentralisées dans plusieurs régions du Tchad."
    },
    {
      year: "2010",
      title: "Programmes éducatifs",
      description: "Lancement des programmes de sensibilisation dans les écoles."
    },
    {
      year: "2020",
      title: "Media Lab",
      description: "Création du laboratoire média pour amplifier notre message de paix."
    },
    {
      year: "2025",
      title: "Économie circulaire",
      description: "Démarrage du projet pilote de ferme et formation pour l'autonomie des jeunes."
    }
  ];
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-[#059669] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de l'ATNV</h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Plus de 30 ans d'engagement pour la paix, la justice sociale et le développement communautaire au Tchad
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                L'Association Tchadienne pour la Non-Violence (ATNV) œuvre depuis 1992 pour la promotion 
                d'une culture de paix, la résolution non-violente des conflits et le développement 
                communautaire participatif au Tchad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Objectif principal</h3>
                    <p className="text-gray-600">Promouvoir la non-violence active dans toutes les sphères de la société</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Approche</h3>
                    <p className="text-gray-600">Participation communautaire et développement local inclusif</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={aproposImage}
                alt="Mission ATNV"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-emerald-600 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline - MODIFIÉ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre histoire</h2>
            <p className="text-lg text-gray-600">Les étapes clés de notre développement</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-600 w-full max-w-sm">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-emerald-600 font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#059669] text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Localisation du siège</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-emerald-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse complète</h3>
                    <p className="text-blue-200">
                      Quartier Dombao<br />
                      Moundou, Logone Oriental<br />
                      République du Tchad
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-emerald-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Horaires d'ouverture</h3>
                    <p className="text-blue-200">
                      Lundi - Vendredi: 8h00 - 17h00<br />
                      Samedi: 8h00 - 12h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-gray-900">
                <h3 className="font-semibold mb-4">Coordonnées GPS</h3>
                <div className="bg-gray-100 p-4 rounded text-center">
                  <p className="text-sm text-gray-600 mb-2">Latitude: 8.5667° N</p>
                  <p className="text-sm text-gray-600">Longitude: 16.0833° E</p>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Carte interactive disponible dans la section Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
