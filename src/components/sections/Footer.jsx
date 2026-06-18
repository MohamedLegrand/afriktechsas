import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa6'

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M',
    label: 'Canal WhatsApp',
    Icon: FaWhatsapp,
    hoverColor: 'hover:bg-green-500',
  },
  {
    name: 'TikTok',
    href: 'https://vm.tiktok.com/ZS98AX3P9AYQJ-cD766/',
    label: 'TikTok',
    Icon: FaTiktok,
    hoverColor: 'hover:bg-white hover:text-black',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61579442352757',
    label: 'Facebook',
    Icon: FaFacebook,
    hoverColor: 'hover:bg-blue-600',
  },
]

const footerLinks = {
  Navigation: [
    { label: 'Accueil', to: '/', type: 'route' },
    { label: 'Services', to: 'services', type: 'scroll' },
    { label: 'Portfolio', to: '/portfolio', type: 'route' },
    { label: 'À propos', to: '/apropos', type: 'route' },
    { label: 'Contact', to: '/contact', type: 'route' },
  ],
  Services: [
    { label: 'Développement Web', to: '/services/web', type: 'route' },
    { label: 'Développement Mobile', to: '/services/mobile', type: 'route' },
    { label: 'Design Graphique', to: '/services/design', type: 'route' },
    { label: 'Marketing Digital', to: '/services/marketing', type: 'route' },
    { label: 'Analyse UML & MERISE', to: '/services/uml', type: 'route' },
  ],
}

const contactItems = [
  { Icon: FiMapPin,  type: 'text',     value: 'Yaoundé, Cameroun' },
  { Icon: FiPhone,   type: 'whatsapp', value: '+237 657 37 56 52', href: 'https://wa.me/237657375652' },
  { Icon: FiPhone,   type: 'whatsapp', value: '+237 657 97 69 00', href: 'https://wa.me/237657976900' },
  { Icon: FiMail,    type: 'mailto',   value: 'contact@afriktechsas.com', href: 'mailto:contact@afriktechsas.com' },
  { Icon: FiClock,   type: 'text',     value: 'Lun – Ven : 8h00 – 18h00' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* CTA Banner */}
      <div className="bg-red-600 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-xl sm:text-2xl mb-1">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-red-100 text-sm">
              Parlons de votre idée et transformons-la en réalité digitale.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-50 font-bold px-6 py-2.5 rounded-lg text-sm transition-colors duration-200"
          >
            Nous contacter
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src="/images/logo.jpeg"
            alt="AfrikTech SAS"
            className="h-12 w-auto mb-5 opacity-90"
          />
          <p className="text-sm leading-relaxed text-gray-500 mb-6">
            AfrikTech SAS propulse votre entreprise dans l'ère numérique.
            Développement web & mobile, design, marketing — nous construisons
            votre succès digital depuis Yaoundé vers le monde.
          </p>

          <p className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-3">
            Suivez-nous
          </p>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => {
              const { Icon } = social
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-8 h-8 rounded-lg bg-gray-800 ${social.hoverColor} text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              )
            })}
          </div>

          <a
            href="https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 bg-green-500/10 hover:bg-green-500/15 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Rejoindre notre canal WhatsApp
          </a>
        </div>

        {/* Nav columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <ScrollLink
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-widest">
            Contact
          </h4>
          <ul className="space-y-3">
            {contactItems.map((item, i) => {
              const { Icon } = item
              return (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500">
                  <Icon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-600" />
                  {item.type === 'text' ? (
                    <span>{item.value}</span>
                  ) : (
                    <a
                      href={item.href}
                      target={item.type === 'whatsapp' ? '_blank' : undefined}
                      rel={item.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            &copy; {year}{' '}
            <span className="text-gray-500 font-medium">AfrikTech SAS</span>.
            {' '}Tous droits réservés.
          </p>
          <p className="text-center">
            Conçu & développé avec soin depuis{' '}
            <span className="text-red-500 font-medium">Yaoundé, Cameroun</span>
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
