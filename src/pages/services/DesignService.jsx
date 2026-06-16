import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  {
    icon: '🏷️',
    title: 'Identité de Marque',
    desc: 'Logo, charte graphique, palette de couleurs et typographies qui donnent une personnalité forte et cohérente à votre marque.',
  },
  {
    icon: '🖼️',
    title: 'Supports Imprimés',
    desc: 'Cartes de visite, flyers, affiches, brochures et kakémonos conçus pour marquer les esprits et renforcer votre présence.',
  },
  {
    icon: '📲',
    title: 'Visuels pour Réseaux Sociaux',
    desc: 'Contenus graphiques optimisés pour chaque plateforme : Instagram, Facebook, LinkedIn et TikTok.',
  },
  {
    icon: '🎬',
    title: 'Motion Design',
    desc: 'Animations et vidéos courtes qui captivent votre audience et communiquent vos messages avec impact.',
  },
  {
    icon: '🖥️',
    title: 'UI Design',
    desc: 'Interfaces utilisateur pour vos applications web et mobiles, ergonomiques et esthétiquement irréprochables.',
  },
  {
    icon: '📦',
    title: 'Packaging & Signalétique',
    desc: 'Design de packaging produit et signalétique en magasin qui valorisent votre offre et renforcent votre image.',
  },
]

const process = [
  { step: '01', title: 'Brief Créatif', desc: 'Analyse de votre secteur, concurrents et cible pour définir le positionnement visuel.' },
  { step: '02', title: 'Concepts', desc: '3 propositions créatives distinctes avec moodboard et justifications.' },
  { step: '03', title: 'Affinement', desc: 'Itérations basées sur vos retours jusqu\'à la version finale validée.' },
  { step: '04', title: 'Livraison', desc: 'Fichiers en tous formats (AI, EPS, PNG, PDF) et guide d\'utilisation.' },
]

const DesignService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/design.jpg')" }}
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
            Design
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Graphique
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Une identité visuelle forte et cohérente qui distingue votre marque,
            inspire confiance et reste gravée dans les mémoires.
          </motion.p>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'Services', to: '/#services' }, { label: 'Design Graphique' }]} />

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
              Le Design Graphique, c'est quoi ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Le design graphique est l'art de communiquer visuellement. C'est la discipline qui transforme une idée, un message ou une marque en images, couleurs, typographies et formes qui parlent instantanément à votre audience — avant même qu'elle lise un seul mot.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Une bonne identité visuelle, c'est ce qui distingue une entreprise professionnelle d'une entreprise amateur. Le logo, les couleurs, les polices et les supports de communication doivent former un tout cohérent qui inspire <span className="text-gray-800 font-semibold">confiance, crédibilité et mémorabilité</span>.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Chez AfrikTech SAS, notre designer Salomon crée des identités visuelles authentiques qui reflètent l'essence de votre marque et séduisent votre cible. <span className="text-red-500 font-semibold">Votre image, c'est votre premier commercial — nous la rendons inoubliable.</span>
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
              { icon: '🏷️', label: 'Logo & Branding' },
              { icon: '📄', label: 'Flyers & Affiches' },
              { icon: '📲', label: 'Visuels Réseaux' },
              { icon: '🎬', label: 'Motion Design' },
              { icon: '🖥️', label: 'UI Design' },
              { icon: '📦', label: 'Packaging' },
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
            Le design, votre premier commercial
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Un bon design ne fait pas que plaire — il communique, convainc et convertit.
            Nous créons des visuels qui racontent votre histoire et attirent votre clientèle cible.
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Notre Processus Créatif</h2>
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
          <h2 className="text-3xl font-black text-gray-900 mb-4">Donnez une âme visuelle à votre marque</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Travaillons ensemble pour créer une identité qui vous ressemble et qui séduit.</p>
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

export default DesignService
