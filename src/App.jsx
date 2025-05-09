import { BrowserRouter } from "react-router-dom"
import { Hero, Registration, StarsCanvas } from "./components"
import "./styles.css"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <StarsCanvas />
        <div className="hero-container">
          <Hero />
        </div>
        <div className="registration-section">
          <Registration />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
