import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  {
    icon: '⚡',
    title: 'Performance & Rapidité',
    desc: 'Sites optimisés avec lazy loading, code splitting et CDN pour des temps de chargement inférieurs à 2 secondes.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Interfaces adaptées à tous les écrans — mobile, tablette et desktop — avec une expérience fluide sur chaque appareil.',
  },
  {
    icon: '🔒',
    title: 'Sécurité Renforcée',
    desc: 'HTTPS, protection contre les injections SQL, XSS et authentification sécurisée intégrés dès la conception.',
  },
  {
    icon: '🔍',
    title: 'SEO Optimisé',
    desc: 'Architecture technique pensée pour le référencement : balises méta, sitemap, données structurées et Core Web Vitals.',
  },
  {
    icon: '🛠️',
    title: 'Stack Moderne',
    desc: 'React, Next.js, Node.js, Laravel — nous choisissons les technologies les plus adaptées à votre projet.',
  },
  {
    icon: '🔄',
    title: 'Maintenance & Évolution',
    desc: 'Accompagnement continu après livraison : mises à jour, nouvelles fonctionnalités et support technique réactif.',
  },
]

const process = [
  { step: '01', title: 'Analyse des besoins', desc: 'Cahier des charges, architecture technique et maquettes validées ensemble.' },
  { step: '02', title: 'Design UI/UX', desc: 'Prototypes interactifs sous Figma avant tout développement.' },
  { step: '03', title: 'Développement', desc: 'Code propre, testé, versionné sur Git avec revues de code régulières.' },
  { step: '04', title: 'Tests & Livraison', desc: 'Tests fonctionnels, recette client et déploiement en production.' },
]

const webTechs = [
  {
    name: 'ReactJS',
    image: '/images/tech/reactjs.jpg',
    desc: 'Bibliothèque JavaScript pour des interfaces dynamiques et performantes.',
  },
  {
    name: 'HTML / CSS / JS',
    image: '/images/tech/html.jpg',
    desc: 'Les fondations du web : structure, style et interactivité.',
  },
  {
    name: 'Django',
    image: '/images/tech/django.jpg',
    desc: 'Framework Python robuste pour des APIs et backends sécurisés.',
  },
  {
    name: 'FastAPI',
    image: '/images/tech/fastapi.jpg',
    desc: 'Framework Python ultra-rapide pour des APIs modernes et performantes.',
  },
]

const WebService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/web.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/60 to-black/80" />
        {/* Ombres décoratives */}
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
              Web
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Des sites et applications web sur mesure, performants et évolutifs,
            conçus pour convertir vos visiteurs en clients.
          </motion.p>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'Services', to: '/#services' }, { label: 'Développement Web' }]} />

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
              Le Développement Web, c'est quoi exactement ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Le développement web consiste à concevoir et construire des sites internet et des applications accessibles depuis un navigateur (Chrome, Firefox, Safari…). C'est l'ensemble des technologies qui font fonctionner tout ce que vous voyez et utilisez en ligne — des boutiques e-commerce aux plateformes de gestion d'entreprise.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Un projet web se divise en deux grandes parties : le <span className="text-gray-800 font-semibold">frontend</span> (ce que l'utilisateur voit et avec lequel il interagit) et le <span className="text-gray-800 font-semibold">backend</span> (le moteur invisible qui gère les données, la logique métier et la sécurité). Chez AfrikTech SAS, nous maîtrisons les deux.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Que vous ayez besoin d'un site vitrine, d'une plateforme e-commerce, d'un portail client ou d'une application web métier sur mesure — <span className="text-red-500 font-semibold">nous livrons des solutions qui fonctionnent, qui se démarquent et qui évoluent avec votre activité.</span>
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
              { icon: '🌐', label: 'Sites vitrines' },
              { icon: '🛒', label: 'E-commerce' },
              { icon: '⚙️', label: 'Applications métier' },
              { icon: '🔌', label: 'APIs & Backends' },
              { icon: '📊', label: 'Dashboards Admin' },
              { icon: '🚀', label: 'SaaS & Startups' },
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
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Notre stack</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">Technologies que nous utilisons</h2>
            <div className="w-14 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {webTechs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50 transition-all duration-400 group hover:-translate-y-1"
              >
                <div className="h-14 sm:h-16 flex items-center justify-center mb-4">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-red-600 transition-colors duration-300">{tech.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
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
            Pourquoi choisir notre expertise web ?
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Chaque projet web est unique. Nous combinons design soigné, code robuste et
            stratégie digitale pour créer des expériences qui engagent et convertissent.
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
          <h2 className="text-3xl font-black text-gray-900 mb-4">Prêt à lancer votre projet web ?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Parlons de votre idée et transformons-la en une réalité digitale.</p>
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

export default WebService
