import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ilustrasiLogin from '../assets/LoginProfile/gbrlogin.png'

export default function Login() {
  const navigate = useNavigate()
  const [nim, setNim] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md grid grid-cols-2 overflow-hidden min-h-[400px]">
          
          {/* Kolom Kiri */}
          <div className="p-8 bg-white flex flex-col justify-between">
            <div>
              <h1 className="text-sm font-bold text-gray-900 leading-snug mb-2">
                Selamat datang di<br />Layanan Konseling POLINES
              </h1>
              <p className="text-xs text-gray-500 leading-relaxed">
                Kami siap mendampingi Anda untuk mendukung kesehatan mental dan kesejahteraan Anda.
              </p>
            </div>
            <img 
              src={ilustrasiLogin} 
              alt="Ilustrasi Konseling" 
              className="mt-4 w-full object-contain max-h-48" 
            />
          </div>

          {/* Kolom Kanan */}
          <div className="p-8 border-l border-gray-100 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">NIM</label>
                <input
                  type="text"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B85E8]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B85E8]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#8B85E8] hover:bg-[#7269D6] text-white text-sm font-semibold py-2.5 transition-colors"
              >
                Masuk
              </button>

              <a href="#" className="text-xs text-[#7269D6] font-medium hover:underline text-center">
                Lupa Password?
              </a>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}