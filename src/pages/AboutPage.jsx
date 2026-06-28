import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaBolt, FaUsers, FaStar, FaGlobe, FaChevronRight } from 'react-icons/fa6'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'
import { members as founders } from '../data/membersData'

const values = [
  {
    Icon: FaBolt,
    title: 'Innovation',
    desc: "Nous adoptons les technologies les plus récentes pour offrir des solutions avant-gardistes adaptées au contexte africain.",
  },
  {
    Icon: FaUsers,
    title: 'Partenariat',
    desc: "Nous ne sommes pas de simples prestataires, mais des partenaires engagés dans votre succès à long terme.",
  },
  {
    Icon: FaStar,
    title: 'Excellence',
    desc: "Chaque ligne de code, chaque pixel et chaque stratégie sont livrés avec le souci du détail et de la qualité.",
  },
  {
    Icon: FaGlobe,
    title: 'Impact Africain',
    desc: "Notre mission est d'accélérer la transformation digitale de l'Afrique en mettant la technologie au service du développement.",
  },
]

const stats = [
  { value: '50+', label: 'Projets réalisés' },
  { value: '8',   label: 'Membres fondateurs' },
  { value: '30+', label: 'Clients satisfaits' },
  { value: '5',   label: 'Pays couverts' },
]

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="À Propos"
        badgeText="Notre histoire, nos valeurs, notre équipe"
        title="Qui Sommes-Nous"
        titleGradient="Vraiment ?"
        subtitle="AfrikTech SAS est une startup technologique camerounaise dédiée à la transformation digitale de l'Afrique. Innovation, excellence et impact continent."
        image="/images/about.jpg"
        ctaPrimary={{ label: 'Nous contacter', to: '/contact' }}
        ctaSecondary={{ label: 'Nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '50+', label: 'Projets réalisés' },
          { value: '8',   label: 'Membres fondateurs' },
          { value: '30+', label: 'Clients satisfaits' },
        ]}
        showMockup={false}
      />

      {/* Notre Histoire */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <span className="section-label">Notre Histoire</span>
              <h2 className="section-title">
                Un rêve partagé par{' '}
                <span className="text-primary">8 visionnaires</span>
              </h2>
              <div className="section-divider" />
              <div className="space-y-4 text-gray-body text-[15px] leading-[1.75]">
                <p>
                  AfrikTech SAS est née de la vision commune de 8 jeunes talents passionnés de technologie,
                  unis par une conviction profonde :{' '}
                  <span className="text-dark font-semibold">l'Afrique a tout ce qu'il faut pour briller dans le digital.</span>
                </p>
                <p>
                  Ensemble, ils ont décidé de construire, d'innover et de livrer des solutions digitales
                  de classe mondiale depuis le cœur de l'Afrique.{' '}
                  <span className="text-dark font-semibold">Un mouvement pour l'excellence technologique africaine.</span>
                </p>
                <p>
                  De Yaoundé vers le monde, AfrikTech SAS prouve chaque jour que le talent africain
                  est une force capable de transformer des idées audacieuses en réalités impactantes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-gray-bg rounded-xl p-6 text-center border border-gray-border hover:border-primary transition-colors duration-200">
                  <div className="text-3xl font-display font-black text-primary mb-1 tabular-nums"
                       style={{ letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-secondary text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="section-label">Ce qui nous anime</span>
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const { Icon } = v
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-border hover:border-primary hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <div className="flex-shrink-0 w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" style={{ width: '16px', height: '16px' }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-dark mb-1.5 text-base"
                        style={{ letterSpacing: '-0.01em' }}>
                      {v.title}
                    </h3>
                    <p className="text-gray-body text-sm leading-relaxed line-clamp-2">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo de toute la team */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-10"
          >
            <span className="section-label">La famille AfrikTech</span>
            <h2 className="section-title">Toute la Team Réunie</h2>
            <div className="section-divider" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-gray-100 shadow-lg"
              style={{ aspectRatio: '3/4', maxWidth: '480px' }}
            >
              <img
                src="/images/membres/team.jpg"
                alt="Équipe AfrikTech SAS"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membres fondateurs */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="section-label">Les bâtisseurs</span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 className="section-title mb-0">Nos Membres Fondateurs</h2>
              <p className="text-gray-secondary text-sm md:text-right max-w-xs">
                7 experts, 1 vision. Des profils complémentaires pour bâtir le digital africain.
              </p>
            </div>
            <div className="mt-5 h-px bg-gray-border" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {founders.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => navigate(`/membres/${member.slug}`)}
                className="group bg-white rounded-xl border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-row sm:flex-col"
              >
                <div className="relative flex-shrink-0 w-24 sm:w-full sm:aspect-square bg-gray-bg overflow-hidden"
                     style={{ borderRadius: '0' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    style={{ borderRadius: '0' }}
                  />
                </div>
                <div className="flex-1 sm:flex-none p-4 flex flex-col justify-center sm:justify-start min-w-0">
                  <h3 className="font-display font-bold text-dark text-sm leading-tight mb-0.5 truncate sm:whitespace-normal"
                      style={{ letterSpacing: '-0.01em' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-secondary text-xs leading-snug mb-3 line-clamp-2">
                    {member.role}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-primary-dark transition-colors">
                    Voir le profil
                    <FaChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Citation */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 rounded-xl p-8"
            style={{ background: '#0A0A0A', borderLeft: '4px solid #DC2626' }}
          >
            <p className="font-display font-bold text-white text-xl leading-snug mb-3"
               style={{ letterSpacing: '-0.02em' }}>
              "Nous ne construisons pas juste des applications. Nous construisons l'avenir digital de l'Afrique — une ligne de code à la fois."
            </p>
            <footer className="text-gray-secondary text-sm font-medium">
              — Les fondateurs d'AfrikTech SAS
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Ambassadeurs & Événements */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-12"
          >
            <span className="section-label">Rejoindre la communauté</span>
            <h2 className="section-title">Ambassadeurs & Événements</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/images/flyer/embassadeur.jpg', alt: 'Devenir ambassadeur AfrikTech', title: 'Devenez Ambassadeur AfrikTech', desc: 'Rejoignez notre réseau et portez les valeurs d\'AfrikTech partout en Afrique.' },
              { src: '/images/flyer/weekend.jpg',     alt: 'Weekend AfrikTech',              title: 'Événements & Weekends AfrikTech', desc: 'Nos weekends de cohésion, d\'innovation et de networking.' },
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
                <div className="p-5 border-t border-gray-border">
                  <h3 className="font-display font-bold text-dark mb-1 text-base"
                      style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-body text-sm line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
