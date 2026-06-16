import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, useNavigate, useLocation } from 'react-router-dom'

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
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">

      {/* Bande supérieure info */}
      <div className="hidden lg:block bg-gray-950 text-gray-400 text-xs">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <span>📍 Yaoundé, Cameroun — Solutions digitales pour l'Afrique</span>
          <div className="flex items-center gap-5">
            <a href="https://wa.me/237657375652" target="_blank" rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-200 flex items-center gap-1">
              📞 +237 657 37 56 52
            </a>
            <a href="https://wa.me/237657976900" target="_blank" rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors duration-200 flex items-center gap-1">
              📞 +237 657 97 69 00
            </a>
            <a href="mailto:contact@afriktechsas.com"
              className="hover:text-red-400 transition-colors duration-200 flex items-center gap-1">
              ✉️ contact@afriktechsas.com
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-4">

        {/* Logo + Nom */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/logo.jpeg"
            alt="AfrikTech SAS"
            className="h-16 w-auto drop-shadow-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black text-gray-900 tracking-wide font-display">AFRIKTECH</span>
            <span className="text-sm font-semibold text-red-500 tracking-widest">SAS</span>
          </div>
        </Link>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {scrollLinks.map((link) =>
            isHome ? (
              <li key={link.to}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-red-600 font-semibold"
                  className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300 text-base font-medium tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </ScrollLink>
              </li>
            ) : (
              <li key={link.to}>
                <button
                  onClick={() => handleScrollLink(link.to)}
                  className="text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-300 text-base font-medium tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              </li>
            )
          )}
          {routeLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-base font-medium tracking-wide transition-colors duration-300 relative group ${
                  location.pathname === link.to
                    ? 'text-red-600 font-semibold'
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 rounded-full transition-all duration-300 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 text-base tracking-wide shadow-md shadow-red-200/60 hover:shadow-red-300/80 hover:scale-105 transform whitespace-nowrap"
          >
            Nous contacter
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-gray-700 hover:text-red-500 transition-colors duration-300 flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-1 shadow-lg">
          <div className="flex flex-col gap-1 pb-4 mb-2 border-b border-gray-100">
            <a href="https://wa.me/237657375652" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-green-500 flex items-center gap-2 py-1">
              📞 +237 657 37 56 52
            </a>
            <a href="https://wa.me/237657976900" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-green-500 flex items-center gap-2 py-1">
              📞 +237 657 97 69 00
            </a>
          </div>
          {scrollLinks.map((link) =>
            isHome ? (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-600 hover:text-red-500 hover:bg-red-50 cursor-pointer transition-all duration-300 text-base font-medium py-3 px-4 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ) : (
              <button
                key={link.to}
                onClick={() => handleScrollLink(link.to)}
                className="text-left text-gray-600 hover:text-red-500 hover:bg-red-50 cursor-pointer transition-all duration-300 text-base font-medium py-3 px-4 rounded-xl"
              >
                {link.label}
              </button>
            )
          )}
          {routeLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-red-50 hover:text-red-500 ${
                location.pathname === link.to ? 'text-red-600 bg-red-50' : 'text-gray-600'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-5 py-3 rounded-xl text-center text-base shadow-md shadow-red-200/60 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar