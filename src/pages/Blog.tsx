import { useState } from 'react';
import { Calendar, User, Search, ArrowRight, MessageCircle, Heart } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous les articles', count: 15 },
    { id: 'testimonies', name: 'Témoignages', count: 6 },
    { id: 'reflections', name: 'Réflexions', count: 4 },
    { id: 'field-reports', name: 'Récits de terrain', count: 3 },
    { id: 'news', name: 'Actualités', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "La médiation traditionnelle face aux défis modernes",
      excerpt: "Retour sur une expérience de médiation dans la région de Doba où traditions ancestrales et approches modernes se sont combinées pour résoudre un conflit complexe entre communautés.",
      content: "Dans la région de Doba, un conflit oppose depuis des mois deux communautés au sujet de l'accès à un point d'eau...",
      author: "Équipe ATNV",
      date: "2025-01-10",
      category: "field-reports",
      readTime: "8 min",
      image: "src/assets/paix.jpeg",
      tags: ["médiation", "tradition", "eau", "communautés"],
      likes: 24,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: "Le bureau pays du Haut commissariat des Nations Unies aux droits de l'Homme",
      excerpt: " organise depuis ce lundi matin dans les locaux de l'ATNV de Moundou, une formation sur la procédure judiciaire et la collaboration à développer avec les bureaux d'aide juridiques. .",
      content: "une formation sur la procédure ...",
      author: "Équipe Media Lab",
      date: "2025-01-05",
      category: "testimonies",
      readTime: "6 min",
      image: "src/assets/atnv.jpeg",
      tags: ["formation", "femmes", "entrepreneuriat", "témoignage"],
      likes: 31,
      comments: 12,
      featured: false
    },
    {
      id: 3,
      title: "Réflexions sur 30 ans d'engagement pour la non-violence",
      excerpt: "À l'occasion de nos 30 ans, retour sur les évolutions de notre approche, les défis rencontrés et les perspectives d'avenir pour la promotion de la culture de paix au Tchad.",
      content: "Trente années se sont écoulées depuis la fondation de l'ATNV...",
      author: "Direction ATNV",
      date: "2024-12-28",
      category: "reflections",
      readTime: "12 min",
      image: "src/assets/30ans.jpeg",
      tags: ["histoire", "bilan", "perspectives", "non-violence"],
      likes: 45,
      comments: 15,
      featured: false
    },
    {
      id: 4,
      title: "Les clubs de paix transforment l'ambiance dans les écoles",
      excerpt: "Témoignages d'enseignants et d'élèves sur l'impact des clubs de paix dans leurs établissements : diminution des bagarres, amélioration du dialogue, émergence de leaders positifs.",
      content: "Depuis le lancement du programme de clubs de paix dans les écoles...",
      author: "Coordinateur Education",
      date: "2024-12-20",
      category: "testimonies",
      readTime: "7 min",
      image: "src/assets/amb.jpeg",
      tags: ["éducation", "jeunes", "écoles", "paix"],
      likes: 38,
      comments: 9,
      featured: false
    },
    {
      id: 5,
      title: "La non-violence active : philosophie et pratique",
      excerpt: "Exploration des fondements philosophiques de la non-violence active et de ses applications concrètes dans le contexte tchadien, inspirée des enseignements de Gandhi et Martin Luther King.",
      content: "La non-violence active n'est pas une approche passive face à l'injustice...",
      author: "Équipe formation",
      date: "2024-12-15",
      category: "reflections",
      readTime: "10 min",
      image: "src/assets/non.jpeg",
      tags: ["philosophie", "non-violence", "Gandhi", "MLK"],
      likes: 29,
      comments: 6,
      featured: false
    },
    {
      id: 6,
      title: "Nouveau partenariat avec l'Ambassade de France",
      excerpt: "L'ATNV signe un nouveau partenariat avec l'Ambassade de France pour renforcer les programmes de formation des jeunes leaders et étendre le projet Media Lab.",
      content: "C'est avec joie que nous annonçons la signature d'un nouveau partenariat...",
      author: "Direction ATNV",
      date: "2024-12-10",
      category: "news",
      readTime: "4 min",
      image: "src/assets/partenariat.JPG",
      tags: ["partenariat", "jeunes", "formation", "media-lab"],
      likes: 22,
      comments: 4,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'testimonies': return 'bg-emerald-100 text-emerald-800';
      case 'reflections': return 'bg-blue-100 text-blue-800';
      case 'field-reports': return 'bg-amber-100 text-amber-800';
      case 'news': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog ATNV</h1>
            <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
              Témoignages, réflexions et récits de terrain sur notre engagement pour la non-violence
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      À la une
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {getCategoryName(featuredPost.category)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center">
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center">
                      Lire
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-16 bg-emerald-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Restez informé</h2>
          <p className="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              S'abonner
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;