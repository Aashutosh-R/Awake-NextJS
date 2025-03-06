import About from '@/components/Home/About'
import Achievements from '@/components/Home/Achievements'
import Brands from '@/components/Home/Brands'
import Craft from '@/components/Home/Craft'
import FAQ from '@/components/Home/FAQ'
import Hero from '@/components/Home/Hero'
import Plans from '@/components/Home/Plans'
import Projects from '@/components/Home/Projects'
import Reviews from '@/components/Home/Reviews'
import Services from '@/components/Home/Services'
import Team from '@/components/Home/Team'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Projects />
        <Team />
        <Reviews />
        <Plans />
        <FAQ />
        <Achievements />
        <Craft />
      </main>
    </>
  )
}
