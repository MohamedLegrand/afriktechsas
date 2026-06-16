import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const services = [
  {
    id: 'web',
    titre: 'Développement Web',
    description: 'Nous concevons des sites et applications web modernes, rapides et responsive adaptés à vos besoins.',
    image: '/images/services/web.jpg',
    route: '/services/web',
    icon: '🌐',
  },
  {
    id: 'mobile',
    titre: 'Développement Mobile',
    description: 'Applications iOS et Android performantes et intuitives pour connecter votre business à vos clients.',
    image: '/images/services/mobile.jpg',
    route: '/services/mobile',
    icon: '📱',
  },
  {
    id: 'design',
    titre: 'Design Graphique',
    description: 'Identité visuelle, logo, affiches et supports de communication qui marquent les esprits.',
    image: '/images/services/design.jpg',
    route: '/services/design',
    icon: '🎨',
  },
  {
    id: 'marketing',
    titre: 'Marketing Digital',
    description: 'Stratégies digitales, réseaux sociaux et campagnes publicitaires pour booster votre visibilité.',
    image: '/images/services/marketing.jpg',
    route: '/services/marketing',
    icon: '📈',
  },
  {
    id: 'uml',
    titre: 'Analyse UML & MERISE',
    description: 'Modélisation et analyse de vos projets informatiques avec les méthodes UML et MERISE.',
    image: '/images/services/analyse.jpg',
    route: '/services/uml',
    icon: '📊',
  },
]

const Services = () => {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Ce que nous faisons</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-display mt-3 mb-4">
            Nos Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-red-100/60 transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.titre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-2xl w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {service.titre}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bouton En savoir plus */}
                <button
                  onClick={() => navigate(service.route)}
                  className="flex items-center gap-2 text-red-500 hover:text-white font-semibold text-sm border-2 border-red-500 hover:bg-red-500 px-5 py-2.5 rounded-full transition-all duration-300 group/btn"
                >
                  En savoir plus
                  <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 