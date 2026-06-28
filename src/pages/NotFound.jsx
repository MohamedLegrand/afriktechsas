import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaEnvelope } from 'react-icons/fa6'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-sm"
        >
          <div
            className="text-[96px] sm:text-[120px] font-black leading-none mb-6 select-none tabular-nums"
            style={{ color: '#f3f4f6' }}
            aria-hidden="true"
          >
            404
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">
            Page introuvable
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            La page que vous cherchez n'existe pas ou a été déplacée.
            Revenez à l'accueil pour continuer votre navigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <FaEnvelope className="w-4 h-4" />
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
