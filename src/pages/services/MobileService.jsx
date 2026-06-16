import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  {
    icon: '🍎',
    title: 'iOS & Android Natifs',
    desc: 'Applications natives Swift/Kotlin pour des performances maximales et une expérience utilisateur irréprochable.',
  },
  {
    icon: '⚛️',
    title: 'React Native & Flutter',
    desc: 'Solutions cross-platform qui partagent jusqu\'à 90 % du code entre iOS et Android, réduisant les coûts et délais.',
  },
  {
    icon: '🔔',
    title: 'Notifications Push',
    desc: 'Engagement utilisateur boosté grâce aux notifications ciblées, en temps réel, géolocalisées ou planifiées.',
  },
  {
    icon: '📡',
    title: 'Mode Hors Ligne',
    desc: 'Fonctionnement garanti sans connexion internet, avec synchronisation automatique dès le retour en ligne.',
  },
  {
    icon: '🔐',
    title: 'Sécurité & Authentification',
    desc: 'Biométrie, authentification multi-facteurs et chiffrement des données pour protéger vos utilisateurs.',
  },
  {
    icon: '📊',
    title: 'Analytics Intégrés',
    desc: 'Tableaux de bord en temps réel pour suivre l\'engagement, les conversions et le comportement utilisateur.',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Ateliers de cadrage, personas et user journeys pour cerner vos utilisateurs.' },
  { step: '02', title: 'Prototypage', desc: 'Wireframes et prototype interactif validé avant tout développement.' },
  { step: '03', title: 'Développement', desc: 'Sprints agiles avec démos bi-hebdomadaires et intégration continue.' },
  { step: '04', title: 'Publication', desc: 'Soumission App Store & Google Play, ASO et suivi post-lancement.' },
]

const mobileTechs = [
  {
    name: 'Flutter',
    image: '/images/tech/flutter.jpg',
    desc: 'Framework Google pour créer des apps iOS & Android natives depuis une seule base de code.',
  },
]

const MobileService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/mobile.jpg')" }}
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
            Nos Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Développement
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Mobile
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Des applications mobiles intuitives et performantes pour iOS et Android,
            conçues pour engager et fidéliser vos utilisateurs.
          </motion.p>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'Services', to: '/#services' }, { label: 'Développement Mobile' }]} />

      {/* Explication du service */}
      <section className="py-10 md:py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">C'est quoi ?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 mb-5">
              Le Développement Mobile, c'est quoi ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Le développement mobile consiste à créer des applications installables sur smartphones et tablettes — disponibles sur le <span className="text-gray-800 font-semibold">Google Play Store</span> (Android) et l'<span className="text-gray-800 font-semibold">App Store</span> (iOS). Ces applications offrent une expérience bien plus fluide et intégrée qu'un simple site web, avec accès à la caméra, aux notifications, à la géolocalisation et bien plus.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Nous développons en <span className="text-gray-800 font-semibold">Flutter</span>, le framework de Google qui permet de créer une application unique qui fonctionne parfaitement sur iOS et Android simultanément — ce qui réduit considérablement les coûts et les délais de développement sans compromis sur la qualité.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Des applications de livraison, de paiement mobile, de gestion de stocks, de réservation ou de fidélité client — <span className="text-red-500 font-semibold">nous concevons des apps mobiles qui engagent vos utilisateurs et font croître votre activité.</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: '📦', label: 'Apps de livraison' },
              { icon: '💳', label: 'Paiement mobile' },
              { icon: '🏪', label: 'Apps e-commerce' },
              { icon: '📅', label: 'Réservation' },
              { icon: '🎯', label: 'Fidélité client' },
              { icon: '📋', label: 'Apps métier' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-200 hover:shadow-md hover:shadow-red-100/40 rounded-xl p-4 flex items-center gap-3 transition-all duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Notre stack mobile</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">Technologie que nous utilisons</h2>
            <div className="w-14 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-400 group hover:-translate-y-1 w-full max-w-xs"
            >
              <div className="h-20 flex items-center justify-center mb-5">
                <img
                  src="/images/tech/flutter.jpg"
                  alt="Flutter"
                  className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">Flutter</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Framework Google pour créer des apps iOS & Android natives depuis une seule base de code. Performances natives, animations fluides et écosystème riche.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['iOS', 'Android', 'Cross-platform', 'Dart'].map((tag) => (
                  <span key={tag} className="bg-red-50 text-red-500 border border-red-100 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos atouts */}
      <section className="py-10 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Des apps mobiles qui font la différence
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Nous développons des applications mobiles qui répondent aux vrais besoins de vos
            utilisateurs, avec une attention particulière à la performance et à l'expérience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 rounded-2xl p-6 transition-all duration-400 group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors duration-300">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Comment ça marche</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Notre Processus</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-6 shadow-md shadow-gray-200/60 border border-gray-100 text-center"
              >
                <div className="text-5xl font-black text-red-100 mb-3">{p.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-4">Votre app mobile vous attend</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Discutons de votre projet et commençons à construire ensemble.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#contact')}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-red-200/60 hover:scale-105 transform"
            >
              Démarrer un projet
            </button>
            <button
              onClick={() => navigate(-1)}
              className="border-2 border-gray-300 hover:border-red-400 text-gray-600 hover:text-red-500 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              ← Retour aux services
            </button>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}

export default MobileService
