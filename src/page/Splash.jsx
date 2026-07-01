import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8FC]">
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="Logo POLINES" className="w-40 h-40 object-contain" />
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide text-gray-900">POLINES</h1>
          <p className="text-sm font-semibold tracking-widest text-[#7269D6] mt-1">
            LAYANAN KONSELING
          </p>
        </div>
      </div>
    </div>
  )
}