import { Users, GraduationCap, Heart, Mic, Tv} from 'lucide-react';

const Actions = () => {
  const mainActions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Résolution des conflits agro-pastoraux",
      description: "Médiation entre agriculteurs et éleveurs pour prévenir et résoudre les conflits liés à l'usage des ressources naturelles.",
      details: [
        "Formation de médiateurs communautaires",
        "Mise en place de comités de gestion des conflits",
        "Négociation de couloirs de transhumance",
        "Sensibilisation sur les droits fonciers"
      ],
      image: "src/assets/agro.jpeg",
      impact: "500+ conflits résolus, 50 médiateurs formés"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Sensibilisation dans les écoles",
      description: "Programmes éducatifs pour promouvoir la culture de paix auprès des jeunes et des enseignants.",
      details: [
        "Clubs de paix dans les établissements scolaires",
        "Formation des enseignants à la pédagogie de la paix",
        "Concours de création artistique sur la non-violence",
        "Théâtre forum sur la résolution des conflits"
      ],
      image: "src/assets/ecole.jpg",
      impact: "80 écoles partenaires, 3000+ élèves sensibilisés"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Prévention des conflits sociaux et conjugaux",
      description: "Accompagnement des familles et communautés pour prévenir et résoudre les violences domestiques.",
      details: [
        "Sessions de sensibilisation sur les violences conjugales",
        "Formation de leaders religieux et traditionnels",
        "Groupes de parole pour femmes victimes de violence",
        "Médiation familiale et communautaire"
      ],
      image: "src/assets/paix.jpeg",
      impact: "200+ familles accompagnées, 30 leaders formés"
    },
  ];

  const mediaLab = {
    title: "Media Lab ATNV",
    description: "Notre laboratoire de création dédié à la production de contenus originaux pour promouvoir la paix, la tolérance et la cohésion sociale. À travers des formats accessibles et engageants, nous faisons entendre des voix porteuses d’espoir et de changement.",
    activities: [
      {
        icon: <Mic className="h-6 w-6" />,
        title: "Podcasts",
        description: "Émissions radio sur la non-violence, interviews d'experts et témoignages"
      },
      {
        icon: <Tv className="h-6 w-6" />,
        title: "Plateau télé",
        description: "differents formations télévisés sur l'education et la cohésion sociale"
      },
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Création artistique",
        description: "Clips vidéo, chansons et spectacles pour sensibiliser les jeunes"
      }
    ],
    image: "src/assets/medialab.jpeg"
  };

 
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos actions</h1>
            <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
              Découvrez nos interventions concrètes pour la promotion de la paix et du développement communautaire
            </p>
          </div>
        </div>
      </section>

      {/* Main Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos domaines d'intervention</h2>
            <p className="text-lg text-gray-600">Actions prioritaires pour un impact durable sur les communautés</p>
          </div>
          <div className="space-y-16">
            {mainActions.map((action, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="text-emerald-600 mr-4">
                      {action.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{action.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{action.description}</p>
                  <ul className="space-y-3 mb-6">
                    {action.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Impact réalisé</h4>
                    <p className="text-emerald-700 font-medium">{action.impact}</p>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={action.image}
                      alt={action.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-emerald-600 opacity-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Lab Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{mediaLab.title}</h2>
              <p className="text-lg mb-8 text-blue-200">{mediaLab.description}</p>
              <div className="space-y-6">
                {mediaLab.activities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-amber-400 mt-1">
                      {activity.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                      <p className="text-blue-200">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={mediaLab.image}
                alt="Media Lab"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actions;