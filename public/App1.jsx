import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import QuoteDialog from './components/QuoteDialog'
import { QuoteDialogProvider } from './components/QuoteDialogContext'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import GastoniaPage from './pages/local/GastoniaPage'
import ConcordPage from './pages/local/ConcordPage'
import InteriorPaintingPage from './pages/services/InteriorPaintingPage'
import ExteriorPaintingPage from './pages/services/ExteriorPaintingPage'
import KitchenRemodelingPage from './pages/services/KitchenRemodelingPage'
import BathroomRemodelingPage from './pages/services/BathroomRemodelingPage'
import InteriorPaintingCharlottePage from './pages/services/local/InteriorPaintingCharlottePage'
import InteriorPaintingLocalPage from './pages/services/local/InteriorPaintingLocalPage'
import ServiceLocalPage from './pages/services/local/ServiceLocalPage'
// Исправлен импорт: Используем стандартный относительный путь
import BlogPostPage from './pages/BlogPostPage' 
import './App.css'

function App() {
  return (
    <Router>
      <QuoteDialogProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
              <Route path="/blog" element={<BlogPage />} />
              {/* МАРШРУТ для детальной страницы статьи блога */}
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/gastonia" element={<GastoniaPage />} />
              <Route path="/concord" element={<ConcordPage />} />
              <Route path="/services/interior-painting" element={<InteriorPaintingPage />} />
              <Route path="/services/exterior-painting" element={<ExteriorPaintingPage />} />
              <Route path="/services/kitchen-remodeling" element={<KitchenRemodelingPage />} />
              <Route path="/services/bathroom-remodeling" element={<BathroomRemodelingPage />} />
              <Route path="/services/interior-painting/charlotte" element={<InteriorPaintingCharlottePage />} />
              <Route path="/services/interior-painting/:city" element={<InteriorPaintingLocalPage />} />
              <Route path="/services/exterior-painting/:city" element={<ServiceLocalPage />} />
              <Route path="/services/kitchen-remodeling/:city" element={<ServiceLocalPage />} />
              <Route path="/services/bathroom-remodeling/:city" element={<ServiceLocalPage />} />
            </Routes>
          </main>
          <Footer />
          <QuoteDialog />
        </div>
      </QuoteDialogProvider>
    </Router>
  )
}

export default App
