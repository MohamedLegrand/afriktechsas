import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const socialLinks = [
  {
    name: 'WhatsApp',
    href: 'https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M',
    color: 'hover:bg-green-500',
    label: 'Suivre sur WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://vm.tiktok.com/ZS98AX3P9AYQJ-cD766/',
    color: 'hover:bg-black',
    label: 'Suivre sur TikTok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61579442352757',
    color: 'hover:bg-blue-600',
    label: 'Suivre sur Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
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

const contact = [
  { icon: '📍', type: 'text',      value: 'Yaoundé, Cameroun' },
  { icon: '📞', type: 'whatsapp',  value: '+237 657 37 56 52', href: 'https://wa.me/237657375652' },
  { icon: '📞', type: 'whatsapp',  value: '+237 657 97 69 00', href: 'https://wa.me/237657976900' },
  { icon: '✉️', type: 'mailto',    value: 'contact@afriktechsas.com', href: 'mailto:contact@afriktechsas.com' },
  { icon: '🕐', type: 'text',      value: 'Lun – Ven : 8h00 – 18h00' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
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
            className="flex-shrink-0 bg-white text-red-600 hover:bg-gray-100 font-bold px-7 py-3 rounded-full text-sm transition-all duration-300 shadow-lg hover:scale-105 transform"
          >
            Nous contacter →
          </Link>
        </div>
      </div>

      {/* Corps principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Colonne marque */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src="/images/logo.jpeg"
            alt="AfrikTech SAS"
            className="h-14 w-auto mb-5 brightness-110"
          />
          <p className="text-sm leading-relaxed text-gray-500 mb-6">
            AfrikTech SAS propulse votre entreprise dans l'ère numérique.
            Développement web & mobile, design, marketing — nous construisons
            votre succès digital depuis Yaoundé vers le monde.
          </p>

          {/* Réseaux sociaux */}
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-3">
              Suivez-nous
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-xl bg-gray-800 ${social.color} text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Badge WhatsApp canal */}
            <a
              href="https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 hover:border-green-500/40 text-green-400 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Rejoindre notre canal WhatsApp
            </a>
          </div>
        </div>

        {/* Navigation */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      className="text-sm text-gray-500 hover:text-red-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-500/0 group-hover:bg-red-500 transition-all duration-200" />
                      {link.label}
                    </Link>
                  ) : (
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="text-sm text-gray-500 hover:text-red-400 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-500/0 group-hover:bg-red-500 transition-all duration-200" />
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
          <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
            Contact
          </h4>
          <ul className="space-y-3">
            {contact.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                {item.type === 'text' ? (
                  <span className="leading-snug">{item.value}</span>
                ) : (
                  <a
                    href={item.href}
                    target={item.type === 'whatsapp' ? '_blank' : undefined}
                    rel={item.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="leading-snug hover:text-green-400 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {item.value}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-gray-800/60" />

      {/* Bas de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>
          &copy; {year} <span className="text-gray-500 font-semibold">AfrikTech SAS</span>. Tous droits réservés.
        </p>
        <p className="text-center">
          Conçu & développé avec ❤️ depuis{' '}
          <span className="text-red-500 font-medium">Yaoundé, Cameroun</span>
        </p>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hover:text-red-400 transition-colors duration-200">
            Mentions légales
          </Link>
          <Link to="/contact" className="hover:text-red-400 transition-colors duration-200">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
