import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  CircleUserRound,
  Info,
  History,
  MessageCircleMore,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10 lg:px-28 pt-5 pb-12">
        {/* Hero */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#1F1F1F] leading-tight">
              Halo, Lukman Setiawan!
            </h1>

            <p className="mt-4 md:mt-5 text-base md:text-lg leading-7 md:leading-8 text-black">
              Kesehatan mentalmu penting.
              <br />
              Kami siap mendengarkan dan membantu kamu
              <br />
              menjadi versi terbaik dirimu.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/img/hero.png"
              alt="Gambar orang"
              className="w-60 md:w-72 lg:w-85 object-contain"
            />
          </div>
        </div>

        {/* Jadwal Terdekat */}
        <div className="mt-5 rounded-3xl bg-white px-5 md:px-8 py-6 shadow-md">
          <h2 className="text-lg md:text-xl font-bold text-[#1F1F1F]">
            Jadwal Terdekat
          </h2>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            {/* Tanggal */}
            <div className="flex items-center gap-4 md:gap-5">
              <CalendarDays
                size={52}
                strokeWidth={1.8}
                className="text-[#8D7AD6]"
              />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-[#8D7AD6]" />
                  <span className="text-sm md:text-[15px]">
                    Rabu, 1 Juli 2026
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-[#8D7AD6]" />
                  <span className="text-sm md:text-[15px]">
                    10.00 - 10.50 WIB
                  </span>
                </div>
              </div>
            </div>

            {/* Konselor */}
            <div className="flex items-center gap-2">
              <CircleUserRound size={20} className="text-[#8D7AD6]" />
              <span className="text-sm md:text-[15px]">
                Rina Wulandari, M.Psi.
              </span>
            </div>

            {/* Status */}
            <span
              className="rounded-lg bg-[#E9E0FF] px-5 py-2 text-center text-sm font-semibold text-[#7B61FF]"
            >
              Tatap Muka
            </span>

            {/* Detail */}
            <Link
              to="/detail-pemesanan"
              className="rounded-lg bg-[#7B61FF] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#6D52F5]"
            >
              Lihat Detail
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Buat Jadwal */}
          <Link to="/konselor" className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1">
            <div className="flex justify-center">
              <CalendarDays
                size={60}
                strokeWidth={1.8}
                className="text-[#8D7AD6]"
              />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold">
              Buat Jadwal
            </h3>

            <p className="mt-1 text-center text-sm text-gray-500">
              Booking sesi baru
            </p>
          </Link>

          {/* Informasi */}
          <Link
            to="/layanan-informasi"
            className="rounded-2xl bg-[#F5FFF2] p-6 shadow-md transition hover:-translate-y-1"
          >
            <div className="flex justify-center">
              <Info
                size={60}
                strokeWidth={2}
                className="rounded-full bg-[#4F7DF3] p-2 text-white"
              />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold">
              Informasi Layanan
            </h3>

            <p className="mt-1 text-center text-sm text-gray-500">
              Lihat jenis layanan
            </p>
          </Link>

          {/* Riwayat */}
          <Link
            to="/riwayat-konseling"
            className="rounded-2xl bg-[#F1FFE9] p-6 shadow-md transition hover:-translate-y-1"
          >
            <div className="flex justify-center">
              <History size={60} strokeWidth={2} className="text-[#2CB72C]" />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold">
              Riwayat Konseling
            </h3>

            <p className="mt-1 text-center text-sm text-gray-500">
              Riwayat sesi Anda
            </p>
          </Link>

          {/* Chat */}
          <div className="rounded-2xl bg-[#FFF5F5] p-6 shadow-md transition hover:-translate-y-1">
            <div className="flex justify-center">
              <MessageCircleMore
                size={60}
                strokeWidth={2}
                className="text-[#FF4B6E]"
              />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold">
              Chat / Darurat
            </h3>

            <p className="mt-1 text-center text-sm text-gray-500">
              Butuh bantuan cepat?
            </p>
          </div>
        </div>

        {/* Benefit */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Aman */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
            <div className="rounded-full bg-[#F3F1FB] p-4">
              <Shield size={34} className="text-[#8D7AD6]" />
            </div>

            <div>
              <h3 className="font-bold">Aman & Rahasia</h3>

              <p className="mt-1 text-sm text-gray-500">
                Privasi Anda adalah prioritas kami.
              </p>
            </div>
          </div>

          {/* Mudah */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
            <div className="rounded-full bg-[#F3F1FB] p-4">
              <Smartphone size={34} className="text-[#8D7AD6]" />
            </div>

            <div>
              <h3 className="font-bold">Mudah Diakses</h3>

              <p className="mt-1 text-sm text-gray-500">
                Layanan kapan saja,
                <br />
                di mana saja.
              </p>
            </div>
          </div>

          {/* Profesional */}
          <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
            <div className="rounded-full bg-[#F3F1FB] p-4">
              <Users size={34} className="text-[#8D7AD6]" />
            </div>

            <div>
              <h3 className="font-bold">Profesional</h3>

              <p className="mt-1 text-sm text-gray-500">
                Dibimbing oleh
                <br />
                konselor kompeten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;