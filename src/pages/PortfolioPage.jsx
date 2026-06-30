import { useState } from 'react'
import { FaArrowRight, FaUpload } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'
import { a } from 'framer-motion/client'

const categories = ['Tous', 'Web', 'Mobile', 'Design', 'Marketing']

const projects = [
  { id: 1, title: 'Site web d\'AfrikTech', category: 'Web', image: '/images/Realisation/web/site_web_AfrikTech.png', tech: ['React'], desc: 'Site web vitrine présentant la structure AfrikTech.', exp : 'https://afriktechsas.vercel.app' },
  { id: 2, title: 'App de gestion de boutique', category: 'Mobile', image: '/images/portfolio/delivery.jpg', tech: ['React Native', 'Firebase', 'Google Maps'], desc: 'Application géolocalisée avec suivi en temps réel pour livreurs et clients.', exp :'' },
  { id: 3, title: 'Identité Visuelle AfriFood', category: 'Design', image: '/images/portfolio/afrifood.jpg', tech: ['Illustrator', 'Photoshop', 'Figma'], desc: 'Logo, charte graphique et supports pour une chaîne de restauration rapide.', exp :'' },
  { id: 4, title: 'Campagne Social Media', category: 'Marketing', image: '/images/portfolio/social.jpg', tech: ['Meta Ads', 'Canva', 'Analytics'], desc: '+300% d\'engagement et 2 500 nouveaux abonnés en 30 jours.', exp :'' },
  { id: 5, title: 'Portail RH Entreprise', category: 'Web', image: '/images/portfolio/rh.jpg', tech: ['Next.js', 'PostgreSQL', 'Tailwind'], desc: 'Système de gestion RH avec congés, paie et évaluation des performances.', exp :'' },
  { id: 6, title: 'App Fintech Mobile Money', category: 'Mobile', image: '/images/portfolio/fintech.jpg', tech: ['Flutter', 'Laravel', 'MTN API'], desc: 'Transfert d\'argent et paiement de factures intégré aux APIs Mobile Money.', exp :'' },
  { id: 7, title: 'Brand Kit StartUP Tech', category: 'Design', image: '/images/portfolio/brand.jpg', tech: ['Figma', 'After Effects', 'Illustrator'], desc: 'Kit de marque complet avec animations, templates et pitch deck.', exp :'' },
  { id: 8, title: 'Stratégie SEO & Contenu', category: 'Marketing', image: '/images/portfolio/seo.jpg',  tech: ['SEMrush', 'WordPress', 'GA4'], desc: 'Audit SEO et link building ayant doublé le trafic organique en 3 mois.', exp :'' },
  { id: 9, title: 'Site Vitrine Cabinet Médical', category: 'Web', image: '/images/portfolio/medical.jpg', tech: ['React', 'Tailwind', 'Prismic'], desc: 'Site de présentation avec prise de rendez-vous en ligne et blog médical.', exp :'' },
]

const statsData = [
  { value: '50+',  label: 'Projets livrés' },
  { value: '30+',  label: 'Clients actifs' },
  { value: '5',    label: 'Pays couverts' },
  { value: '100%', label: 'Satisfaction client' },
]

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filtered = activeCategory === 'Tous' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Portfolio"
        badgeText="Découvrez nos meilleures réalisations"
        title="Nos"
        titleGradient="Réalisations"
        subtitle="De la conception à la livraison, explorez nos projets web, mobile, design et marketing réalisés à travers l'Afrique."
        image="/images/heros/portfolio.jpg"
        ctaPrimary={{ label: 'Nous contacter', to: '/contact' }}
        ctaSecondary={{ label: 'Nos services', to: '/' }}
        stats={[
          { value: '50+', label: 'Projets livrés' },
          { value: '30+', label: 'Clients actifs' },
          { value: '5',   label: 'Pays couverts' },
        ]}
        showMockup={false}
      />

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">

          {/* Filter pills */}
          <div className="flex items-center gap-1.5 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-bg text-gray-body hover:text-dark border border-gray-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  {/* Image 16/9 */}
                  <div className="relative overflow-hidden bg-gray-bg" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/75 transition-colors duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {project.category}
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase font-sans">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-dark mb-1.5 text-base group-hover:text-primary transition-colors duration-200"
                        style={{ letterSpacing: '-0.01em' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-body text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>
                    {project.category == 'Web' || project.category == 'Marketing' ? <span style={{color:'blue', fontSize:'12px', display:'flex', gap:'10px', margin:'5px 0px 10px 0px'}}><a target='_blank' href={project.exp}>Visiter</a> <FaArrowRight/> </span> : <span style={{color:'blue', fontSize:'12px', display:'flex', gap:'10px', margin:'5px 0px 10px 0px'}}><a target='_blank' href={project.exp}>Télécharger</a> <FaUpload/> </span>}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="bg-gray-bg text-gray-body text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-gray-border font-sans">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Supports de communication */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-10"
          >
            <span className="section-label">Communication visuelle</span>
            <h2 className="section-title">Nos Supports & Flyers</h2>
            <div className="section-divider" />
            <p className="text-gray-body text-sm max-w-md">
              AfrikTech conçoit ses propres supports publicitaires pour promouvoir ses activités.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/flyer/rollup.jpg',       alt: 'Roll-up AfrikTech' },
              { src: '/images/flyer/embassadeur.jpg',  alt: 'Flyer ambassadeur AfrikTech' },
              { src: '/images/flyer/weekend.jpg',      alt: 'Flyer weekend AfrikTech' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
              >
                <img src={item.src} alt={item.alt} className="w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-t border-gray-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-border">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center px-6 py-4"
              >
                <div className="font-display font-black text-primary text-3xl mb-1 tabular-nums"
                     style={{ letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div className="text-gray-secondary text-sm font-sans">{stat.label}</div>
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
