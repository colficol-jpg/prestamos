import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/apply', (req, res) => {
  console.log('Solicitud recibida:', req.body)
  res.status(200).json({ message: 'Solicitud procesada con éxito' })
})

app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1C002D;
}

}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-in-out;
}
