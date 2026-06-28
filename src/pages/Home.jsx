import { motion } from 'framer-motion'
import { FaDisplay, FaChartLine, FaHandshake, FaTrophy } from 'react-icons/fa6'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Footer from '../components/sections/Footer'

const videos = [
  {
    src: '/images/video1.mp4',
    Icon: FaChartLine,
    badge: 'Influence Tech',
    title: 'AfrikTech & la Tech Africaine',
    desc: "Notre rayonnement dans l'écosystème technologique africain.",
  },
  {
    src: '/images/video2.mp4',
    Icon: FaDisplay,
    badge: 'Notre Application',
    title: 'Solution Digitale AfrikTech',
    desc: "L'application conçue et développée entièrement par nos équipes.",
  },
]

const VideosSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-5 sm:px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12"
      >
        <span className="section-label">AfrikTech en action</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h2 className="section-title mb-0">Réalisations & Influence</h2>
          <p className="text-gray-secondary text-sm max-w-xs md:text-right">
            Notre impact concret dans l'écosystème tech africain.
          </p>
        </div>
        <div className="mt-5 h-px bg-gray-border" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((v, i) => {
          const { Icon } = v
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" style={{ width: '15px', height: '15px' }} />
                </div>
                <div>
                  <span className="font-sans font-semibold text-[10px] text-primary uppercase tracking-widest block mb-0.5">
                    {v.badge}
                  </span>
                  <h3 className="font-display font-bold text-dark text-sm leading-tight"
                      style={{ letterSpacing: '-0.01em' }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-secondary text-xs mt-0.5">{v.desc}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-border shadow-sm bg-dark">
                <video
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  className="w-full block"
                  style={{ maxHeight: '360px', objectFit: 'contain' }}
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

const PartnershipsSection = () => (
  <section className="py-24 bg-gray-bg">
    <div className="max-w-5xl mx-auto px-5 sm:px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12"
      >
        <span className="section-label">Partenariats & Collaborations</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h2 className="section-title mb-0">AfrikTech & Ses Partenaires</h2>
          <p className="text-gray-secondary text-sm max-w-xs md:text-right">
            Des contrats solides pour bâtir ensemble le digital africain.
          </p>
        </div>
        <div className="mt-5 h-px bg-gray-border" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            src: '/images/news.jpg',
            alt: 'AfrikTech dans les médias',
            ratio: '620/877',
            badge: 'Actualités',
            Icon: FaHandshake,
            iconLabel: 'Partenariats',
            title: 'AfrikTech dans les médias & l\'actualité tech',
            desc: 'Notre croissance s\'impose comme un acteur incontournable de l\'écosystème numérique camerounais.',
          },
          {
            src: '/images/contrat.jpg',
            alt: 'Signature de contrat AfrikTech & GTES',
            ratio: '1080/810',
            badge: 'Contrats',
            Icon: FaTrophy,
            iconLabel: 'Collaborations',
            title: 'Des contrats signés avec des entreprises de renom',
            desc: 'AfrikTech établit des partenariats stratégiques pour co-construire des solutions innovantes et durables.',
          },
        ].map((card, i) => {
          const { Icon } = card
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden bg-gray-bg" style={{ aspectRatio: card.ratio }}>
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase font-sans">
                  {card.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="text-primary" style={{ width: '14px', height: '14px', flexShrink: 0 }} />
                  <span className="font-sans text-[10px] font-semibold text-primary uppercase tracking-widest">
                    {card.iconLabel}
                  </span>
                </div>
                <h3 className="font-display font-bold text-dark text-base mb-2 leading-snug"
                    style={{ letterSpacing: '-0.01em' }}>
                  {card.title}
                </h3>
                <p className="text-gray-body text-sm leading-relaxed line-clamp-2">{card.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

const FlyersSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-5 sm:px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-12"
      >
        <span className="section-label">Communication & Visibilité</span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h2 className="section-title mb-0">Nos Supports Publicitaires</h2>
          <p className="text-gray-secondary text-sm max-w-xs md:text-right">
            Flyers et supports conçus en interne pour nos opportunités.
          </p>
        </div>
        <div className="mt-5 h-px bg-gray-border" />
      </motion.div>

      {/* Stages */}
      <p className="font-sans font-semibold text-xs text-gray-secondary uppercase tracking-widest mb-5">
        Stages & Opportunités
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          { src: '/images/flyer/stage.jpg',  alt: 'Flyer stage AfrikTech' },
          { src: '/images/flyer/stage1.jpg', alt: 'Flyer stage AfrikTech 2' },
        ].map((flyer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-gray-bg"
          >
            <img src={flyer.src} alt={flyer.alt} className="w-full object-contain" />
          </motion.div>
        ))}
      </div>

      {/* Roll-up */}
      <p className="font-sans font-semibold text-xs text-gray-secondary uppercase tracking-widest mb-5">
        Roll-up & Supports
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -4 }}
        className="group rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-gray-bg max-w-sm mx-auto"
      >
        <img src="/images/flyer/rollup.jpg" alt="Roll-up AfrikTech" className="w-full object-contain" />
      </motion.div>
    </div>
  </section>
)

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <VideosSection />
      <PartnershipsSection />
      <FlyersSection />
    </main>
    <Footer />
  </>
)

export default Home
