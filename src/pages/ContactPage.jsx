import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaCheck } from 'react-icons/fa6'
import { FaWhatsapp, FaTiktok, FaFacebook, FaLinkedinIn } from 'react-icons/fa6'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'

const contactInfo = [
  { Icon: FaLocationDot, label: 'Adresse',   value: 'Yaoundé, Cameroun',                      href: null },
  { Icon: FaPhone,  label: 'Téléphone', value: '+237 657 37 56 52',                       href: 'https://wa.me/237657375652' },
  { Icon: FaPhone,  label: 'Téléphone', value: '+237 657 97 69 00',                       href: 'https://wa.me/237657976900' },
  { Icon: FaEnvelope,   label: 'Email',     value: 'contact@afriktechsas.com',                href: 'mailto:ngueffonelson@gmail.com' },
  { Icon: FaClock,  label: 'Horaires',  value: 'Lun – Ven : 8h00 – 18h00',               href: null },
]

const socialLinks = [
  { Icon: FaWhatsapp,   label: 'WhatsApp', href: 'https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M', hoverClass: 'hover:bg-green-500' },
  { Icon: FaFacebook,   label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579442352757', hoverClass: 'hover:bg-blue-600' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#',                                                       hoverClass: 'hover:bg-blue-700' },
  { Icon: FaTiktok,     label: 'TikTok',   href: 'https://vm.tiktok.com/ZS98AX3P9AYQJ-cD766/',             hoverClass: 'hover:bg-dark' },
]

const services = [
  'Développement Web',
  'Développement Mobile',
  'Design Graphique',
  'Marketing Digital',
  'Analyse UML & MERISE',
  'Autre',
]

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const buildText = () => [
    `*Nouveau message depuis le site AfrikTech SAS*`,
    ``,
    `👤 *Nom :* ${form.name}`,
    `📧 *Email :* ${form.email}`,
    form.phone   ? `📱 *Téléphone :* ${form.phone}`        : null,
    form.service ? `🛠 *Service souhaité :* ${form.service}` : null,
    ``,
    `💬 *Message :*`,
    form.message,
  ].filter(Boolean).join('\n')

  const sendTo = (number) => {
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity()
      return
    }
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(buildText())}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero
        badge="Contact"
        badgeText="Parlons de votre projet"
        title="Contactez"
        titleGradient="Notre Équipe"
        subtitle="Nous sommes à Yaoundé, Cameroun, et prêts à répondre à vos questions. Partagez votre projet, nous revenons vers vous sous 24h."
        image="/images/contact.jpg"
        ctaPrimary={{ label: 'Écrire un message', to: 'contact-section' }}
        ctaSecondary={{ label: 'Nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '24h',  label: 'Délai de réponse' },
          { value: '100%', label: 'Projets livrés' },
          { value: '30+',  label: 'Clients satisfaits' },
        ]}
        showMockup={false}
      />

      {/* Contact content */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <span className="section-label">Nos coordonnées</span>
                <h2 className="section-title">Nous sommes disponibles</h2>
                <div className="section-divider" />
              </div>

              <div className="space-y-2.5">
                {contactInfo.map((info, i) => {
                  const { Icon } = info
                  return (
                    <div key={i} className="flex items-start gap-3 p-4 bg-gray-bg rounded-xl border border-gray-border">
                      <div className="w-7 h-7 bg-white rounded-lg border border-gray-border flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" style={{ width: '13px', height: '13px' }} />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] font-semibold text-gray-secondary uppercase tracking-widest mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a href={info.href}
                             target={info.href.startsWith('https') ? '_blank' : undefined}
                             rel="noopener noreferrer"
                             className="text-dark font-medium text-sm hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark font-medium text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <p className="font-sans text-xs font-semibold text-gray-secondary uppercase tracking-widest mb-3">
                  Suivez-nous
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((s) => {
                    const { Icon } = s
                    return (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                         aria-label={s.label}
                         className={`w-8 h-8 bg-gray-bg ${s.hoverClass} hover:text-white text-gray-body rounded-lg flex items-center justify-center transition-all duration-300`}>
                        <Icon style={{ width: '15px', height: '15px' }} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl border border-gray-border shadow-sm p-6 sm:p-8">
                <h3 className="font-display font-bold text-dark text-lg mb-6"
                    style={{ letterSpacing: '-0.01em' }}>
                  Envoyez-nous un message
                </h3>

                {sent && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
                    <FaCheck className="w-4 h-4 flex-shrink-0" />
                    Message envoyé ! Nous vous répondrons sous 24h.
                  </div>
                )}

                <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="space-y-5" noValidate={false}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs font-medium text-gray-body mb-1.5">
                        Nom complet <span className="text-primary">*</span>
                      </label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Mohamed Legrand"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-medium text-gray-body mb-1.5">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="mohamed@exemple.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs font-medium text-gray-body mb-1.5">
                        Téléphone
                      </label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+237 6XX XX XX XX"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-medium text-gray-body mb-1.5">
                        Service souhaité
                      </label>
                      <select name="service" value={form.service} onChange={handleChange} className="input-field">
                        <option value="">Choisir un service…</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-medium text-gray-body mb-1.5">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message" required rows={5} value={form.message} onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins et vos attentes…"
                      className="input-field resize-none"
                    />
                  </div>

                  <div className="pt-1 space-y-3">
                    <p className="text-xs font-semibold text-gray-secondary uppercase tracking-widest">
                      Envoyer via WhatsApp
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => sendTo('237657375652')}
                        className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <FaWhatsapp style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                        +237 657 37 56 52
                      </button>
                      <button
                        type="button"
                        onClick={() => sendTo('237657976900')}
                        className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <FaWhatsapp style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                        +237 657 97 69 00
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-secondary leading-relaxed">
                      Cliquez sur le numéro de votre choix — WhatsApp s'ouvrira avec votre message prêt à envoyer.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flyers */}
      <section className="py-24 bg-gray-bg">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-10"
          >
            <span className="section-label">Rejoignez-nous</span>
            <h2 className="section-title">Stages & Programme Ambassadeur</h2>
            <div className="section-divider" />
            <p className="text-gray-body text-sm max-w-md">
              Vous souhaitez intégrer l'équipe ou devenir ambassadeur ? Contactez-nous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { src: '/images/flyer/stage.jpg',       alt: 'Stage AfrikTech' },
              { src: '/images/flyer/stage1.jpg',      alt: 'Stage AfrikTech 2' },
              { src: '/images/flyer/embassadeur.jpg', alt: 'Ambassadeur AfrikTech' },
            ].map((flyer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl overflow-hidden border border-gray-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-white"
              >
                <img src={flyer.src} alt={flyer.alt} className="w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
