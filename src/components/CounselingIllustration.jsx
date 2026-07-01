export default function CounselingIllustration() {
  return (
    <svg viewBox="0 0 360 260" className="w-full h-auto max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="180" cy="230" rx="150" ry="20" fill="#E8E6FB" />
      <circle cx="280" cy="60" r="36" fill="#EDEBFD" />
      <circle cx="60" cy="180" r="22" fill="#E0F4F1" />

      {/* armchair */}
      <rect x="60" y="120" width="150" height="80" rx="18" fill="#8B85E8" />
      <rect x="40" y="100" width="40" height="100" rx="14" fill="#7269D6" />
      <rect x="190" y="100" width="40" height="100" rx="14" fill="#7269D6" />
      <rect x="60" y="190" width="150" height="16" rx="8" fill="#5D52C4" />

      {/* person */}
      <circle cx="135" cy="95" r="22" fill="#2D2A45" />
      <rect x="118" y="112" width="34" height="55" rx="14" fill="#3E3A5C" />
      <rect x="100" y="150" width="70" height="14" rx="7" fill="#2D2A45" />

      {/* laptop */}
      <rect x="150" y="148" width="55" height="36" rx="4" fill="#F4F3FF" stroke="#7269D6" strokeWidth="2" />
      <rect x="148" y="182" width="60" height="6" rx="3" fill="#7269D6" />

      {/* small table + plant */}
      <rect x="235" y="170" width="50" height="8" rx="2" fill="#5D52C4" />
      <rect x="255" y="178" width="8" height="22" fill="#5D52C4" />
      <circle cx="245" cy="155" r="14" fill="#4FD1C5" />
      <rect x="238" y="160" width="14" height="14" rx="3" fill="#A78BFA" />

      {/* decorative dots */}
      <circle cx="300" cy="140" r="4" fill="#A78BFA" />
      <circle cx="40" cy="80" r="4" fill="#4FD1C5" />
      <circle cx="320" cy="190" r="3" fill="#A78BFA" />
    </svg>
  )
}
