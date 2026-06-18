import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
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
    desc: "Campagne publicitaire ayant généré +300% d'engagement et 2 500 nouveaux abonnés en 30 jours.",
  },
  {
    id: 5,
    title: 'Portail RH Entreprise',
    category: 'Web',
    image: '/images/portfolio/rh.jpg',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
    desc: "Système de gestion des ressources humaines avec congés, paie et évaluation des performances.",
  },
  {
    id: 6,
    title: 'App Fintech Mobile Money',
    category: 'Mobile',
    image: '/images/portfolio/fintech.jpg',
    tech: ['Flutter', 'Laravel', 'MTN API'],
    desc: "Application de transfert d'argent et de paiement de factures intégrée aux APIs Mobile Money.",
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

const statsData = [
  { value: '50+', label: 'Projets livrés' },
  { value: '30+', label: 'Clients actifs' },
  { value: '5',   label: 'Pays couverts' },
  { value: '100%', label: 'Satisfaction client' },
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Portfolio"
        badgeText="Découvrez nos meilleures réalisations"
        title="Nos"
        titleGradient="Réalisations"
        subtitle="De la conception à la livraison, explorez une sélection de projets web, mobile, design et marketing réalisés pour nos clients à travers l'Afrique."
        image="/images/heros/portfolio.jpg"
        ctaPrimary={{ label: 'Nous contacter', to: '/contact' }}
        ctaSecondary={{ label: 'Nos services', to: '/' }}
        stats={[
          { value: '50+', label: 'Projets livrés' },
          { value: '30+', label: 'Clients actifs' },
          { value: '5', label: 'Pays couverts' },
        ]}
        showMockup={false}
      />

      {/* Projects */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Filter tabs */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="ml-1.5 text-[10px] font-bold text-red-600">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 group-hover:text-red-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="text-center px-6 py-4"
              >
                <div className="text-3xl font-black text-red-600 mb-1 tabular-nums">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
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
