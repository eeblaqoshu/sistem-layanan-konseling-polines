import { Link } from "react-router-dom";
import Calendar from "../assets/DetailPemesanan/Calendar.png";
import Clock from "../assets/DetailPemesanan/Clock.png";
import Region from "../assets/DetailPemesanan/Region.png";
import Setting from "../assets/DetailPemesanan/Settings.png";
import Profile from "../assets/Navbar/Profile.png";

export default function DetailPemesanan() {
  return (
    <div className="flex flex-col items-center mt-24 md:mt-28 px-4 pb-10">
      {/* Header */}
      <div className="text-center text-black">
        <span className="text-lg poppins-bold">Detail Pemesanan</span>
        <p className="text-sm poppins-regular text-gray-600 mt-1">
          Periksa kembali detail pemesanan Anda sebelum dikonfirmasi
        </p>
      </div>

      {/* Card Detail */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md border border-gray-200 mt-6 p-5">
        {/* Konselor */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-200 text-left">
          <img
            src={Profile}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span className="text-xs text-gray-500 poppins-regular">
              Konselor
            </span>
            <span className="text-sm text-black poppins-medium">
              Dr. Rina Wulandari, M.Psi., Psikolog
            </span>
          </div>
        </div>

        {/* Metode */}
        <div className="flex items-center gap-4 py-3 border-b border-gray-200">
          <div className="bg-[#F7F6FA] p-2 rounded-md">
            <img src={Setting} alt="Metode" className="w-5 h-5" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500 poppins-regular">
              Metode
            </span>
            <span className="text-sm text-black poppins-medium">
              Online (Video Call)
            </span>
          </div>
        </div>

        {/* Tanggal */}
        <div className="flex items-center gap-4 py-3 border-b border-gray-200">
          <div className="bg-[#F7F6FA] p-2 rounded-md">
            <img src={Calendar} alt="Tanggal" className="w-5 h-5" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500 poppins-regular">
              Tanggal
            </span>
            <span className="text-sm text-black poppins-medium">
              Rabu, 21 Mei 2025
            </span>
          </div>
        </div>

        {/* Waktu */}
        <div className="flex items-center gap-4 py-3 border-b border-gray-200">
          <div className="bg-[#F7F6FA] p-2 rounded-md">
            <img src={Clock} alt="Waktu" className="w-5 h-5" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500 poppins-regular">
              Waktu
            </span>
            <span className="text-sm text-black poppins-medium">
              10:00 - 10:50 WIB
            </span>
          </div>
        </div>

        {/* Lokasi */}
        <div className="flex items-center gap-4 pt-3">
          <div className="bg-[#F7F6FA] p-2 rounded-md">
            <img src={Region} alt="Lokasi" className="w-5 h-5" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs text-gray-500 poppins-regular">
              Lokasi
            </span>
            <span className="text-sm text-black poppins-medium">
              Online via POLINES
            </span>
          </div>
        </div>
      </div>

      {/* Catatan */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md border border-gray-200 mt-4 p-4">
        <textarea
          maxLength={300}
          placeholder="Ceritakan sedikit apa yang ingin dilakukan ..."
          className="
            w-full
            resize-none
            outline-none
            text-sm
            text-black
            poppins-regular
            min-h-[90px]
          "
        />

        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-400">(Opsional)</span>
          <span className="text-xs text-gray-400">0/300</span>
        </div>
      </div>

      {/* Tombol */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-3 mt-5">
        <Link to="/metode-kamu"
          type="Link"
          className="
            flex-1
            py-3
            bg-white
            border border-gray-300
            rounded-xl
            shadow-sm
            text-purple-500
            poppins-bold
            transition-all duration-200
            hover:bg-gray-100
          "
        >
          Kembali
        </Link>

        <Link to="/booking-berhasil"
          type="button"
          className="
            flex-1
            py-3
            bg-purple-500
            rounded-xl
            shadow-sm
            text-white
            poppins-bold
            transition-all duration-200
            hover:bg-purple-700
          "
        >
          Konfirmasi & Buat Jadwal
        </Link>
      </div>
    </div>
  );
}