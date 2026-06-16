import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SplashScreen = ({ onDone }) => {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const duration = 2200
    const steps = 100
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      setProgress(current)
      if (current >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          setVisible(false)
          setTimeout(onDone, 500)
        }, 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col items-center justify-center px-6"
        >
          {/* Décoration fond */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <img
              src="/images/logo.jpeg"
              alt="AfrikTech SAS"
              className="h-16 sm:h-20 w-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Nom */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-2xl sm:text-3xl font-black text-white tracking-widest mb-1"
          >
            AFRIKTECH <span className="text-red-500">SAS</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] uppercase mb-12 text-center"
          >
            Innovating to transform Africa
          </motion.p>

          {/* Barre de progression */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="w-40 sm:w-52"
          >
            <div className="w-full h-px bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-rose-400 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-700 text-[10px] font-mono">Loading</span>
              <span className="text-gray-600 text-[10px] font-mono">{progress}%</span>
            </div>
          </motion.div>

          {/* Ligne décorative bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 text-gray-700 text-[10px] tracking-widest uppercase"
          >
            Yaoundé · Cameroun · Afrique
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
