import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  {
    icon: '📐',
    title: 'Modélisation UML',
    desc: 'Diagrammes de classes, séquences, cas d\'utilisation et d\'activités pour structurer et documenter votre système.',
  },
  {
    icon: '🗄️',
    title: 'Modélisation MERISE',
    desc: 'MCD, MLD et MPD pour concevoir des bases de données relationnelles robustes, normalisées et évolutives.',
  },
  {
    icon: '🔎',
    title: 'Analyse des Besoins',
    desc: 'Recueil et formalisation des exigences fonctionnelles et techniques via ateliers et entretiens structurés.',
  },
  {
    icon: '🏗️',
    title: 'Architecture Logicielle',
    desc: 'Conception de l\'architecture applicative (MVC, microservices, API REST) adaptée à vos contraintes et objectifs.',
  },
  {
    icon: '📋',
    title: 'Dossier de Conception',
    desc: 'Production de cahiers des charges, spécifications fonctionnelles et dossiers techniques complets et clairs.',
  },
  {
    icon: '🔄',
    title: 'Reverse Engineering',
    desc: 'Analyse et documentation de systèmes existants pour en extraire les modèles et préparer leur évolution.',
  },
]

const process = [
  { step: '01', title: 'Recueil', desc: 'Entretiens avec les parties prenantes et inventaire des processus métier existants.' },
  { step: '02', title: 'Modélisation', desc: 'Production des diagrammes UML et/ou modèles MERISE validés avec votre équipe.' },
  { step: '03', title: 'Validation', desc: 'Sessions de relecture pour s\'assurer que les modèles reflètent fidèlement vos besoins.' },
  { step: '04', title: 'Documentation', desc: 'Livraison du dossier de conception complet, prêt pour les équipes de développement.' },
]

const UmlService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services/analyse.jpg')" }}
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
            Analyse UML
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              & MERISE
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Une conception rigoureuse de vos systèmes d'information pour des projets
            solides, bien documentés et facilement évolutifs.
          </motion.p>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'Services', to: '/#services' }, { label: 'Analyse UML & MERISE' }]} />

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
              L'Analyse UML & MERISE, c'est quoi ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Avant d'écrire une seule ligne de code, tout projet informatique sérieux commence par une phase d'analyse et de modélisation. <span className="text-gray-800 font-semibold">UML</span> (Unified Modeling Language) et <span className="text-gray-800 font-semibold">MERISE</span> sont les deux méthodes de référence pour concevoir et documenter un système d'information.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              UML permet de représenter visuellement l'architecture d'un logiciel : qui fait quoi, comment les données circulent, comment les composants s'articulent. MERISE quant à elle est spécialisée dans la conception de bases de données relationnelles — de la conceptualisation jusqu'au modèle physique implémentable.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Sans cette phase d'analyse, un projet risque de partir dans la mauvaise direction, coûtant du temps et de l'argent pour corriger des erreurs de conception fondamentales. <span className="text-red-500 font-semibold">Nous vous évitons ces pièges en construisant des bases solides dès le départ.</span>
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
              { icon: '📐', label: 'Diagrammes UML' },
              { icon: '🗄️', label: 'MCD / MLD / MPD' },
              { icon: '🔎', label: 'Analyse besoins' },
              { icon: '🏗️', label: 'Architecture SI' },
              { icon: '📋', label: 'Cahier des charges' },
              { icon: '🔄', label: 'Reverse Engineering' },
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
            Construire sur des bases solides
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Un projet mal conçu coûte cher à corriger. Nos analyses UML et MERISE vous donnent
            une vision claire et précise de votre système avant d'écrire la première ligne de code.
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">Notre Méthodologie</h2>
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
          <h2 className="text-3xl font-black text-gray-900 mb-4">Commençons l'analyse de votre projet</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Partagez-nous votre besoin et nous vous proposerons une modélisation adaptée.</p>
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

export default UmlService
