import { useState } from "react";
import { MapPin, Clock } from "lucide-react";

const RIWAYAT = [
  {
    id: 1,
    tanggal: "30",
    bulan: "Juni",
    konselor: "Dr. Rina Wulandari, M.Psi., Psikolog",
    metode: "Tatap Muka",
    jam: "10:00 - 10:50 WIB",
    status: "Terjadwal",
  },
  {
    id: 2,
    tanggal: "21",
    bulan: "Juni",
    konselor: "Dr. Budi Santoso, M.T.",
    metode: "Tatap Muka",
    jam: "10:00 - 10:50 WIB",
    status: "Selesai",
  },
];

const TABS = ["Semua", "Selesai", "Mendatang"];

function StatusBadge({ status }) {
  const isTerjadwal = status === "Terjadwal";

  return (
    <span
      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
        isTerjadwal
          ? "bg-emerald-100 text-emerald-700"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function RiwayatCard({ item }) {
  const isTerjadwal = item.status === "Terjadwal";

  return (
    <div className="rounded-xl bg-white p-4 md:p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* Kiri */}
        <div className="flex gap-4">
          {/* Tanggal */}
          <div className="flex h-fit w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-violet-100 py-2 text-violet-700">
            <span className="text-2xl font-bold leading-none">
              {item.tanggal}
            </span>
            <span className="text-xs font-medium">{item.bulan}</span>
          </div>

          {/* Detail */}
          <div className="min-w-0 flex-1">
            <h3 className="text-sm md:text-base font-semibold text-gray-900">
              {item.konselor}
            </h3>

            <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{item.metode}</span>
            </div>

            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4 shrink-0" />
              <span>{item.jam}</span>
            </div>

            {/* Tombol */}
            <div className="mt-4 flex flex-wrap gap-2">
              {isTerjadwal ? (
                <>
                  <button className="rounded-lg border border-violet-200 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-50">
                    Detail
                  </button>

                  <button className="rounded-lg border border-violet-200 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-50">
                    Reschedule
                  </button>

                  <button className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50">
                    Batalkan
                  </button>
                </>
              ) : (
                <>
                  <button className="rounded-lg border border-violet-200 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-50">
                    Lihat Catatan
                  </button>

                  <button className="rounded-lg border border-violet-200 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:bg-violet-50">
                    Feedback
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="md:ml-4">
          <StatusBadge status={item.status} />
        </div>
      </div>
    </div>
  );
}

export default function RiwayatKonseling() {
  const [tab, setTab] = useState("Semua");

  const filtered = RIWAYAT.filter((item) => {
    if (tab === "Semua") return true;
    if (tab === "Selesai") return item.status === "Selesai";
    if (tab === "Mendatang") return item.status === "Terjadwal";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-left">
      <div className="mx-auto max-w-5xl mt-16 px-4 md:px-6 py-8">
        <h1 className="mb-5 text-2xl font-bold text-gray-900">
          Riwayat Konseling
        </h1>

        {/* Tabs */}
        <div className="mb-6 flex overflow-x-auto gap-1 rounded-xl bg-gray-100 p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                tab === t
                  ? "bg-violet-600 text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
              Tidak ada riwayat konseling pada kategori ini.
            </p>
          ) : (
            filtered.map((item) => (
              <RiwayatCard key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}