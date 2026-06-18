import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FiSmartphone, FiLayers, FiBell, FiWifi, FiShield, FiBarChart2,
  FiPackage, FiCreditCard, FiShoppingBag, FiCalendar, FiStar, FiClipboard,
  FiArrowRight, FiArrowLeft,
} from 'react-icons/fi'
import Navbar from '../../components/sections/Navbar'
import Hero from '../../components/sections/Hero'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  { Icon: FiSmartphone, title: 'iOS & Android Natifs',       desc: "Applications natives Swift/Kotlin pour des performances maximales et une expérience utilisateur irréprochable." },
  { Icon: FiLayers,     title: 'React Native & Flutter',     desc: "Solutions cross-platform qui partagent jusqu'à 90 % du code entre iOS et Android, réduisant les coûts et délais." },
  { Icon: FiBell,       title: 'Notifications Push',         desc: "Engagement utilisateur boosté grâce aux notifications ciblées, en temps réel, géolocalisées ou planifiées." },
  { Icon: FiWifi,       title: 'Mode Hors Ligne',            desc: "Fonctionnement garanti sans connexion internet, avec synchronisation automatique dès le retour en ligne." },
  { Icon: FiShield,     title: 'Sécurité & Authentification',desc: "Biométrie, authentification multi-facteurs et chiffrement des données pour protéger vos utilisateurs." },
  { Icon: FiBarChart2,  title: 'Analytics Intégrés',         desc: "Tableaux de bord en temps réel pour suivre l'engagement, les conversions et le comportement utilisateur." },
]

const mobileTypes = [
  { Icon: FiPackage,     label: 'Apps de livraison' },
  { Icon: FiCreditCard,  label: 'Paiement mobile' },
  { Icon: FiShoppingBag, label: 'Apps e-commerce' },
  { Icon: FiCalendar,    label: 'Réservation' },
  { Icon: FiStar,        label: 'Fidélité client' },
  { Icon: FiClipboard,   label: 'Apps métier' },
]

const process = [
  { step: '01', title: 'Discovery',     desc: 'Ateliers de cadrage, personas et user journeys pour cerner vos utilisateurs.' },
  { step: '02', title: 'Prototypage',   desc: 'Wireframes et prototype interactif validé avant tout développement.' },
  { step: '03', title: 'Développement', desc: 'Sprints agiles avec démos bi-hebdomadaires et intégration continue.' },
  { step: '04', title: 'Publication',   desc: 'Soumission App Store & Google Play, ASO et suivi post-lancement.' },
]

const MobileService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Nos Services"
        badgeText="Applications mobiles iOS & Android"
        title="Développement"
        titleGradient="Mobile"
        subtitle="Des applications mobiles intuitives et performantes pour iOS et Android. React Native, Flutter ou natif — nous développons l'expérience qui engage vos utilisateurs."
        image="/images/services/mobile.jpg"
        ctaPrimary={{ label: 'Démarrer un projet', to: '/contact' }}
        ctaSecondary={{ label: 'Voir nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '20+', label: 'Apps publiées' },
          { value: '2', label: 'Plateformes supportées' },
          { value: '100%', label: 'Satisfaction client' },
        ]}
        showMockup={false}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/#services' },
          { label: 'Développement Mobile' },
        ]}
      />

      {/* What is it */}
      <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow mb-3">C'est quoi ?</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-5">
              Le Développement Mobile, c'est quoi ?
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Le développement mobile consiste à créer des applications installables sur
                smartphones et tablettes — disponibles sur le{' '}
                <span className="text-gray-800 font-semibold">Google Play Store</span> (Android)
                et l'<span className="text-gray-800 font-semibold">App Store</span> (iOS).
              </p>
              <p>
                Nous développons en <span className="text-gray-800 font-semibold">Flutter</span>,
                le framework de Google qui permet de créer une application unique fonctionnant
                parfaitement sur iOS et Android simultanément — réduisant les coûts sans
                compromis sur la qualité.
              </p>
              <p>
                Des applications de livraison, de paiement mobile, de réservation ou de fidélité
                client —{' '}
                <span className="text-red-600 font-semibold">
                  nous concevons des apps qui engagent vos utilisateurs et font croître votre
                  activité.
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {mobileTypes.map((item, i) => {
              const { Icon } = item
              return (
                <div
                  key={i}
                  className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm rounded-xl p-4 flex items-center gap-3 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="section-eyebrow mb-2">Notre stack mobile</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Technologie que nous utilisons</h2>
            <div className="mt-3 h-px bg-gray-200 max-w-xs" />
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center border border-gray-200 w-full max-w-sm"
            >
              <div className="h-16 flex items-center justify-center mb-5">
                <img
                  src="/images/tech/flutter.jpg"
                  alt="Flutter"
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Flutter</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Framework Google pour créer des apps iOS & Android natives depuis une seule base de
                code. Performances natives, animations fluides et écosystème riche.
              </p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {['iOS', 'Android', 'Cross-platform', 'Dart'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            Des apps mobiles qui font la différence
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Nous développons des applications qui répondent aux vrais besoins de vos utilisateurs,
            avec une attention particulière à la performance et à l'expérience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const { Icon } = f
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-red-600" style={{ width: '18px', height: '18px' }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="section-eyebrow mb-2">Comment ça marche</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Notre Processus</h2>
            <div className="mt-3 h-px bg-gray-200 max-w-xs" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="text-4xl font-black text-gray-100 mb-3 select-none">{p.step}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2.5 text-gray-300">
                    <FiArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-black text-gray-900 mb-3">Votre app mobile vous attend</h2>
          <p className="text-gray-500 mb-8">Discutons de votre projet et commençons à construire ensemble.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Démarrer un projet
              <FiArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <FiArrowLeft className="w-4 h-4" />
              Retour aux services
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileService
