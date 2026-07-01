import { Link } from "react-router-dom";
import Location from "../assets/CatatanKonseling/Location.png";
import Check from "../assets/CatatanKonseling/Check.png";
import Calendar from "../assets/CatatanKonseling/Calendar.png";
import Profile from "../assets/CatatanKonseling/Profile.png";
import Video from "../assets/CatatanKonseling/Video.png";

export default function CatatanKonseling() {
  return (
    <div className="mt-20 min-h-screen bg-[#F8F9FD] px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <img src={Calendar} alt="calendar" className="w-6 h-6" />
          <h1 className="text-xl text-left poppins-semibold text-[#23235F]">
            Catatan Konseling
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:3">
          {/* KIRI */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {/* Header Sesi */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Sesi */}
                <div className="flex items-center gap-3">
                  <img
                    src={Calendar}
                    alt="calendar"
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <p className="text-xs poppins-medium text-gray-500">Sesi</p>
                    <p className="text-sm poppins-semibold">
                      #2026-06-24-001
                    </p>
                  </div>
                </div>

                {/* Konselor */}
                <div className="flex items-center gap-3">
                  <img
                    src={Profile}
                    alt="profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-xs poppins-medium text-gray-500">Konselor</p>
                    <p className="text-sm poppins-medium">
                      Dr. Abdul Opung,
                    </p>
                    <p className="text-xs text-gray-500">
                      M. Psi., Psikolog
                    </p>
                  </div>
                </div>

                {/* Tanggal */}
                <div className="flex items-center gap-3">
                  <img
                    src={Calendar}
                    alt="calendar"
                    className="w-8 h-8"
                  />
                  <div className="text-left">
                    <p className="text-xs poppins-medium text-gray-500">Tanggal</p>
                    <p className="text-sm poppins-medium">
                      Rabu, 24 Juli 2026
                    </p>
                    <p className="text-xs text-gray-500">
                      10:00 - 10:50 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ringkasan */}
            <div className="bg-white rounded-xl text-left shadow-md border border-gray-100 p-5">
              <h2 className="text-lg poppins-semibold text-[#23235F] mb-2">
                Ringkasan Sesi
              </h2>

              <p className="text-sm poppins-regular text-gray-600 leading-relaxed">
                Pengguna menyampaikan perasaan cemas terkait tugas akhir dan
                manajemen waktu. Dibahas penyebab kecemasan, pola pikir yang
                muncul, serta strategi awal untuk mengelola stres dan
                meningkatkan fokus.
              </p>

              <div className="mt-6">
                <h2 className="text-lg poppins-semibold text-[#23235F] mb-3">
                  Saran Tindakan
                </h2>

                <div className="space-y-3 poppins-regular">
                  {[
                    "Buat jadwal harian yang realistis dan konsisten.",
                    "Gunakan teknik pernapasan 4-7-8 saat merasa cemas.",
                    "Praktikkan teknik fokus untuk istirahat dari distraksi yang menyenangkan.",
                    "Catat pikiran negatif dan ubah menjadi afirmasi positif.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <img
                        src={Check}
                        alt="check"
                        className="w-5 h-5 mt-0.5"
                      />
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg poppins-semibold text-[#23235F] mb-2">
                  Catatan Tambahan
                </h2>

                <p className="text-sm poppins-regular text-gray-600 leading-relaxed">
                  Pengguna menunjukkan kemajuan jangka ini untuk teknik fokus.
                  Disarankan untuk menerapkan langkah kecil terlebih dahulu dan
                  evaluasi progres pada sesi berikutnya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur soluta asperiores, nemo dolor laudantium inventore id, dolore in delectus deserunt, dolores corrupti?
                </p>
              </div>
            </div>

            {/* Tombol */}
            <button
              className="
                w-full
                bg-[#8B7CF6]
                hover:bg-[#7364ee]
                text-white
                py-4
                rounded-xl
                poppins-medium
                transition
                shadow-md
                duration-200
              "
            >
              Jadwalkan Sesi Lanjutan
            </button>
          </div>

          {/* KANAN */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 h-fit">
            <h2 className="text-lg poppins-semibold text-[#23235F] mb-4">
              Detail Konseling
            </h2>

            <div className="space-y-3">
              <div className="border border-gray-200 rounded-xl p-3 flex gap-3 items-center justify-start">
                <img src={Video} alt="video" className="w-5 h-5 object-fill mt-1" />
                <div className="text-left">
                  <p className="text-xs poppins-regular text-gray-500">Metode</p>
                  <p className="text-sm poppins-regular">Online (Video Call)</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-3 flex gap-3 items-center justify-start">
                <img src={Calendar} alt="durasi" className="w-5 h-5 mt-1" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Durasi</p>
                  <p className="text-sm">50 menit</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-3 flex gap-3 items-center justify-start">
                <img src={Calendar} alt="waktu" className="w-5 h-5 mt-1" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Waktu</p>
                  <p className="text-sm">10:00 - 10:50 WIB</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-3 flex gap-3 items-center justify-start">
                <img src={Location} alt="lokasi" className="w-5 h-5 mt-1" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Lokasi</p>
                  <p className="text-sm">Online via POLINES</p>
                </div>
              </div>
            </div>

            {/* Catatan Pribadi */}
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="poppins-medium text-[#23235F]">
                  Catatan pribadi
                </h3>
                <span className="text-gray-400 text-sm">(opsional)</span>
              </div>

              <textarea
                maxLength={200}
                placeholder="Tuliskan catatan pribadi Anda di sini..."
                className="
                  w-full
                  h-32
                  resize-none
                  border
                  border-gray-200
                  rounded-xl
                  p-3
                  text-sm
                  outline-none
                  transition-all
                  duration-200
                  focus:ring-2
                  focus:ring-violet-300
                "
              />

              <div className="text-right text-xs text-gray-400 mt-1">
                0/200
              </div>
            </div>

            {/* Action */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <Link
                to="/riwayat"
                className="
                  text-center
                  text-md
                  px-2
                  py-3
                  rounded-lg
                  border
                  border-gray-200
                  text-violet-500
                  poppins-medium
                  hover:bg-gray-50
                "
              >
                Kembali
              </Link>

              <Link to="/feedback"
                className="
                px-2
                  py-3
                  rounded-lg
                  text-md
                  bg-[#8B7CF6]
                  hover:bg-[#7364ee]
                  text-white
                  poppins-medium
                  transition
                "
              >
                Konfirmasi & Buat Jadwal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}