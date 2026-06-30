export default function Footer() {
  return (
    <footer className="bg-[#F8F9FD] border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-center md:text-left">
            <h3 className="poppins-semibold text-gray-800">
              POLINES Konseling
            </h3>
            <p className="text-sm text-gray-500 poppins-regular">
              Sistem Layanan Konseling Politeknik Negeri Semarang
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 poppins-regular">
              © 2026 Kelompok 5
            </p>
            <p className="text-xs text-gray-400 poppins-light">UI/UX Project</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
