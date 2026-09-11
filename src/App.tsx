import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Services } from './components/Services'
import { OtherServices } from './components/OtherServices'
import { Gallery } from './components/Gallery'
import { Plans } from './components/Plans'
import { Founder } from './components/Founder'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Location } from './components/Location'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { SectionSeam } from './components/SectionSeam'
import { PlanDetail } from './pages/PlanDetail'

function Home() {
  return (
    <>
      <Hero />
      <SectionSeam direction="to-light" variant="diagonal" />
      <Services />
      <OtherServices />
      <Manifesto />
      <SectionSeam direction="to-dark" variant="diagonal" />
      <Gallery />
      <SectionSeam direction="to-light" variant="moon" />
      <Plans />
      <SectionSeam direction="to-dark" variant="moon" />
      <Founder />
      <SectionSeam direction="to-light" variant="diagonal" />
      <Testimonials />
      <Location />
      <InstagramFeed />
      <Faq />
      <SectionSeam direction="to-dark" variant="moon" />
      <FinalCta />
      <SectionSeam direction="to-light" variant="moon" flip />
    </>
  )
}

/** Scrolls to the section named by the URL hash on every navigation
 * (needed since React Router doesn't do this automatically). */
function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos/:slug" element={<PlanDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
