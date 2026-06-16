import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../../components/sections/Navbar'
import Footer from '../../components/sections/Footer'
import Breadcrumb from '../../components/ui/Breadcrumb'
import { members } from '../../data/membersData'

const MemberPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const member = members.find((m) => m.slug === slug)

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Navbar />
        <div className="text-center py-40 px-6">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-3xl font-black text-gray-900 mb-4">Membre introuvable</h1>
          <p className="text-gray-500 mb-8">Ce profil n'existe pas ou a été déplacé.</p>
          <button
            onClick={() => navigate('/apropos')}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-red-200/60"
          >
            ← Retour à l'équipe
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-red-950/30 to-gray-900 pt-28 pb-0">
        {/* Déco lumière gauche */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-40" />
        {/* Halo rouge bas */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-red-500/20 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-10 pb-0">

            {/* Photo contenue */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <div className="w-44 h-56 sm:w-52 sm:h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl shadow-red-500/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Texte */}
            <div className="text-center md:text-left pb-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-widest uppercase backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                Membre Fondateur
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3"
              >
                {member.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-red-400 font-semibold text-lg mb-4"
              >
                {member.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-gray-300 text-base italic max-w-2xl"
              >
                "{member.tagline}"
              </motion.p>
            </div>
          </div>
        </div>

        {/* Dégradé bas → blanc */}
        <div className="h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <Breadcrumb items={[{ label: 'Accueil', to: '/' }, { label: 'À propos', to: '/apropos' }, { label: member.name }]} />

      {/* Bio */}
      <section className="py-10 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Profil</span>
          <h2 className="text-3xl font-black text-gray-900 mt-2 mb-8">À propos de {member.name.split(' ').pop()}</h2>
          <div className="space-y-5">
            {member.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Expertise</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Stack Technologique</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {member.skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-100/40 transition-all duration-300"
              >
                <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500 to-rose-400" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres membres */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-black text-gray-900 mb-4">Découvrez le reste de l'équipe</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            7 experts, 1 vision commune. Rencontrez tous les fondateurs d'AfrikTech SAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/apropos')}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-red-200/60 hover:scale-105 transform"
            >
              ← Voir toute l'équipe
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-gray-300 hover:border-red-400 text-gray-600 hover:text-red-500 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default MemberPage
