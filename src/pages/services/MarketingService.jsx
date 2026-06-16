import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  {
    icon: '📣',
    title: 'Gestion des Réseaux Sociaux',
    desc: 'Création de contenu, planification et animation de vos communautés sur Facebook, Instagram, LinkedIn et TikTok.',
  },
  {
    icon: '🎯',
    title: 'Publicité Ciblée (Ads)',
    desc: 'Campagnes Meta Ads et Google Ads optimisées pour maximiser votre ROI et atteindre précisément votre cible.',
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    desc: 'Newsletters, séquences d\'automation et campagnes d\'emailing personnalisées qui convertissent et fidélisent.',
  },
  {
    icon: '🔍',
    title: 'SEO & Référencement',
    desc: 'Audit technique, stratégie de contenu et link building pour gagner des positions durables sur Google.',
  },
  {
    icon: '📝',
    title: 'Content Marketing',
    desc: 'Stratégie éditoriale, articles de blog, infographies et vidéos qui attirent et éduquent votre audience.',
  },
  {
    icon: '📈',
    title: 'Analytics & Reporting',
    desc: 'Tableaux de bord clairs, KPIs suivis en temps réel et rapports mensuels pour piloter vos décisions.',
  },
]

const process = [
  { step: '01', title: 'Audit & Stratégie', desc: 'Analyse de votre présence digitale actuelle et définition d\'objectifs SMART.' },
  { step: '02', title: 'Plan d\'Action', desc: 'Calendrier éditorial, budget publicitaire et canaux prioritaires définis ensemble.' },
  { step: '03', title: 'Exécution', desc: 'Création, diffusion et optimisation en continu de toutes les actions.' },
  { step: '04', title: 'Mesure & Optimisation', desc: 'Reporting régulier et ajustements pour améliorer continuellement les résultats.' },
]

const MarketingService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/marketing.jpg')" }}
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
            Marketing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Digital
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Des stratégies digitales sur-mesure pour accroître votre visibilité,
            attirer de nouveaux clients et faire croître votre chiffre d'affaires.
          </motion.p>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'Services', to: '/#services' }, { label: 'Marketing Digital' }]} />

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
              Le Marketing Digital, c'est quoi ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Le marketing digital regroupe toutes les stratégies de promotion d'une entreprise sur les canaux numériques : réseaux sociaux, moteurs de recherche, email, publicité en ligne et création de contenu. C'est l'ensemble des leviers qui permettent d'attirer, de convaincre et de fidéliser des clients sur internet.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Contrairement au marketing traditionnel (affiches, TV, radio), le marketing digital a l'avantage d'être <span className="text-gray-800 font-semibold">mesurable en temps réel</span> : vous savez exactement combien de personnes ont vu votre pub, cliqué sur votre lien ou acheté votre produit grâce à votre campagne.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Chez AfrikTech SAS, nous construisons des stratégies digitales sur-mesure adaptées au marché africain et à vos objectifs business concrets. <span className="text-red-500 font-semibold">Chaque euro investi en marketing digital doit générer un retour — c'est notre engagement.</span>
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
              { icon: '📣', label: 'Réseaux sociaux' },
              { icon: '🎯', label: 'Publicité ciblée' },
              { icon: '✉️', label: 'Email marketing' },
              { icon: '🔍', label: 'SEO & Google' },
              { icon: '📝', label: 'Création contenu' },
              { icon: '📈', label: 'Analytics & ROI' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-200 hover:shadow-md hover:shadow-red-100/40 rounded-xl p-4 flex items-center gap-3 transition-all duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </motion.div>
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
            Votre croissance digitale, notre mission
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Le marketing digital n'est pas une dépense, c'est un investissement. Nous concevons
            des stratégies mesurables qui génèrent un retour sur investissement concret et durable.
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Notre Approche</h2>
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
          <h2 className="text-3xl font-black text-gray-900 mb-4">Boostez votre présence en ligne</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Rencontrons-nous et construisons ensemble votre stratégie de croissance digitale.</p>
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

export default MarketingService
