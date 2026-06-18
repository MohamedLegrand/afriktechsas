import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight, FiCheck } from 'react-icons/fi'
import { FaWhatsapp, FaTiktok, FaFacebook, FaLinkedinIn } from 'react-icons/fa6'
import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'

const contactInfo = [
  { Icon: FiMapPin, label: 'Adresse',   value: 'Yaoundé, Cameroun', href: null },
  { Icon: FiPhone,  label: 'Téléphone', value: '+237 657 37 56 52 / +237 657 97 69 20', href: 'https://wa.me/237657375652' },
  { Icon: FiMail,   label: 'Email',     value: 'contact@afriktechsas.com', href: 'mailto:contact@afriktechsas.com' },
  { Icon: FiClock,  label: 'Horaires',  value: 'Lun – Ven : 8h00 – 18h00', href: null },
]

const socialLinks = [
  { Icon: FaWhatsapp,   label: 'WhatsApp',  href: 'https://whatsapp.com/channel/0029Vb7AHyNEgGfGxsiHVL3M', color: 'hover:bg-green-500' },
  { Icon: FaFacebook,   label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61579442352757', color: 'hover:bg-blue-600' },
  { Icon: FaLinkedinIn, label: 'LinkedIn',  href: '#', color: 'hover:bg-blue-700' },
  { Icon: FaTiktok,     label: 'TikTok',    href: 'https://vm.tiktok.com/ZS98AX3P9AYQJ-cD766/', color: 'hover:bg-black' },
]

const services = [
  'Développement Web',
  'Développement Mobile',
  'Design Graphique',
  'Marketing Digital',
  'Analyse UML & MERISE',
  'Autre',
]

const inputClass =
  'w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-200 bg-white placeholder:text-gray-400'

const labelClass = 'block text-xs font-semibold text-gray-600 mb-1.5'

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
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
        subtitle="Nous sommes à Yaoundé, Cameroun, et prêts à répondre à vos questions. Partagez votre projet et nous vous recontactons sous 24 heures ouvrées."
        image="/images/contact.jpg"
        ctaPrimary={{ label: 'Écrire un message', to: 'contact-section' }}
        ctaSecondary={{ label: 'Nos réalisations', to: '/portfolio' }}
        stats={[
          { value: '24h', label: 'Délai de réponse' },
          { value: '100%', label: 'Projets livrés' },
          { value: '30+', label: 'Clients satisfaits' },
        ]}
        showMockup={false}
      />

      {/* Contact content */}
      <section id="contact-section" className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="section-eyebrow mb-2">Nos coordonnées</p>
              <h2 className="text-2xl font-black text-gray-900">
                Nous sommes disponibles
              </h2>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const { Icon } = info
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('https') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-gray-700 font-medium text-sm hover:text-red-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Suivez-nous
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => {
                  const { Icon } = s
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-9 h-9 bg-gray-100 ${s.color} hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-200`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h3 className="text-lg font-black text-gray-900 mb-6">Envoyez-nous un message</h3>

              {sent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium flex items-center gap-2">
                  <FiCheck className="w-4 h-4 flex-shrink-0" />
                  Message envoyé ! Nous vous répondrons sous 24h.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nom complet <span className="text-red-500">*</span></label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Mohamed Legrand"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email <span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mohamed@exemple.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Téléphone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+237 6XX XX XX XX"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Service souhaité</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Choisir un service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Message <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins et vos attentes…"
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
                >
                  Envoyer le message
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
