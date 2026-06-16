import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/ui/SplashScreen'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import WebService from './pages/services/WebService'
import MobileService from './pages/services/MobileService'
import DesignService from './pages/services/DesignService'
import MarketingService from './pages/services/MarketingService'
import UmlService from './pages/services/UmlService'
import MemberPage from './pages/membres/MemberPage'
import NotFound from './pages/NotFound'
import './App.css'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
}

function AppContent() {
  const location = useLocation()
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('splashShown')
  )

  const handleSplashDone = () => {
    sessionStorage.setItem('splashShown', 'true')
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <ScrollProgress />
      <BackToTop />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/"                   element={<Home />} />
            <Route path="/portfolio"          element={<PortfolioPage />} />
            <Route path="/apropos"            element={<AboutPage />} />
            <Route path="/contact"            element={<ContactPage />} />
            <Route path="/services/web"       element={<WebService />} />
            <Route path="/services/mobile"    element={<MobileService />} />
            <Route path="/services/design"    element={<DesignService />} />
            <Route path="/services/marketing" element={<MarketingService />} />
            <Route path="/services/uml"       element={<UmlService />} />
            <Route path="/membres/:slug"      element={<MemberPage />} />
            <Route path="*"                   element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
