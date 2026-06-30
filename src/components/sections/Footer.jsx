import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa6'
import { FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa6'

const socialLinks = [
  { name: 'WhatsApp', href: 'https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M', label: 'Canal WhatsApp', Icon: FaWhatsapp },
  { name: 'TikTok',   href: 'https://vm.tiktok.com/ZS98AX3P9AYQJ-cD766/',              label: 'TikTok',         Icon: FaTiktok   },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579442352757',   label: 'Facebook',       Icon: FaFacebook },
]

const footerLinks = {
  Navigation: [
    { label: 'Accueil',   to: '/',          type: 'route'  },
    { label: 'Services',  to: 'services',   type: 'scroll' },
    { label: 'Portfolio', to: '/portfolio', type: 'route'  },
    { label: 'À propos',  to: '/apropos',   type: 'route'  },
    { label: 'Contact',   to: '/contact',   type: 'route'  },
  ],
  Services: [
    { label: 'Développement Web',    to: '/services/web',       type: 'route' },
    { label: 'Développement Mobile', to: '/services/mobile',    type: 'route' },
    { label: 'Design Graphique',     to: '/services/design',    type: 'route' },
    { label: 'Marketing Digital',    to: '/services/marketing', type: 'route' },
    { label: 'Analyse UML & MERISE', to: '/services/uml',       type: 'route' },
  ],
}

const contactItems = [
  { Icon: FaLocationDot, type: 'text',     value: 'Yaoundé, Cameroun' },
  { Icon: FaPhone,  type: 'whatsapp', value: '+237 657 37 56 52', href: 'https://wa.me/237657375652' },
  { Icon: FaPhone,  type: 'whatsapp', value: '+237 657 97 69 00', href: 'https://wa.me/237657976900' },
  { Icon: FaEnvelope,   type: 'mailto',   value: 'contact@afriktechsas.com', href: 'mailto:ngueffonelson@gmail.com' },
  { Icon: FaClock,  type: 'text',     value: 'Lun – Ven : 8h00 – 18h00' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#1A0505', color: '#D1A0A0' }}>

      {/* CTA Banner */}
      <div style={{ background: '#2D0808', borderBottom: '1px solid #4a1414' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-display font-bold text-xl mb-1"
                style={{ letterSpacing: '-0.01em' }}>
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-secondary text-sm">
              Parlons de votre idée et transformons-la en réalité digitale.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors duration-300"
          >
            Nous contacter
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src="/images/logo.jpeg" alt="AfrikTech SAS" className="h-11 w-auto mb-5 opacity-85" />
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#D1A0A0' }}>
            AfrikTech SAS propulse votre entreprise dans l'ère numérique depuis Yaoundé, Cameroun.
          </p>
          <p className="font-sans font-semibold text-xs tracking-widest uppercase mb-3" style={{ color: '#e8b4b4' }}>
            Suivez-nous
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ name, href, label, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300"
                style={{ background: '#3d1010', color: '#D1A0A0' }}
              >
                <Icon style={{ width: '16px', height: '16px' }} />
              </a>
            ))}
          </div>
          <a
            href="https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-300 hover:text-white"
            style={{ border: '1px solid #4a1414', color: '#D1A0A0' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Rejoindre notre canal WhatsApp
          </a>
        </div>

        {/* Nav columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-sans font-semibold text-xs mb-5 uppercase tracking-widest" style={{ color: '#ffffff' }}>
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link to={link.to} className="text-sm hover:text-white transition-colors duration-200" style={{ color: '#D1A0A0' }}>
                      {link.label}
                    </Link>
                  ) : (
                    <ScrollLink to={link.to} smooth duration={500} offset={-70}
                      className="text-sm hover:text-white transition-colors duration-200 cursor-pointer" style={{ color: '#D1A0A0' }}>
                      {link.label}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-xs mb-5 uppercase tracking-widest" style={{ color: '#ffffff' }}>
            Contact
          </h4>
          <ul className="space-y-3">
            {contactItems.map((item, i) => {
              const { Icon } = item
              return (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#D1A0A0' }}>
                  <Icon style={{ width: '13px', height: '13px', flexShrink: 0, marginTop: '3px', color: '#e87070' }} />
                  {item.type === 'text' ? (
                    <span>{item.value}</span>
                  ) : (
                    <a href={item.href}
                       target={item.type === 'whatsapp' ? '_blank' : undefined}
                       rel={item.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                       className="hover:text-white transition-colors duration-200">
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
      <div style={{ borderTop: '1px solid #4a1414' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: '#a06060' }}>
          <p>
            &copy; {year}{' '}
            <span className="font-medium" style={{ color: '#D1A0A0' }}>AfrikTech SAS</span>.
            {' '}Tous droits réservés.
          </p>
          <p>
            Conçu depuis{' '}
            <span className="font-medium text-red-400">Yaoundé, Cameroun</span>
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-gray-secondary transition-colors">Mentions légales</Link>
            <Link to="/contact" className="hover:text-gray-secondary transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
