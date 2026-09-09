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

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Gallery />
        <Founder />
        <Testimonials />
        <InstagramFeed />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
