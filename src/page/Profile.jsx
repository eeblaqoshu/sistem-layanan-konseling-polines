import {
  Lock,
  Bell,
  ShieldCheck,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import avatarProfile from "../assets/LoginProfile/gbrprofile.png";

const settingsItems = [
  { icon: Lock, title: "Ubah Password", desc: "Perbarui kata sandi akun Anda" },
  {
    icon: Bell,
    title: "Pengaturan Notifikasi",
    desc: "Atur preferensi notifikasi Anda",
  },
  {
    icon: ShieldCheck,
    title: "Privasi Data",
    desc: "Kelola data dan privasi Anda",
  },
  { icon: HelpCircle, title: "Bantuan", desc: "Pusat bantuan" },
];

export default function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Slamet",
    nim: "33425327",
    prodi: "Prodi D3 Teknik Informatika",
    kampus: "Politeknik Negeri Semarang",
  };

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8 mt-16">
        <h1 className="text-lg poppins-bold font-bold text-gray-900 mb-5">
          Profil Saya
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          {/* Kartu Profil */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center">
            <img
              src={avatarProfile}
              alt={user.name}
              className="w-28 h-28 rounded-full object-cover bg-gray-100"
            />
            <h2 className="mt-4 font-bold text-gray-900">{user.name}</h2>
            <p className="text-xs text-gray-400 mt-1">NIM {user.nim}</p>
            <p className="text-xs text-gray-400">{user.prodi}</p>
            <p className="text-xs text-gray-400">{user.kampus}</p>

            <button className="mt-5 w-full rounded-lg bg-[#8B85E8] hover:bg-[#7269D6] transition-colors text-white text-sm font-semibold py-2.5">
              Ubah Foto
            </button>
          </div>

          {/* Pengaturan Akun */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold poppins-bold text-gray-900 mb-4">
              Pengaturan Akun
            </h2>

            <div className="flex flex-col gap-3">
              {settingsItems.map(({ icon: Icon, title, desc }) => (
                <button
                  key={title}
                  className="w-full flex items-center gap-3 rounded-lg border border-gray-100 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50 text-[#8B85E8] shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">
                      {title}
                    </p>
                    <p className="text-xs text-gray-400">{desc}</p>
                  </span>
                  <ChevronRight size={16} className="text-gray-300" />
                </button>
              ))}

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 rounded-lg border border-red-100 px-4 py-3 text-left hover:bg-red-50 transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-500 shrink-0">
                  <LogOut size={16} />
                </span>
                <span className="flex-1">
                  <Link to="/login">
                    <p className="text-sm font-semibold text-red-500">Keluar</p>
                    <p className="text-xs text-red-300">
                      Keluar dari akun anda
                    </p>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
