import React, { useState } from "react"
import "../styles.css"
import { SectionWrapper } from "../hoc"
import { salvaEmail } from "../appwrite.js"

const Registration = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email) {
      salvaEmail(email)
      setEmail("")
      alert("Email registrata con successo!")
    } else {
      alert("Inserisci una email valida.")
    }
  }

  return (
    <div className="registration-container">
      <h2 className="form-title">Registratione</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="email"
          placeholder="Inserisci email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <button type="submit" className="submit-button">Registra</button>
      </form>
    </div>
  )
}

export default SectionWrapper(Registration, 'registration')
