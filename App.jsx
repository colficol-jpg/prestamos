import React, { useState } from 'react'
import './index.css'

export default function App() {
  const [phone, setPhone] = useState('')

  const handleEnter = () => {
    if (!phone) {
      alert('Por favor ingresa tu número')
      return
    }
    console.log('Número ingresado:', phone)
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

      {/* Campo de teléfono */}
      <div className="w-80 space-y-3">
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

        {/* Botón de acceso */}
        <button
          className="w-full bg-[#FF00B8] hover:bg-[#e000a3] text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={handleEnter}
        >
          Entra
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-16 opacity-80">
        Entidad acreditadora digital — versión demo
      </p>
    </div>
  )
}
