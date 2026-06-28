import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaGlobe, FaMobileScreen, FaPaintbrush, FaBullhorn, FaDiagramProject } from 'react-icons/fa6'

const services = [
  {
    id: 'web',
    titre: 'Développement Web',
    description: 'Sites et applications web modernes, rapides et responsive — du site vitrine à la plateforme SaaS.',
    image: '/images/services/web.jpg',
    route: '/services/web',
    Icon: FaGlobe,
  },
  {
    id: 'mobile',
    titre: 'Développement Mobile',
    description: 'Applications iOS et Android performantes et intuitives pour connecter votre business à vos clients.',
    image: '/images/services/mobile.jpg',
    route: '/services/mobile',
    Icon: FaMobileScreen,
  },
  {
    id: 'design',
    titre: 'Design Graphique',
    description: 'Identité visuelle, logo, affiches et supports de communication qui marquent les esprits.',
    image: '/images/services/design.jpg',
    route: '/services/design',
    Icon: FaPaintbrush,
  },
  {
    id: 'marketing',
    titre: 'Marketing Digital',
    description: 'Stratégies digitales, réseaux sociaux et campagnes publicitaires pour booster votre visibilité.',
    image: '/images/services/marketing.jpg',
    route: '/services/marketing',
    Icon: FaBullhorn,
  },
  {
    id: 'uml',
    titre: 'Analyse UML & MERISE',
    description: 'Modélisation et analyse de vos projets informatiques avec les méthodes UML et MERISE.',
    image: '/images/services/analyse.jpg',
    route: '/services/uml',
    Icon: FaDiagramProject,
  },
]

const ServiceCard = ({ service, index, navigate }) => {
  const { Icon } = service

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col min-h-[320px]"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gray-bg flex-shrink-0">
        <img
          src={service.image}
          alt={service.titre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 bg-white w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
          <Icon className="text-primary" style={{ width: '15px', height: '15px' }} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-dark mb-2 text-base leading-snug group-hover:text-primary transition-colors duration-200"
            style={{ letterSpacing: '-0.01em' }}>
          {service.titre}
        </h3>
        <p className="text-gray-body text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
          {service.description}
        </p>
        <button
          onClick={() => navigate(service.route)}
          className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-200 group/btn"
        >
          En savoir plus
          <FaArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </motion.article>
  )
}

const Services = () => {
  const navigate = useNavigate()

  return (
    <section id="services" className="py-24 bg-gray-bg">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <span className="section-label">Ce que nous faisons</span>
          <h2 className="section-title">Nos Services</h2>
          <div className="section-divider" />
          <p className="text-gray-body text-base max-w-md">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès.
          </p>
        </motion.div>

        {/* Cards — 3 premiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} navigate={navigate} />
          ))}
        </div>

        {/* Cards — 2 derniers, centrés */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i + 3} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
