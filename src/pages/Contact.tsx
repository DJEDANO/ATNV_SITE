import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: [
        "Quartier Dombao",
        "Moundou, Logone Oriental",
        "République du Tchad"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      details: ["+235 66 25 70 31"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["contact@atnv.td"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 8h - 17h",
        "Samedi: 8h - 12h",
        "Dimanche: Fermé"
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "#",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "#",
      color: "bg-blue-800 hover:bg-blue-900"
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare className="h-5 w-5" />,
      url: "#",
      color: "bg-green-600 hover:bg-green-700"
    }
  ];

  

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-emerald-600  text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Nous sommes à votre écoute pour toute question, suggestion ou demande de partenariat
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Votre nom et prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Objet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Sélectionnez un objet</option>
                    <option value="partnership">Demande de partenariat</option>
                    <option value="training">Formation / Sensibilisation</option>
                    <option value="mediation">Demande de médiation</option>
                    <option value="press">Demande presse / Media</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-emerald-600 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                   {socialLinks.map((social) => (
                    <a
                    key={social.name}
                    href={social.url}
                    className="bg-white text-black p-3 rounded-full hover:bg-gray-400 transition-colors"
                    title={social.name}
                     >
                      {social.icon}
                      </a>
                    ))}
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Emergency Contact */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Besoin d'une intervention urgente ?</h2>
          <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto">
            Pour les situations de conflit nécessitant une médiation immédiate, 
            notre équipe est disponible pour une intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4">
            <a
  href="tel:+23566257031"
  className="bg-[#CD8D15] text-white hover:bg-[#CD8D15]/90 px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
>
  <Phone className="mr-2 h-5 w-5" />
  Appeler maintenant
</a>
<a
  href="#"
  className="border-2 border-[#CD8D15] text-white hover:bg-[#CD8D15] hover:text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center justify-center"
>
  <MessageSquare className="mr-2 h-5 w-5" />
  WhatsApp
</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;