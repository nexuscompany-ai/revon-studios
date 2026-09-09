import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Plans } from './components/Plans'
import { Founder } from './components/Founder'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Location } from './components/Location'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { SectionFade } from './components/SectionFade'
import { PlanDetail } from './pages/PlanDetail'

function Home() {
  return (
    <>
      <Hero />
      <SectionFade direction="to-light" />
      <Services />
      <Manifesto />
      <Gallery />
      <Plans />
      <SectionFade direction="to-dark" />
      <Founder />
      <SectionFade direction="to-light" />
      <Testimonials />
      <InstagramFeed />
      <Location />
      <Faq />
      <SectionFade direction="to-dark" />
      <FinalCta />
      <SectionFade direction="to-light" />
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
