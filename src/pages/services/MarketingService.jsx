import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FaComments, FaBullseye, FaEnvelope, FaMagnifyingGlass, FaPenToSquare, FaChartBar,
  FaTowerBroadcast, FaCrosshairs, FaAt, FaSliders, FaFileLines, FaChartLine,
  FaArrowRight, FaArrowLeft,
} from 'react-icons/fa6'
import Navbar from '../../components/sections/Navbar'
import Hero from '../../components/sections/Hero'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  { Icon: FaComments, title: 'Gestion des Réseaux Sociaux', desc: "Création de contenu, planification et animation de vos communautés sur Facebook, Instagram, LinkedIn et TikTok." },
  { Icon: FaBullseye,        title: 'Publicité Ciblée (Ads)',      desc: "Campagnes Meta Ads et Google Ads optimisées pour maximiser votre ROI et atteindre précisément votre cible." },
  { Icon: FaEnvelope,          title: 'Email Marketing',             desc: "Newsletters, séquences d'automation et campagnes d'emailing personnalisées qui convertissent et fidélisent." },
  { Icon: FaMagnifyingGlass,        title: 'SEO & Référencement',         desc: "Audit technique, stratégie de contenu et link building pour gagner des positions durables sur Google." },
  { Icon: FaPenToSquare,         title: 'Content Marketing',          desc: "Stratégie éditoriale, articles de blog, infographies et vidéos qui attirent et éduquent votre audience." },
  { Icon: FaChartBar,     title: 'Analytics & Reporting',      desc: "Tableaux de bord clairs, KPIs suivis en temps réel et rapports mensuels pour piloter vos décisions." },
]

const marketingTypes = [
  { Icon: FaTowerBroadcast,       label: 'Réseaux sociaux' },
  { Icon: FaCrosshairs,   label: 'Publicité ciblée' },
  { Icon: FaAt,      label: 'Email marketing' },
  { Icon: FaMagnifyingGlass,      label: 'SEO & Google' },
  { Icon: FaFileLines,    label: 'Création contenu' },
  { Icon: FaChartLine,  label: 'Analytics & ROI' },
]

const process = [
  { step: '01', title: 'Audit & Stratégie',     desc: "Analyse de votre présence digitale actuelle et définition d'objectifs SMART." },
  { step: '02', title: "Plan d'Action",         desc: 'Calendrier éditorial, budget publicitaire et canaux prioritaires définis ensemble.' },
  { step: '03', title: 'Exécution',             desc: 'Création, diffusion et optimisation en continu de toutes les actions.' },
  { step: '04', title: 'Mesure & Optimisation', desc: 'Reporting régulier et ajustements pour améliorer continuellement les résultats.' },
]

const MarketingService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Nos Services"
        badgeText="Croissance digitale & Visibilité"
        title="Marketing"
        titleGradient="Digital"
        subtitle="Des stratégies digitales sur-mesure pour accroître votre visibilité, attirer de nouveaux clients et faire croître votre chiffre d'affaires."
        image="/images/services/marketing.jpg"
        ctaPrimary={{ label: 'Démarrer une campagne', to: '/contact' }}
        ctaSecondary={{ label: 'Voir nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '300%', label: 'ROI moyen généré' },
          { value: '30+', label: 'Campagnes gérées' },
          { value: '100%', label: 'Clients satisfaits' },
        ]}
        showMockup={false}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/#services' },
          { label: 'Marketing Digital' },
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
              Le Marketing Digital, c'est quoi ?
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Le marketing digital regroupe toutes les stratégies de promotion sur les canaux
                numériques : réseaux sociaux, moteurs de recherche, email, publicité en ligne
                et création de contenu.
              </p>
              <p>
                Contrairement au marketing traditionnel, le marketing digital a l'avantage d'être{' '}
                <span className="text-gray-800 font-semibold">mesurable en temps réel</span> :
                vous savez exactement combien de personnes ont vu votre publicité, cliqué et acheté.
              </p>
              <p>
                Chez AfrikTech SAS, nous construisons des stratégies adaptées au marché africain
                et à vos objectifs business.{' '}
                <span className="text-red-600 font-semibold">
                  Chaque franc investi doit générer un retour — c'est notre engagement.
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
            {marketingTypes.map((item, i) => {
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
            Votre croissance digitale, notre mission
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Le marketing digital n'est pas une dépense, c'est un investissement. Nous concevons
            des stratégies mesurables qui génèrent un retour sur investissement durable.
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Notre Approche</h2>
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
                    <FaArrowRight className="w-4 h-4" />
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Boostez votre présence en ligne</h2>
          <p className="text-gray-500 mb-8">Rencontrons-nous et construisons ensemble votre stratégie de croissance digitale.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Démarrer un projet
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Retour aux services
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default MarketingService
