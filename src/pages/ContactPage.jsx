import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

const contactInfo = [
  { icon: '📍', label: 'Adresse', value: 'Yaoundé, Cameroun' },
  { icon: '📞', label: 'Téléphone', value: '+237 657 37 56 52 / +237 657 97 69 20' },
  { icon: '✉️', label: 'Email', value: 'contact@afriktechsas.com' },
  { icon: '🕐', label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00' },
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

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/60 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-red-500/20 blur-3xl rounded-full" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Parlons de votre projet
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Contactez
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Notre Équipe
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Nous répondons à tous les messages dans un délai de 24 heures ouvrées.
            Parlons de votre projet !
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-10 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <span className="text-red-500 font-semibold text-sm tracking-widest uppercase">Nos coordonnées</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2 mb-6">
                Nous sommes disponibles pour vous
              </h2>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-md hover:shadow-red-100/40 transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0">{info.icon}</span>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{info.label}</div>
                  <div className="text-gray-700 font-medium text-sm">{info.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Réseaux sociaux */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">Suivez-nous</p>
              <div className="flex gap-3">
                {['Facebook', 'LinkedIn', 'Instagram', 'WhatsApp'].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-500 rounded-xl text-xs font-bold transition-all duration-300"
                  >
                    {s[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/60 p-8">
              <h3 className="text-xl font-black text-gray-900 mb-6">Envoyez-nous un message</h3>

              {sent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-sm font-medium">
                  ✅ Message envoyé ! Nous vous répondrons sous 24h.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nom complet *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Mohamed Legrand"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mohamed@exemple.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Téléphone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+237 6XX XX XX XX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Service souhaité</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-300 bg-white"
                    >
                      <option value="">Choisir un service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins et vos attentes..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-400 focus:ring-2 focus:ring-red-100 outline-none text-gray-800 text-sm transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-200/60 hover:shadow-red-300/80 hover:scale-[1.02] transform text-sm tracking-wide"
                >
                  Envoyer le message →
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
