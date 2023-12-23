import './App.css'
import { Hero } from './components/Hero'
import { InfoCard } from './components/InfoCard'
import { Navbar } from './components/Navbar'

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoCard />
    </>
  )
}
