import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="text-8xl sm:text-9xl font-black text-red-100 leading-none mb-4 select-none">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            Page introuvable
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            La page que vous cherchez n'existe pas ou a été déplacée.
            Revenez à l'accueil pour continuer votre navigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-red-200/60 hover:scale-105 transform text-sm"
            >
              Retour à l'accueil
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-200 hover:border-red-400 text-gray-600 hover:text-red-500 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm"
            >
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
