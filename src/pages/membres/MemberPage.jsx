import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaCommentDots } from 'react-icons/fa6'
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
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-center py-24 px-6">
          <div>
            <p className="text-5xl font-black text-gray-100 mb-4 select-none">404</p>
            <h1 className="text-2xl font-black text-gray-900 mb-3">Membre introuvable</h1>
            <p className="text-gray-500 mb-8">Ce profil n'existe pas ou a été déplacé.</p>
            <button
              onClick={() => navigate('/apropos')}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <FaArrowLeft className="w-4 h-4" />
              Retour à l'équipe
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — dark header with photo */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-red-950/25 to-gray-900 pt-28 pb-0">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 pb-0">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-68 rounded-xl overflow-hidden border border-red-500/20 shadow-2xl shadow-black/40"
                style={{ height: 'min(272px, 35vw)' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Text */}
            <div className="text-center md:text-left pb-10">
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/25 text-red-300 text-[11px] font-semibold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Membre Fondateur
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight"
              >
                {member.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="text-red-400 font-semibold text-base mb-3"
              >
                {member.role}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
                className="text-gray-400 text-sm italic max-w-xl"
              >
                "{member.tagline}"
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: 'Accueil', to: '/' },
          { label: 'À propos', to: '/apropos' },
          { label: member.name },
        ]}
      />

      {/* Bio */}
      <section className="py-12 md:py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-eyebrow mb-2">Profil</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            À propos de {member.name.split(' ').pop()}
          </h2>
          <div className="space-y-5">
            {member.bio.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="section-eyebrow mb-2">Expertise</p>
            <h2 className="text-2xl font-black text-gray-900">Stack Technologique</h2>
            <div className="mt-3 h-px bg-gray-200 max-w-xs" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {member.skills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <h3 className="font-bold text-gray-700 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-gray-50 text-gray-700 border border-gray-200 text-xs font-medium px-3 py-1 rounded-full"
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

      {/* CTA */}
      <section className="py-16 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-black text-gray-900 mb-2">Découvrez le reste de l'équipe</h2>
          <p className="text-gray-500 mb-8 text-sm">
            7 experts, 1 vision commune. Rencontrez tous les fondateurs d'AfrikTech SAS.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/apropos')}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Voir toute l'équipe
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <FaCommentDots className="w-4 h-4" />
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
