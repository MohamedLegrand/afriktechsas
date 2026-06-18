import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import {
  FiArrowRight,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiClock,
  FiStar,
} from 'react-icons/fi'

const STAT_ICONS = [FiTrendingUp, FiUsers, FiAward, FiClock, FiStar]

const isRoute = (to) => typeof to === 'string' && to.startsWith('/')

const CTALink = ({ label, to, variant }) => {
  const base =
    'inline-flex items-center justify-center gap-2.5 font-semibold text-sm cursor-pointer select-none'

  const style =
    variant === 'primary'
      ? {
          background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
          color: '#fff',
          borderRadius: '50px',
          padding: '15px 30px',
          boxShadow: '0 4px 20px rgba(220,38,38,0.35)',
          border: 'none',
        }
      : {
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.22)',
          borderRadius: '50px',
          padding: '15px 30px',
        }

  const children = (
    <>
      <span>{label}</span>
      {variant === 'primary' && (
        <FiArrowRight style={{ width: '16px', height: '16px', flexShrink: 0 }} />
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
    <ScrollLink to={to} smooth duration={600} offset={-80} className={base} style={style}>
      {children}
    </ScrollLink>
  )
}

const Hero = ({
  badge = 'Yaoundé, Cameroun',
  badgeText = 'Innovating to transform Africa through technology',
  title = "L'Afrique Se Transforme",
  titleGradient = 'Par Le Digital',
  subtitle =
    "AFRIKTECH SAS propulse votre entreprise dans l'ère numérique. Développement web & mobile, design graphique, marketing digital — nous construisons votre succès digital.",
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
      className={`relative flex items-center overflow-hidden ${
        showMockup ? 'min-h-screen' : 'min-h-[78vh]'
      }`}
    >
      {/* ── Background image ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Directional overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: showMockup
            ? 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(20,0,0,0.90) 30%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.25) 100%)'
            : 'rgba(0,0,0,0.78)',
        }}
      />

      {/* ── Bottom fade-to-white (inner pages only) ── */}
      {!showMockup && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      )}

      {/* ── Deco: large red radial glow — top-right ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: '-80px',
          right: '-80px',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.10) 0%, transparent 68%)',
        }}
      />

      {/* ── Deco: floating circle — bottom-left ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none hero-deco-circle"
        style={{
          bottom: '64px',
          left: '48px',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(220,38,38,0.18)',
          background: 'rgba(220,38,38,0.04)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
        <div className={`grid items-center gap-16 ${showMockup ? 'lg:grid-cols-2' : ''}`}>

          {/* ─── LEFT: Text + CTA + Stats ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${!showMockup ? 'items-center text-center' : ''}`}
          >
            {/* Badge */}
            <div
              className={`flex flex-wrap items-center gap-2 mb-8 ${
                !showMockup ? 'justify-center' : ''
              }`}
            >
              <span
                style={{
                  background: '#dc2626',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  flexShrink: 0,
                }}
              >
                {badge}
              </span>
              <span
                style={{
                  background: 'rgba(220,38,38,0.15)',
                  border: '1px solid rgba(220,38,38,0.28)',
                  color: 'rgba(252,165,165,0.95)',
                  fontSize: '11px',
                  fontWeight: 500,
                  padding: '5px 12px',
                  borderRadius: '5px',
                }}
              >
                {badgeText}
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              {title}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #f87171, #dc2626)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {titleGradient}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '17px',
                color: '#d1d5db',
                lineHeight: 1.8,
                maxWidth: '480px',
                marginBottom: '2.5rem',
              }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 ${
                !showMockup ? 'items-center' : ''
              }`}
            >
              <CTALink label={ctaPrimary.label} to={ctaPrimary.to} variant="primary" />
              <CTALink label={ctaSecondary.label} to={ctaSecondary.to} variant="secondary" />
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-8 ${
                !showMockup ? 'justify-center' : ''
              }`}
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              {stats.map((stat, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                    className="flex items-start gap-2.5"
                  >
                    <Icon
                      aria-hidden="true"
                      style={{
                        marginTop: '4px',
                        width: '15px',
                        height: '15px',
                        color: '#f87171',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 900,
                          fontSize: '1.5rem',
                          color: '#fff',
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '11px',
                          color: 'rgba(156,163,175,1)',
                          marginTop: '3px',
                          lineHeight: 1.3,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ─── RIGHT: Floating Mockup (home page only) ─── */}
          {showMockup && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center relative"
              style={{ minHeight: '440px' }}
            >
              {/* "Made in Africa!" — top-left floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute z-20 flex items-center gap-2"
                style={{
                  top: '16px',
                  left: '-16px',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                  boxShadow: '0 8px 24px rgba(220,38,38,0.35)',
                }}
              >
                <span role="img" aria-label="globe africain" style={{ fontSize: '15px', lineHeight: 1 }}>
                  🌍
                </span>
                <span style={{ fontWeight: 700, color: '#fff', fontSize: '12px' }}>
                  Made in Africa !
                </span>
              </motion.div>

              {/* Main floating card */}
              <div
                className="animate-hero-float relative"
                style={{
                  width: '340px',
                  marginTop: '56px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  boxShadow: '0 24px 64px rgba(220,38,38,0.15), 0 8px 32px rgba(0,0,0,0.40)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  padding: '28px',
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    🚀
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: '15px',
                        color: '#fff',
                        lineHeight: 1.2,
                      }}
                    >
                      Nos Services
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.42)',
                        marginTop: '2px',
                      }}
                    >
                      Solutions digitales complètes
                    </div>
                  </div>
                </div>

                {/* Service lines */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '20px',
                  }}
                >
                  {[
                    { label: 'Développement Web',  badge: 'Expert',      color: '#3b82f6' },
                    { label: 'Design Graphique',    badge: 'Créatif',     color: '#8b5cf6' },
                    { label: 'Marketing Digital',   badge: 'Stratégique', color: '#f59e0b' },
                    { label: 'Analyse UML',         badge: 'Précis',      color: '#10b981' },
                  ].map((svc, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.82)',
                        }}
                      >
                        {svc.label}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          padding: '3px 10px',
                          borderRadius: '999px',
                          background: `${svc.color}22`,
                          color: svc.color,
                          border: `1px solid ${svc.color}44`,
                        }}
                      >
                        {svc.badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Satisfaction bar */}
                <div
                  style={{
                    height: '1px',
                    background: 'rgba(255,255,255,0.08)',
                    margin: '0 0 14px',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.36)' }}>
                    Satisfaction client
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#f87171' }}>100%</span>
                </div>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: '2px',
                      background: 'linear-gradient(to right, #dc2626, #ef4444)',
                    }}
                  />
                </div>
              </div>

              {/* "Projet livré!" — bottom-right floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute z-20"
                style={{
                  bottom: '4px',
                  right: '-16px',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.28)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px',
                  }}
                >
                  <span role="img" aria-label="succès" style={{ fontSize: '13px', lineHeight: 1 }}>
                    ✅
                  </span>
                  <span style={{ fontWeight: 700, color: '#fff', fontSize: '12px' }}>
                    Projet livré !
                  </span>
                </div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.40)' }}>
                  Dans les délais · Qualité garantie
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
          }}
        >
          Découvrir
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(220,38,38,0.80), transparent)',
          }}
        />
        <div
          className="animate-pulse rounded-full"
          style={{ width: '6px', height: '6px', background: '#dc2626' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
