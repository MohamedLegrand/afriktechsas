import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FiTag, FiLayout, FiShare2, FiPlay, FiMonitor, FiPackage,
  FiAward, FiFileText, FiImage, FiFilm, FiArrowRight, FiArrowLeft,
} from 'react-icons/fi'
import Navbar from '../../components/sections/Navbar'
import Hero from '../../components/sections/Hero'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  { Icon: FiTag,     title: 'Identité de Marque',           desc: 'Logo, charte graphique, palette de couleurs et typographies qui donnent une personnalité forte et cohérente à votre marque.' },
  { Icon: FiFileText, title: 'Supports Imprimés',           desc: 'Cartes de visite, flyers, affiches, brochures et kakémonos conçus pour marquer les esprits et renforcer votre présence.' },
  { Icon: FiShare2,  title: 'Visuels pour Réseaux Sociaux', desc: 'Contenus graphiques optimisés pour chaque plateforme : Instagram, Facebook, LinkedIn et TikTok.' },
  { Icon: FiPlay,    title: 'Motion Design',                desc: 'Animations et vidéos courtes qui captivent votre audience et communiquent vos messages avec impact.' },
  { Icon: FiMonitor, title: 'UI Design',                   desc: 'Interfaces utilisateur pour vos applications web et mobiles, ergonomiques et esthétiquement irréprochables.' },
  { Icon: FiPackage, title: 'Packaging & Signalétique',     desc: 'Design de packaging produit et signalétique en magasin qui valorisent votre offre et renforcent votre image.' },
]

const designTypes = [
  { Icon: FiAward,    label: 'Logo & Branding' },
  { Icon: FiFileText, label: 'Flyers & Affiches' },
  { Icon: FiImage,    label: 'Visuels Réseaux' },
  { Icon: FiFilm,     label: 'Motion Design' },
  { Icon: FiMonitor,  label: 'UI Design' },
  { Icon: FiPackage,  label: 'Packaging' },
]

const process = [
  { step: '01', title: 'Brief Créatif', desc: "Analyse de votre secteur, concurrents et cible pour définir le positionnement visuel." },
  { step: '02', title: 'Concepts',      desc: '3 propositions créatives distinctes avec moodboard et justifications.' },
  { step: '03', title: 'Affinement',    desc: "Itérations basées sur vos retours jusqu'à la version finale validée." },
  { step: '04', title: 'Livraison',     desc: 'Fichiers en tous formats (AI, EPS, PNG, PDF) et guide d\'utilisation.' },
]

const DesignService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Nos Services"
        badgeText="Identité visuelle & Design créatif"
        title="Design"
        titleGradient="Graphique"
        subtitle="Une identité visuelle forte et cohérente qui distingue votre marque, inspire confiance et reste gravée dans les mémoires de votre audience."
        image="/images/services/design.jpg"
        ctaPrimary={{ label: 'Démarrer un projet', to: '/contact' }}
        ctaSecondary={{ label: 'Voir nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '100+', label: 'Visuels créés' },
          { value: '3', label: 'Concepts par projet' },
          { value: '100%', label: 'Satisfaction client' },
        ]}
        showMockup={false}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/#services' },
          { label: 'Design Graphique' },
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
              Le Design Graphique, c'est quoi ?
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Le design graphique est l'art de communiquer visuellement. C'est la discipline
                qui transforme une idée ou une marque en images, couleurs et typographies qui
                parlent instantanément à votre audience.
              </p>
              <p>
                Une bonne identité visuelle distingue une entreprise professionnelle d'une entreprise
                amateur. Le logo, les couleurs et les supports de communication doivent former un tout
                cohérent qui inspire{' '}
                <span className="text-gray-800 font-semibold">confiance, crédibilité et mémorabilité</span>.
              </p>
              <p>
                Chez AfrikTech SAS, notre designer Salomon crée des identités authentiques qui
                reflètent l'essence de votre marque.{' '}
                <span className="text-red-600 font-semibold">
                  Votre image, c'est votre premier commercial — nous la rendons inoubliable.
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
            {designTypes.map((item, i) => {
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
            Le design, votre premier commercial
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Un bon design ne fait pas que plaire — il communique, convainc et convertit.
            Nous créons des visuels qui racontent votre histoire.
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Notre Processus Créatif</h2>
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Donnez une âme visuelle à votre marque</h2>
          <p className="text-gray-500 mb-8">Travaillons ensemble pour créer une identité qui vous ressemble et qui séduit.</p>
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

export default DesignService
