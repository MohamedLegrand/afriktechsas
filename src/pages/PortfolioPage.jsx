import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

const categories = ['Tous', 'Web', 'Mobile', 'Design', 'Marketing']

const projects = [
  {
    id: 1,
    title: 'Plateforme E-commerce',
    category: 'Web',
    image: '/images/portfolio/ecommerce.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    desc: 'Boutique en ligne complète avec paiement mobile money, gestion des stocks et tableau de bord admin.',
  },
  {
    id: 2,
    title: 'App de Livraison',
    category: 'Mobile',
    image: '/images/portfolio/delivery.jpg',
    tech: ['React Native', 'Firebase', 'Google Maps'],
    desc: 'Application de livraison géolocalisée avec suivi en temps réel pour livreurs et clients.',
  },
  {
    id: 3,
    title: 'Identité Visuelle AfriFood',
    category: 'Design',
    image: '/images/portfolio/afrifood.jpg',
    tech: ['Illustrator', 'Photoshop', 'Figma'],
    desc: 'Logo, charte graphique et supports de communication pour une chaîne de restauration rapide.',
  },
  {
    id: 4,
    title: 'Campagne Social Media',
    category: 'Marketing',
    image: '/images/portfolio/social.jpg',
    tech: ['Meta Ads', 'Canva', 'Analytics'],
    desc: 'Campagne publicitaire ayant généré +300% d\'engagement et 2 500 nouveaux abonnés en 30 jours.',
  },
  {
    id: 5,
    title: 'Portail RH Entreprise',
    category: 'Web',
    image: '/images/portfolio/rh.jpg',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    desc: 'Système de gestion des ressources humaines avec congés, paie et évaluation des performances.',
  },
  {
    id: 6,
    title: 'App Fintech Mobile Money',
    category: 'Mobile',
    image: '/images/portfolio/fintech.jpg',
    tech: ['Flutter', 'Laravel', 'MTN API'],
    desc: 'Application de transfert d\'argent et de paiement de factures intégrée aux APIs Mobile Money.',
  },
  {
    id: 7,
    title: 'Brand Kit Startup Tech',
    category: 'Design',
    image: '/images/portfolio/brand.jpg',
    tech: ['Figma', 'After Effects', 'Illustrator'],
    desc: 'Kit de marque complet incluant animations de logo, templates réseaux sociaux et pitch deck.',
  },
  {
    id: 8,
    title: 'Stratégie SEO & Contenu',
    category: 'Marketing',
    image: '/images/portfolio/seo.jpg',
    tech: ['SEMrush', 'WordPress', 'GA4'],
    desc: 'Audit SEO, refonte de contenu et link building ayant doublé le trafic organique en 3 mois.',
  },
  {
    id: 9,
    title: 'Site Vitrine Cabinet Médical',
    category: 'Web',
    image: '/images/portfolio/medical.jpg',
    tech: ['React', 'Tailwind', 'Prismic'],
    desc: 'Site de présentation avec prise de rendez-vous en ligne et blog médical.',
  },
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/heros/portfolio.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/60 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-red-500/20 blur-3xl rounded-full" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Nos Réalisations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Notre
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Portfolio
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Découvrez nos projets réalisés pour des clients à travers l'Afrique et au-delà.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200/60'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-red-100/60 border border-gray-100 hover:border-red-200 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-red-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full border border-red-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projets livrés' },
              { value: '30+', label: 'Clients actifs' },
              { value: '5', label: 'Pays couverts' },
              { value: '100%', label: 'Satisfaction client' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-black text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PortfolioPage
