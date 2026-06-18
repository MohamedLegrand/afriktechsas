import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiMenu, FiX } from 'react-icons/fi'

const scrollLinks = [
  { label: 'Accueil', to: 'accueil' },
  { label: 'Services', to: 'services' },
]

const routeLinks = [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'À propos', to: '/apropos' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollLink = (to) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(to)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
    setMenuOpen(false)
  }

  const linkClass = (isActive) =>
    `text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-150 ${
      isActive
        ? 'text-red-600 bg-red-50'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Top info bar — desktop only */}
      <div className="hidden lg:block bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5">
            <FiMapPin className="w-3 h-3 flex-shrink-0" />
            Yaoundé, Cameroun — Solutions digitales pour l'Afrique
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/237657375652"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
            >
              <FiPhone className="w-3 h-3" />
              +237 657 37 56 52
            </a>
            <a
              href="https://wa.me/237657976900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
            >
              <FiPhone className="w-3 h-3" />
              +237 657 97 69 00
            </a>
            <a
              href="mailto:contact@afriktechsas.com"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <FiMail className="w-3 h-3" />
              contact@afriktechsas.com
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <img
            src="/images/logo.jpeg"
            alt="AfrikTech SAS"
            className="h-9 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-black text-gray-900 tracking-wider">AFRIKTECH</span>
            <span className="text-[10px] font-bold text-red-600 tracking-[0.25em] uppercase">SAS</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {scrollLinks.map((link) =>
            isHome ? (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeClass="text-red-600 bg-red-50"
                  className={linkClass(false) + ' cursor-pointer block'}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.to}>
                <button
                  onClick={() => handleScrollLink(link.to)}
                  className={linkClass(false)}
                >
                  {link.label}
                </button>
              </li>
            )
          )}
          {routeLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={linkClass(location.pathname === link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Nous contacter
          </Link>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-gray-100 bg-white shadow-lg"
          >
            <div className="px-4 py-3 space-y-0.5">
              {/* Quick contact */}
              <div className="pb-3 mb-1 border-b border-gray-100 space-y-1">
                <a
                  href="https://wa.me/237657375652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-600 py-1.5 transition-colors"
                >
                  <FiPhone className="w-3 h-3" />
                  +237 657 37 56 52
                </a>
                <a
                  href="https://wa.me/237657976900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-green-600 py-1.5 transition-colors"
                >
                  <FiPhone className="w-3 h-3" />
                  +237 657 97 69 00
                </a>
              </div>

              {/* Nav links */}
              {scrollLinks.map((link) =>
                isHome ? (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <button
                    key={link.to}
                    onClick={() => handleScrollLink(link.to)}
                    className="w-full text-left text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium py-2.5 px-3 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}

              {routeLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  className="block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2.5 rounded-lg text-center text-sm transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
