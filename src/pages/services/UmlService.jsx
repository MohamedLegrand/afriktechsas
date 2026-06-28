import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  FaDiagramProject, FaDatabase, FaClipboard, FaMicrochip, FaFileLines, FaArrowsRotate,
  FaLayerGroup, FaEye, FaTableColumns, FaBook, FaArrowRight, FaArrowLeft,
} from 'react-icons/fa6'
import Navbar from '../../components/sections/Navbar'
import Hero from '../../components/sections/Hero'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'

const features = [
  { Icon: FaDiagramProject, title: 'Modélisation UML',       desc: "Diagrammes de classes, séquences, cas d'utilisation et d'activités pour structurer et documenter votre système." },
  { Icon: FaDatabase,  title: 'Modélisation MERISE',    desc: 'MCD, MLD et MPD pour concevoir des bases de données relationnelles robustes, normalisées et évolutives.' },
  { Icon: FaClipboard, title: 'Analyse des Besoins',    desc: "Recueil et formalisation des exigences fonctionnelles et techniques via ateliers et entretiens structurés." },
  { Icon: FaMicrochip,       title: 'Architecture Logicielle', desc: "Conception de l'architecture applicative (MVC, microservices, API REST) adaptée à vos contraintes et objectifs." },
  { Icon: FaFileLines,  title: 'Dossier de Conception',  desc: 'Production de cahiers des charges, spécifications fonctionnelles et dossiers techniques complets et clairs.' },
  { Icon: FaArrowsRotate, title: 'Reverse Engineering',    desc: "Analyse et documentation de systèmes existants pour en extraire les modèles et préparer leur évolution." },
]

const umlTypes = [
  { Icon: FaLayerGroup,    label: 'Diagrammes UML' },
  { Icon: FaLayerGroup,  label: 'MCD / MLD / MPD' },
  { Icon: FaEye,     label: 'Analyse besoins' },
  { Icon: FaTableColumns,  label: 'Architecture SI' },
  { Icon: FaBook,    label: 'Cahier des charges' },
  { Icon: FaArrowsRotate, label: 'Reverse Engineering' },
]

const process = [
  { step: '01', title: 'Recueil',       desc: 'Entretiens avec les parties prenantes et inventaire des processus métier existants.' },
  { step: '02', title: 'Modélisation',  desc: 'Production des diagrammes UML et/ou modèles MERISE validés avec votre équipe.' },
  { step: '03', title: 'Validation',    desc: "Sessions de relecture pour s'assurer que les modèles reflètent fidèlement vos besoins." },
  { step: '04', title: 'Documentation', desc: 'Livraison du dossier de conception complet, prêt pour les équipes de développement.' },
]

const UmlService = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Nos Services"
        badgeText="Analyse & Modélisation des systèmes"
        title="Analyse"
        titleGradient="UML & MERISE"
        subtitle="Une conception rigoureuse de vos systèmes d'information pour des projets solides, bien documentés et facilement évolutifs dès les premières étapes."
        image="/images/services/analyse.jpg"
        ctaPrimary={{ label: 'Démarrer un projet', to: '/contact' }}
        ctaSecondary={{ label: 'Voir nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '50+', label: 'Systèmes modélisés' },
          { value: '5', label: 'Types de diagrammes' },
          { value: '100%', label: 'Dossiers livrés' },
        ]}
        showMockup={false}
      />

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'Services', to: '/#services' },
          { label: 'Analyse UML & MERISE' },
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
              L'Analyse UML & MERISE, c'est quoi ?
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Avant d'écrire une seule ligne de code, tout projet informatique sérieux commence
                par une phase d'analyse.{' '}
                <span className="text-gray-800 font-semibold">UML</span> et{' '}
                <span className="text-gray-800 font-semibold">MERISE</span> sont les deux méthodes
                de référence pour concevoir et documenter un système d'information.
              </p>
              <p>
                UML représente visuellement l'architecture d'un logiciel. MERISE est spécialisée
                dans la conception de bases de données relationnelles — de la conceptualisation
                jusqu'au modèle physique implémentable.
              </p>
              <p>
                Sans cette phase d'analyse, un projet risque de partir dans la mauvaise direction.{' '}
                <span className="text-red-600 font-semibold">
                  Nous vous évitons ces pièges en construisant des bases solides dès le départ.
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
            {umlTypes.map((item, i) => {
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
            Construire sur des bases solides
          </h2>
          <p className="text-gray-500 text-base max-w-2xl">
            Un projet mal conçu coûte cher à corriger. Nos analyses UML et MERISE vous donnent
            une vision claire de votre système avant d'écrire la première ligne de code.
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Notre Méthodologie</h2>
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Commençons l'analyse de votre projet</h2>
          <p className="text-gray-500 mb-8">Partagez-nous votre besoin et nous vous proposerons une modélisation adaptée.</p>
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

export default UmlService
