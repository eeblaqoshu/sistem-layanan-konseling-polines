export default function Logo({ size = 40, showText = true, textClassName = '' }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C6FE0" />
            <stop offset="100%" stopColor="#4FD1C5" />
          </linearGradient>
          <linearGradient id="logoGradient2" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4FD1C5" />
            <stop offset="100%" stopColor="#7C6FE0" />
          </linearGradient>
        </defs>
        <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="url(#logoGradient1)" opacity="0.9" />
        <polygon points="50,5 90,27.5 50,50 10,27.5" fill="url(#logoGradient2)" />
        <polygon points="50,50 90,27.5 90,72.5 50,95" fill="#ffffff" opacity="0.15" />
        <polygon points="50,30 70,42 70,66 50,78 30,66 30,42" fill="white" opacity="0.95" />
      </svg>
      {showText && (
        <div className={`leading-tight ${textClassName}`}>
          <p className="font-extrabold text-gray-900 text-sm tracking-wide">POLINES</p>
          <p className="text-[10px] text-primary-600 font-medium -mt-0.5">Layanan Konseling</p>
        </div>
      )}
    </div>
  )
}
