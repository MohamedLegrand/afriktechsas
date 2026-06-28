import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaClock,
  FaStar,
  FaGlobe,
  FaLayerGroup,
  FaCircleCheck,
} from 'react-icons/fa6'

const STAT_ICONS = [FaChartLine, FaUsers, FaTrophy, FaClock, FaStar]

const isRoute = (to) => typeof to === 'string' && to.startsWith('/')

const CTALink = ({ label, to, variant }) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer select-none transition-all duration-300'

  const style =
    variant === 'primary'
      ? {
          background: '#DC2626',
          color: '#fff',
          borderRadius: '50px',
          padding: '14px 28px',
          border: 'none',
        }
      : {
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '50px',
          padding: '14px 28px',
        }

  const children = (
    <>
      <span>{label}</span>
      {variant === 'primary' && (
        <FaArrowRight style={{ width: '15px', height: '15px', flexShrink: 0 }} />
      )}
    </>
  )

  if (isRoute(to)) {
    return (
      <RouterLink to={to} className={base} style={style}>
        {children}
      </RouterLink>
    )
  }

  return (
    <ScrollLink to={to} smooth duration={500} offset={-80} className={base} style={style}>
      {children}
    </ScrollLink>
  )
}

const Hero = ({
  badge = 'Yaoundé, Cameroun',
  badgeText = 'Innovating to transform Africa through technology',
  title = "L'Afrique Se Transforme",
  titleGradient = 'Par Le Digital',
  subtitle = "AFRIKTECH SAS propulse votre entreprise dans l'ère numérique — développement web & mobile, design et marketing digital.",
  image = '/images/heros/heros.jpg',
  ctaPrimary = { label: 'Découvrir nos services', to: 'services' },
  ctaSecondary = { label: 'Voir nos réalisations', to: '/portfolio' },
  stats = [
    { value: '50+', label: 'Projets réalisés' },
    { value: '30+', label: 'Clients satisfaits' },
    { value: '5+', label: "Années d'expérience" },
  ],
  showMockup = true,
}) => {
  return (
    <section
      id="accueil"
      className={`relative flex items-center overflow-hidden ${showMockup ? 'min-h-screen' : 'min-h-[72vh]'}`}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: showMockup
            ? 'linear-gradient(to right, rgba(0,0,0,0.94) 0%, rgba(10,0,0,0.88) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.20) 100%)'
            : 'rgba(0,0,0,0.76)',
        }}
      />

      {/* Fade bottom — inner pages */}
      {!showMockup && (
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      )}

      {/* Red glow — deco */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-60px', right: '-60px',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-28 sm:py-32">
        <div className={`grid items-center gap-14 ${showMockup ? 'lg:grid-cols-2' : ''}`}>

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`flex flex-col ${!showMockup ? 'items-center text-center' : ''}`}
          >
            {/* Badges */}
            <div className={`flex flex-wrap items-center gap-2 mb-7 ${!showMockup ? 'justify-center' : ''}`}>
              <span style={{
                background: '#DC2626',
                color: '#fff',
                fontSize: '10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                borderRadius: '4px',
                flexShrink: 0,
              }}>
                {badge}
              </span>
              <span style={{
                background: 'rgba(220,38,38,0.12)',
                border: '1px solid rgba(220,38,38,0.25)',
                color: 'rgba(252,165,165,0.90)',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                padding: '4px 12px',
                borderRadius: '4px',
              }}>
                {badgeText}
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 4.5vw, 3.75rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '1.25rem',
            }}>
              {title}
              <span className="block" style={{
                background: 'linear-gradient(135deg, #ef4444, #f87171)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {titleGradient}
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: '#D1D5DB',
              lineHeight: 1.75,
              maxWidth: '440px',
              marginBottom: '2.5rem',
            }}>
              {subtitle}
            </p>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-3 mb-10 ${!showMockup ? 'items-center' : ''}`}>
              <CTALink label={ctaPrimary.label} to={ctaPrimary.to} variant="primary" />
              <CTALink label={ctaSecondary.label} to={ctaSecondary.to} variant="secondary" />
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-7 ${!showMockup ? 'justify-center' : ''}`}
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {stats.map((stat, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.05, ease: 'easeOut' }}
                    className="flex items-start gap-2"
                  >
                    <Icon aria-hidden="true" style={{ marginTop: '5px', width: '13px', height: '13px', color: '#f87171', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff', lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#9CA3AF', marginTop: '3px', lineHeight: 1.3 }}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT — Floating card (home only) */}
          {showMockup && (
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex items-center justify-center relative"
              style={{ minHeight: '420px' }}
            >
              {/* Top badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8, ease: 'easeOut' }}
                className="absolute z-20 flex items-center gap-2"
                style={{
                  top: '16px', left: '-12px',
                  padding: '9px 14px',
                  borderRadius: '10px',
                  background: '#DC2626',
                  boxShadow: '0 6px 20px rgba(220,38,38,0.30)',
                }}
              >
                <FaGlobe style={{ width: '13px', height: '13px', color: '#fff', flexShrink: 0 }} />
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>
                  Made in Africa
                </span>
              </motion.div>

              {/* Main card */}
              <div
                className="animate-hero-float relative"
                style={{
                  width: '320px',
                  marginTop: '48px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '18px',
                  boxShadow: '0 20px 56px rgba(220,38,38,0.12), 0 8px 28px rgba(0,0,0,0.38)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '24px',
                }}
              >
                {/* Card header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: '#DC2626',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaLayerGroup style={{ width: '18px', height: '18px', color: '#fff' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '14px', color: '#fff', lineHeight: 1.2 }}>
                      Nos Services
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.38)', marginTop: '2px', fontFamily: 'Inter, sans-serif' }}>
                      Solutions digitales complètes
                    </div>
                  </div>
                </div>

                {/* Service lines */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                  {[
                    { label: 'Développement Web',  badge: 'Expert',      color: '#3b82f6' },
                    { label: 'Design Graphique',    badge: 'Créatif',     color: '#8b5cf6' },
                    { label: 'Marketing Digital',   badge: 'Stratégique', color: '#f59e0b' },
                    { label: 'Analyse UML',         badge: 'Précis',      color: '#10b981' },
                  ].map((svc, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter, sans-serif' }}>
                        {svc.label}
                      </span>
                      <span style={{
                        fontSize: '10px', fontWeight: 600,
                        padding: '2px 9px', borderRadius: '999px',
                        background: `${svc.color}20`, color: svc.color,
                        border: `1px solid ${svc.color}38`,
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '0.03em',
                      }}>
                        {svc.badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '0 0 12px' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '7px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.30)', fontFamily: 'Inter, sans-serif' }}>
                    Satisfaction client
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#f87171', fontFamily: 'Inter, sans-serif' }}>100%</span>
                </div>
                <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.07)' }}>
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.0, delay: 1.0, ease: 'easeOut' }}
                    style={{ height: '100%', borderRadius: '2px', background: '#DC2626' }}
                  />
                </div>
              </div>

              {/* Bottom badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0, ease: 'easeOut' }}
                className="absolute z-20"
                style={{
                  bottom: '4px', right: '-12px',
                  padding: '11px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.26)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '3px' }}>
                  <FaCircleCheck style={{ width: '12px', height: '12px', color: '#4ade80', flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>
                    Projet livré
                  </span>
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.36)', fontFamily: 'Inter, sans-serif' }}>
                  Dans les délais · Qualité garantie
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
        aria-hidden="true"
      >
        <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>
          Défiler
        </span>
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(220,38,38,0.70), transparent)' }} />
        <div className="animate-pulse rounded-full" style={{ width: '5px', height: '5px', background: '#DC2626' }} />
      </motion.div>
    </section>
  )
}

export default Hero
