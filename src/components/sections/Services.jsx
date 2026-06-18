import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiGlobe, FiSmartphone, FiPenTool, FiTrendingUp, FiGitBranch } from 'react-icons/fi'

const services = [
  {
    id: 'web',
    titre: 'Développement Web',
    description: 'Sites et applications web modernes, rapides et responsive — du site vitrine à la plateforme SaaS.',
    image: '/images/services/web.jpg',
    route: '/services/web',
    Icon: FiGlobe,
  },
  {
    id: 'mobile',
    titre: 'Développement Mobile',
    description: 'Applications iOS et Android performantes et intuitives pour connecter votre business à vos clients.',
    image: '/images/services/mobile.jpg',
    route: '/services/mobile',
    Icon: FiSmartphone,
  },
  {
    id: 'design',
    titre: 'Design Graphique',
    description: 'Identité visuelle, logo, affiches et supports de communication qui marquent les esprits.',
    image: '/images/services/design.jpg',
    route: '/services/design',
    Icon: FiPenTool,
  },
  {
    id: 'marketing',
    titre: 'Marketing Digital',
    description: 'Stratégies digitales, réseaux sociaux et campagnes publicitaires pour booster votre visibilité.',
    image: '/images/services/marketing.jpg',
    route: '/services/marketing',
    Icon: FiTrendingUp,
  },
  {
    id: 'uml',
    titre: 'Analyse UML & MERISE',
    description: 'Modélisation et analyse de vos projets informatiques avec les méthodes UML et MERISE.',
    image: '/images/services/analyse.jpg',
    route: '/services/uml',
    Icon: FiGitBranch,
  },
]

const Services = () => {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-eyebrow mb-3">Ce que nous faisons</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Nos Services
            </h2>
            <p className="text-gray-500 text-base max-w-md md:text-right">
              Des solutions digitales complètes pour propulser votre entreprise vers le succès.
            </p>
          </div>
          <div className="mt-6 h-px bg-gray-200" />
        </motion.div>

        {/* Cards grid — first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} navigate={navigate} />
          ))}
        </div>

        {/* Cards grid — last 2, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index + 3} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index, navigate }) => {
  const { Icon } = service

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={service.image}
          alt={service.titre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 bg-white w-9 h-9 rounded-lg flex items-center justify-center shadow-sm">
          <Icon className="w-4 h-4 text-red-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
          {service.titre}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
          {service.description}
        </p>
        <button
          onClick={() => navigate(service.route)}
          className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors duration-200 group/btn"
        >
          En savoir plus
          <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </motion.article>
  )
}

export default Services
