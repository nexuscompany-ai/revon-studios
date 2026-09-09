import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Founder } from './components/Founder'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Location } from './components/Location'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { SectionFade } from './components/SectionFade'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <SectionFade direction="to-light" />
        <Manifesto />
        <Services />
        <Gallery />
        <SectionFade direction="to-dark" />
        <Founder />
        <SectionFade direction="to-light" />
        <Testimonials />
        <InstagramFeed />
        <Location />
        <SectionFade direction="to-dark" />
        <FinalCta />
        <SectionFade direction="to-light" />
      </main>
      <Footer />
    </div>
  )
}
