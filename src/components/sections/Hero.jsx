import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/heros/heros.jpg')" }}
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/60 to-black/75" />

      {/* Ligne décorative gauche */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-60" />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          Innovating to transform Africa through technology
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          L'Afrique Se
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-rose-400">
            Transforme
          </span>
          Par Le Digital
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AFRIKTECH SAS propulse votre entreprise dans l'ère numérique.
          Développement web & mobile, design graphique, marketing digital —
          <span className="text-red-300 font-semibold"> nous construisons votre succès digital.</span>
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="services"
            smooth={true}
            duration={600}
            offset={-70}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full cursor-pointer transition-all duration-300 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transform text-base tracking-wide"
          >
            Découvrir nos services
          </Link>
          <RouterLink
            to="/portfolio"
            className="border-2 border-white/30 hover:border-red-400 text-white hover:text-red-300 font-semibold px-8 py-4 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-sm hover:scale-105 transform text-base tracking-wide"
          >
            Voir nos réalisations
          </RouterLink>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: '50+', label: 'Projets réalisés' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: '5+', label: "Années d'expérience" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-red-400 font-display">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-6 h-10 border-2 border-gray-500/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-red-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero