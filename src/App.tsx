import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
// `Services` (carrossel 3D "Nossas Soluções") e `OtherServices` ("Outros
// Cuidados") estão pausados a pedido do cliente — ver nota mais abaixo,
// junto de onde eles entravam no layout, para restaurar.
// import { Services } from './components/Services'
import { ServicesGrid } from './components/ServicesGrid'
// import { OtherServices } from './components/OtherServices'
import { Gallery } from './components/Gallery'
// `Plans` ("Tratamento Técnico") está pausada a pedido do cliente — ver nota
// mais abaixo, junto de onde ela entrava no layout, para restaurar.
// import { Plans } from './components/Plans'
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
      <ServicesGrid />
      {/* <Services /> — carrossel 3D, desativado por enquanto: trocar a linha
          acima por esta, e reativar o import no topo do arquivo, pra restaurar. */}
      {/* <OtherServices /> — "Outros Cuidados", desativado por enquanto:
          descomentar esta linha e o import no topo do arquivo pra restaurar. */}
      <SectionSeam direction="to-dark" variant="moon" />
      <Founder />
      <SectionSeam direction="to-light" variant="diagonal" />
      <Manifesto />
      <SectionSeam direction="to-dark" variant="diagonal" />
      <Gallery />
      <SectionSeam direction="to-light" variant="moon" />
      {/* <Plans /> — "Tratamento Técnico", desativada por enquanto: descomentar
          esta linha e o import no topo do arquivo pra restaurar. */}
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
