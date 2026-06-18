import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FiZap, FiSmartphone, FiShield, FiSearch, FiCode, FiRefreshCw,
  FiGlobe, FiShoppingCart, FiSettings, FiServer, FiBarChart2, FiPackage,
  FiArrowRight, FiArrowLeft,
} from 'react-icons/fi'
import Navbar from '../../components/sections/Navbar'
import Hero from '../../components/sections/Hero'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  { Icon: FiZap,        title: 'Performance & Rapidité',  desc: 'Sites optimisés avec lazy loading, code splitting et CDN pour des temps de chargement inférieurs à 2 secondes.' },
  { Icon: FiSmartphone, title: 'Responsive Design',       desc: 'Interfaces adaptées à tous les écrans — mobile, tablette et desktop — avec une expérience fluide sur chaque appareil.' },
  { Icon: FiShield,     title: 'Sécurité Renforcée',      desc: 'HTTPS, protection contre les injections SQL, XSS et authentification sécurisée intégrés dès la conception.' },
  { Icon: FiSearch,     title: 'SEO Optimisé',            desc: 'Architecture technique pensée pour le référencement : balises méta, sitemap, données structurées et Core Web Vitals.' },
  { Icon: FiCode,       title: 'Stack Moderne',           desc: 'React, Next.js, Node.js, Laravel — nous choisissons les technologies les plus adaptées à votre projet.' },
  { Icon: FiRefreshCw,  title: 'Maintenance & Évolution', desc: 'Accompagnement continu après livraison : mises à jour, nouvelles fonctionnalités et support technique réactif.' },
]

const webTypes = [
  { Icon: FiGlobe,        label: 'Sites vitrines' },
  { Icon: FiShoppingCart, label: 'E-commerce' },
  { Icon: FiSettings,     label: 'Applications métier' },
  { Icon: FiServer,       label: 'APIs & Backends' },
  { Icon: FiBarChart2,    label: 'Dashboards Admin' },
  { Icon: FiPackage,      label: 'SaaS & Startups' },
]

const process = [
  { step: '01', title: 'Analyse des besoins', desc: 'Cahier des charges, architecture technique et maquettes validées ensemble.' },
  { step: '02', title: 'Design UI/UX',        desc: 'Prototypes interactifs sous Figma avant tout développement.' },
  { step: '03', title: 'Développement',       desc: 'Code propre, testé, versionné sur Git avec revues de code régulières.' },
  { step: '04', title: 'Tests & Livraison',   desc: 'Tests fonctionnels, recette client et déploiement en production.' },
]

const webTechs = [
  { name: 'ReactJS',       image: '/images/tech/reactjs.jpg',  desc: 'Bibliothèque JavaScript pour des interfaces dynamiques et performantes.' },
  { name: 'HTML / CSS / JS', image: '/images/tech/html.jpg',   desc: 'Les fondations du web : structure, style et interactivité.' },
  { name: 'Django',        image: '/images/tech/django.jpg',   desc: 'Framework Python robuste pour des APIs et backends sécurisés.' },
  { name: 'FastAPI',       image: '/images/tech/fastapi.jpg',  desc: 'Framework Python ultra-rapide pour des APIs modernes et performantes.' },
]

const WebService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Nos Services"
        badgeText="Développement Web professionnel"
        title="Développement"
        titleGradient="Web"
        subtitle="Des sites et applications web sur mesure, performants et évolutifs, conçus pour convertir vos visiteurs en clients durables."
        image="/images/services/web.jpg"
        ctaPrimary={{ label: 'Démarrer un projet', to: '/contact' }}
        ctaSecondary={{ label: 'Voir nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '50+', label: 'Sites livrés' },
          { value: '5+', label: 'Frameworks maîtrisés' },
          { value: '100%', label: 'Satisfaction client' },
        ]}
        showMockup={false}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/#services' },
          { label: 'Développement Web' },
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
              Le Développement Web, c'est quoi exactement ?
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Le développement web consiste à concevoir et construire des sites internet et des
                applications accessibles depuis un navigateur. C'est l'ensemble des technologies
                qui font fonctionner tout ce que vous voyez et utilisez en ligne.
              </p>
              <p>
                Un projet web se divise en deux grandes parties : le{' '}
                <span className="text-gray-800 font-semibold">frontend</span> (ce que l'utilisateur
                voit) et le <span className="text-gray-800 font-semibold">backend</span> (le moteur
                invisible qui gère les données et la sécurité). Chez AfrikTech SAS, nous maîtrisons
                les deux.
              </p>
              <p>
                Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce ou d'une
                application web métier —{' '}
                <span className="text-red-600 font-semibold">
                  nous livrons des solutions qui fonctionnent, qui se démarquent et qui évoluent
                  avec votre activité.
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
            {webTypes.map((item, i) => {
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

      {/* Technologies */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="section-eyebrow mb-2">Notre stack</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Technologies que nous utilisons</h2>
            <div className="mt-3 h-px bg-gray-200 max-w-xs" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {webTechs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 text-center border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="h-12 flex items-center justify-center mb-4">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{tech.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
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
            Pourquoi choisir notre expertise web ?
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Nous combinons design soigné, code robuste et stratégie digitale pour créer des
            expériences qui engagent et convertissent.
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
                className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-xl p-6 transition-all duration-200 group"
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Prêt à lancer votre projet web ?</h2>
          <p className="text-gray-500 mb-8">Parlons de votre idée et transformons-la en une réalité digitale.</p>
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

export default WebService
