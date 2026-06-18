import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiZap, FiUsers, FiStar, FiGlobe, FiArrowRight, FiChevronRight } from 'react-icons/fi'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'
import { members as founders } from '../data/membersData'

const values = [
  {
    Icon: FiZap,
    title: 'Innovation',
    desc: "Nous adoptons les technologies les plus récentes pour offrir des solutions avant-gardistes adaptées au contexte africain.",
  },
  {
    Icon: FiUsers,
    title: 'Partenariat',
    desc: "Nous ne sommes pas de simples prestataires, mais des partenaires engagés dans votre succès à long terme.",
  },
  {
    Icon: FiStar,
    title: 'Excellence',
    desc: "Chaque ligne de code, chaque pixel et chaque stratégie sont livrés avec le souci du détail et de la qualité.",
  },
  {
    Icon: FiGlobe,
    title: 'Impact Africain',
    desc: "Notre mission est d'accélérer la transformation digitale de l'Afrique en mettant la technologie au service du développement.",
  },
]

const stats = [
  { value: '50+', label: 'Projets réalisés' },
  { value: '8', label: 'Membres fondateurs' },
  { value: '30+', label: 'Clients satisfaits' },
  { value: '5', label: 'Pays couverts' },
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
        subtitle="AfrikTech SAS est une startup technologique camerounaise dédiée à l'accélération de la transformation digitale en Afrique. Innovation, excellence et impact continent."
        image="/images/about.jpg"
        ctaPrimary={{ label: 'Nous contacter', to: '/contact' }}
        ctaSecondary={{ label: 'Nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '50+', label: 'Projets réalisés' },
          { value: '8', label: 'Membres fondateurs' },
          { value: '30+', label: 'Clients satisfaits' },
        ]}
        showMockup={false}
      />

      {/* Notre Histoire */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow mb-3">Notre Histoire</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Un rêve partagé par{' '}
              <span className="text-red-600">8 visionnaires</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                AfrikTech SAS est née de la vision commune de 8 jeunes talents passionnés de technologie,
                unis par une conviction profonde :{' '}
                <span className="text-gray-800 font-semibold">l'Afrique a tout ce qu'il faut pour briller dans le digital.</span>
              </p>
              <p>
                Ensemble, ils ont décidé de construire, d'innover et de livrer des solutions digitales
                de classe mondiale depuis le cœur de l'Afrique. Ce projet est bien plus qu'une startup :
                c'est un{' '}
                <span className="text-gray-800 font-semibold">mouvement pour l'excellence technologique africaine.</span>
              </p>
              <p>
                De Yaoundé vers le monde, AfrikTech SAS prouve chaque jour que le talent africain
                est une force capable de transformer des idées audacieuses en réalités impactantes.{' '}
                <span className="text-red-600 font-semibold">Notre force, c'est vous. Notre mission, c'est votre succès.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-red-200 transition-colors duration-200"
              >
                <div className="text-3xl font-black text-red-600 mb-1 tabular-nums">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="section-eyebrow mb-3">Ce qui nous anime</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Nos Valeurs</h2>
            <div className="mt-4 h-px bg-gray-200 max-w-xs" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const { Icon } = v
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-200 flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-red-600" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Membres fondateurs */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <p className="section-eyebrow mb-3">Les bâtisseurs</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Nos Membres Fondateurs</h2>
            <p className="text-gray-500 text-base md:text-right max-w-xs">
              7 experts, 1 vision. Des profils complémentaires pour bâtir le digital africain.
            </p>
          </div>
          <div className="mt-6 h-px bg-gray-200" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {founders.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/membres/${member.slug}`)}
              className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden flex flex-row sm:flex-col"
            >
              {/* Photo — carré à gauche sur mobile, pleine largeur + ratio portrait sur sm+ */}
              <div className="relative flex-shrink-0 w-28 sm:w-full sm:aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-top group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dégradé bas — visible uniquement en mode carte verticale */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent hidden sm:block pointer-events-none" />
              </div>

              {/* Infos */}
              <div className="flex-1 sm:flex-none p-4 flex flex-col justify-center sm:justify-start min-w-0">
                <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 truncate sm:whitespace-normal">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs leading-snug mb-3 line-clamp-2 sm:line-clamp-none">
                  {member.role}
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 group-hover:text-red-700 transition-colors">
                  Voir le profil
                  <FiChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-l-4 border-red-600 pl-6 py-2"
        >
          <p className="text-xl md:text-2xl font-black text-gray-900 leading-snug mb-3">
            "Nous ne construisons pas juste des applications. Nous construisons l'avenir digital de l'Afrique — une ligne de code à la fois."
          </p>
          <footer className="text-sm text-gray-500 font-medium">
            — Les fondateurs d'AfrikTech SAS
          </footer>
        </motion.blockquote>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
