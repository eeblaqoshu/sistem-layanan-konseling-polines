import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { id } from "date-fns/locale";
import "react-day-picker/dist/style.css";

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
  MapPin,
} from "lucide-react";

function DetailJadwalKonselor() {
  const [selected, setSelected] = useState(new Date(2026, 6, 1));
  return (
    <div className="min-h-screen bg-[#F9FAFD]">
      <div className="mx-auto w-full max-w-7xl px-20 pt-30 pb-10">
        <div className="flex items-center gap-8">
          {/* foto sikolog */}
          <img src="/assets/img/psikolog.png" alt="Dr. Rina Wulandari" className="h-36 w-36 rounded-full object-cover"
          />
          {/* bio */}
          <div>
            <h1 className="text-2xl font-extrabold text-[#1F1F1F]">Rina Wulandari , M.Psi., Psikolog</h1>
            <p className="mt-2 text-[17px] text-[#444] font-semibold">Psikolog Klinis</p>
            <p className="mt-4 max-w-2xl leading-7 text-black text-sm">
              Berpengalaman lebih dari 8 tahun membantu mahasiswa POLINES
              dalam mengatasi berbagai tantangan psikologis dan
              mengembangkan potensi diri.
            </p>
          </div>
        </div>
        {/* tag dr */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-lg bg-[#ECE8FF] px-5 py-2 text-sm font-medium text-[#6B5CE7]">
            Kecemasan
          </span>
          <span className="rounded-lg bg-[#ECE8FF] px-5 py-2 text-sm font-medium text-[#6B5CE7]">
            Stress
          </span>
          <span className="rounded-lg bg-[#ECE8FF] px-5 py-2 text-sm font-medium text-[#6B5CE7]">
            Depresi
          </span>
          <span className="rounded-lg bg-[#ECE8FF] px-5 py-2 text-sm font-medium text-[#6B5CE7]">
            Pengembangan Diri
          </span>
          <span className="rounded-lg bg-[#ECE8FF] px-5 py-2 text-sm font-medium text-[#6B5CE7]">
            Mindfulness
          </span>
        </div>

        {/* pilih jdw */}
        <div className="mt-8 grid grid-cols-[1fr_1.4fr] gap-6">
          {/* cal */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="text-center text-base font-bold text-[#1F1F1F]">Pilih Tanggal</h2>
            <DayPicker
              mode="single"
              locale={id}
              month={new Date(2026, 6)}
              defaultMonth={new Date(2026, 6)}
              startMonth={new Date(2026, 6)}
              endMonth={new Date(2026, 6)}
              showOutsideDays={false}
              selected={selected}
              onSelect={setSelected}
              classNames={{
                root: "w-full flex justify-center",
                months: "flex justify-center",
                month: "w-fit",
                month_caption: "flex justify-center mb-4",
                caption_label: "text-[15px]",
                nav: "hidden",
                weekdays: "grid grid-cols-7 gap-x-5 mb-2",
                weekday: "flex justify-center text-[11px] font-medium text-gray-400",
                weeks: "flex flex-col -gap-1",
                week: "grid grid-cols-7 gap-x-5",
                day: "flex justify-center",
                day_button: "w-8 h-8 rounded-full text-[12px] font-medium hover:bg-[#F2EEFF] transition",
                selected: "bg-[#7B61FF] text-white rounded-full",
                outside: "invisible"
              }}
            />
          </div>

          {/* pilih waktu */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex flex-col items-center">
              <h2 className="text-base font-bold text-[#1F1F1F]">
                Pilih Waktu{" "}
                <span className="text-sm font-normal text-[#555]">
                  (Rabu, 1 Juli 2026)
                </span>
              </h2>

              <div className="mt-5 flex items-center gap-6 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2DBE3F]"></div>
                  <span>Tersedia</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#7B61FF]"></div>
                  <span>Dipilih</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#D9D9D9]"></div>
                  <span>Penuh</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-5 gap-3">
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">08.00</button>
              <button className="rounded-xl border border-[#DDDDDD] bg-gray-100 py-2.5 text-[15px] font-medium text-[#4E57B8]">08.50</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">09.40</button>
              <button className="rounded-xl bg-[#7B61FF] py-2.5 text-[15px] font-semibold text-white">10.30</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">11.20</button>

              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">13.00</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">13.50</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">14.40</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">15.30</button>
              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">16.20</button>

              <button className="rounded-xl border border-[#BDE6BC] bg-[#F4FFF1] py-2.5 text-[15px] font-medium text-[#24B82E]">17.10</button>
              <button className="rounded-xl border border-[#DDDDDD] bg-gray-100 py-2.5 text-[15px] font-medium text-[#4E57B8]">18.00</button>
              <button className="rounded-xl border border-[#DDDDDD] bg-gray-100 py-2.5 text-[15px] font-medium text-[#4E57B8]">18.50</button>
              <button className="rounded-xl border border-[#DDDDDD] bg-gray-100 py-2.5 text-[15px] font-medium text-[#4E57B8]">19.40</button>
              <button className="rounded-xl border border-[#DDDDDD] bg-gray-100 py-2.5 text-[15px] font-medium text-[#4E57B8]">20.30</button>
            </div>
          </div>
        </div>

        {/* jdw dipilih */}
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white px-8 py-5 shadow-md">
          <div className="flex items-center gap-8">
            <CalendarDays size={50} className="text-[#8D7AD6]" />
            <div>
              <p className="text-xs text-gray-500">Jadwal Dipilih</p>
              <p className="mt-1 text-sm font-semibold text-[#1F1F1F]">Rabu, 1 Juli 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#8D7AD6]" />
              <span className="text-sm font-semibold">10.00 - 10.50 WIB</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#8D7AD6]" />
              <span className="text-sm font-semibold">Tatap Muka</span>
            </div>
          </div>
          <button className="rounded-xl bg-[#7B61FF] px-14 py-3 text-sm font-semibold text-white transition hover:bg-[#6C52F5]">
            Lanjut Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailJadwalKonselor;