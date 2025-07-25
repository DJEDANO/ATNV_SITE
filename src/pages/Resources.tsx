import toumaiImage from '../assets/toumai.jpeg';
import biblioImage from '../assets/biblio.jpeg'; 
import formationImage from '../assets/formation.jpeg'; 
import femmeImage from '../assets/femme.jpeg';    

const Resources = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ressources documentaires</h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            Accédez à nos publications, vidéos et archives pour approfondir vos connaissances sur la non-violence.
          </p>
        </div>
      </section>

      {/* Bibliothèque */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre bibliothèque</h2>
              <p className="text-lg text-gray-600 mb-6">
                L'ATNV dispose d'une bibliothèque physique au siège de Moundou, ouverte au public pour la consultation sur place. Nous numérisons progressivement nos archives pour les rendre accessibles en ligne.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Horaires d'ouverture</h3>
                  <p className="text-gray-700 text-sm">
                    Lundi - Vendredi: 8h - 17h<br />
                    Samedi: 8h - 12h
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Collections</h3>
                  <p className="text-gray-700 text-sm">
                    Rapports, publications, vidéos<br />
                    Archives depuis 1992
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Corrected src attribute for biblioImage */}
              <img src={biblioImage} alt="Bibliothèque ATNV" className="rounded-lg shadow-xl w-full" />
              <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Nos publications</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Publication 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Projet web toumai</h3>
              </div>
              <img src={toumaiImage} alt="Projet web toumai" className="w-full h-48 object-cover" />
            </div>

            {/* Publication 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation de femme leaders</h3>
              </div>
              <img src={formationImage} alt="Formation de femme leaders" className="w-full h-48 object-cover" />
            </div>

            {/* Publication 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Formation de femme informaticienne</h3>
              </div>
              <img src={femmeImage} alt="Formation de femme informaticienne" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle section Archi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-7 sm:px-9 lg:px-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Archives</h2>
          <h2 className="text-lg text-gray-900 leading-relaxed text-center">
            Bien qu’il n’y ait pas encore d’archives numériques, voici un bref résumé de ce que l’ATNV a réalisé jusqu’à présent :
          </h2>
          <div className="mt-10 text-gray-900 space-y-30">
            <h3>
              L’Association Tchadienne pour la Non-Violence (ATNV), fondée en 1991 et reconnue comme ONG en 2008, est une organisation de promotion de la paix et des droits humains.
              Affiliée à l’International Fellowship of Reconciliation, elle collabore avec plusieurs réseaux internationaux comme le WANEP et l’Université de Paix en Afrique.
              Depuis 1997, l’ATNV mène des projets financés par des partenaires tels que l’Union Européenne, GIZ, UNICEF ou encore Pain pour le Monde, autour de la consolidation de la paix dans les écoles, les questions de genre, la médiation des conflits et l’engagement citoyen des jeunes.
              Entre 2002 et 2011, elle a contribué à la résolution de plus de 900 conflits à travers 60 comités locaux, gagnant progressivement la reconnaissance des autorités.
              Ce travail lui a valu le Prix des Droits de l’Homme français en 2013 et le Prix Harubuntu en 2010.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;