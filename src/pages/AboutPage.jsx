import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { members as founders } from '../data/membersData'

const values = [
  { icon: '🚀', title: 'Innovation', desc: 'Nous adoptons les technologies les plus récentes pour offrir des solutions avant-gardistes adaptées au contexte africain.' },
  { icon: '🤝', title: 'Partenariat', desc: 'Nous ne sommes pas de simples prestataires, mais des partenaires engagés dans votre succès à long terme.' },
  { icon: '⚡', title: 'Excellence', desc: 'Chaque ligne de code, chaque pixel et chaque stratégie sont livrés avec le souci du détail et de la qualité.' },
  { icon: '🌍', title: 'Impact Africain', desc: "Notre mission est d'accélérer la transformation digitale de l'Afrique en mettant la technologie au service du développement." },
]

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/60 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Qui sommes-nous
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            À Propos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              d'AfrikTech SAS
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Une équipe passionnée qui croit au pouvoir de la technologie pour transformer l'Afrique.
          </motion.p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Notre Histoire</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-6">
              Un rêve partagé par <span className="text-red-500">8 visionnaires</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              AfrikTech SAS est née de la vision commune de 8 jeunes talents passionnés de technologie,
              unis par une conviction profonde : <span className="text-gray-800 font-semibold">l'Afrique a tout ce qu'il faut pour briller dans le digital.</span>
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Ensemble, ils ont décidé de ne plus attendre — de construire, d'innover et de livrer
              des solutions digitales de classe mondiale depuis le cœur de l'Afrique. Ce projet
              est bien plus qu'une startup : c'est un <span className="text-gray-800 font-semibold">mouvement pour l'excellence technologique africaine.</span>
            </p>
            <p className="text-gray-500 leading-relaxed">
              De Yaoundé vers le monde, AfrikTech SAS prouve chaque jour que le talent africain
              est une force capable de transformer des idées audacieuses en réalités digitales
              impactantes. <span className="text-red-500 font-semibold">Notre force, c'est vous. Notre mission, c'est votre succès.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '50+', label: 'Projets réalisés' },
              { value: '8', label: 'Membres fondateurs' },
              { value: '30+', label: 'Clients satisfaits' },
              { value: '5', label: 'Pays couverts' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40 transition-all duration-300">
                <div className="text-3xl font-black text-red-500 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Ce qui nous anime</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Nos Valeurs</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300 group flex gap-5"
              >
                <div className="text-3xl flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membres fondateurs */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Les bâtisseurs</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Nos Membres Fondateurs</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4 mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            7 experts, 1 vision. Des profils complémentaires réunis pour bâtir le futur digital de l'Afrique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {founders.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Infos */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{member.role}</p>
                <div className="mb-3 w-8 h-0.5 bg-gradient-to-r from-red-400 to-rose-400 mx-auto rounded-full" />
                <button
                  onClick={() => navigate(`/membres/${member.slug}`)}
                  className="text-xs font-semibold text-red-500 hover:text-white border border-red-400 hover:bg-red-500 px-4 py-1.5 rounded-full transition-all duration-300"
                >
                  En savoir plus →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation motivante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-500 to-rose-600 rounded-3xl p-10 text-center text-white"
        >
          <div className="text-5xl mb-4">💡</div>
          <blockquote className="text-xl md:text-2xl font-black mb-4 leading-relaxed">
            "Nous ne construisons pas juste des applications. Nous construisons l'avenir digital de l'Afrique — une ligne de code à la fois."
          </blockquote>
          <p className="text-red-100 font-medium">— Les fondateurs d'AfrikTech SAS</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage