import { Header } from './components/Header/Header'
import './App.css'
import { WelcomeSection } from './components/WelcomeSection/WelcomeSection'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contacts } from './components/Contacts/Contacts'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <Portfolio />
        <Contacts />
        <Footer />
      </main>
    </div>
  )
}
