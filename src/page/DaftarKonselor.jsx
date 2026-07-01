import { useState } from "react";
import { Search } from "lucide-react";
import profile from "../assets/Navbar/Profile.png";
import { Link } from "react-router-dom";

const KONSELOR = [
  {
    id: 1,
    nama: "Dr. Rina Wulandari, M.Psi., Psikolog",
    tags: ["Kecemasan", "Stress"],
    tersedia: true,
    metode: "Online",
    foto: profile,
  },
  {
    id: 2,
    nama: "Dr. Budi Santoso, M.T.",
    tags: ["Akademik", "Karier"],
    tersedia: true,
    metode: "Tatap Muka",
    foto: profile,
  },
  {
    id: 3,
    nama: "Arif Rahman, S.T., M.M.",
    tags: ["Akademik", "Karier"],
    tersedia: true,
    metode: "Tatap Muka",
    foto: profile,
  },
  {
    id: 4,
    nama: "Lestari Dewi, M.Psi., Psikolog",
    tags: ["Kecemasan", "Stress"],
    tersedia: false,
    metode: "Online",
    foto: profile,
  },
];

const FILTERS = ["Semua", "Online", "Tatap Muka", "Tersedia"];

function KonselorCard({ data }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Kiri */}
      <div className="flex items-start gap-4 md:items-center">
        <img
          src={data.foto}
          alt={data.nama}
          className="h-14 w-14 shrink-0 rounded-full object-cover bg-gray-200"
        />

        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-semibold text-gray-900">
            {data.nama}
          </h3>

          <div className="mt-2 flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kanan */}
      <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
        <span
          className={`text-xs font-semibold ${
            data.tersedia ? "text-emerald-600" : "text-red-500"
          }`}
        >
          ● {data.tersedia ? "Tersedia" : "Tidak Tersedia"}
        </span>

        <Link to="/detail-jadwal"
          disabled={!data.tersedia}
          className={`w-full md:w-auto rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors ${
            data.tersedia
              ? "bg-violet-600 hover:bg-violet-700"
              : "cursor-not-allowed bg-gray-300"
          }`}
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default function DaftarKonselor() {
  const [filter, setFilter] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = KONSELOR.filter((k) => {
    const matchQuery = k.nama.toLowerCase().includes(query.toLowerCase());

    const matchFilter =
      filter === "Semua" ||
      (filter === "Tersedia" && k.tersedia) ||
      filter === k.metode;

    return matchQuery && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-left">
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-8">
        {/* Judul */}
        <h1 className="mb-5 mt-16 text-2xl poppins-bold text-gray-900">
          Daftar Konselor
        </h1>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Cari nama konselor..."
            className="w-full rounded-xl bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none ring-1 ring-gray-100 focus:ring-violet-400"
          />
        </div>

        {/* Filter */}
        <div className="mb-6 flex overflow-x-auto gap-1 rounded-xl bg-gray-100 p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-violet-600 text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List Konselor */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
              Konselor tidak ditemukan.
            </p>
          ) : (
            filtered.map((k) => (
              <KonselorCard key={k.id} data={k} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}