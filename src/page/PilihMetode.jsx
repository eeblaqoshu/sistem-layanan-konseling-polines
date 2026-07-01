import { useState } from "react";
import { Info } from "lucide-react";
import tatapMukaImg from "../assets/tatap_muka.svg";
import onlineImg from "../assets/online.svg";
import { Link } from "react-router-dom";

const METODE = [
  {
    id: "tatap-muka",
    image: tatapMukaImg,
    title: "Tatap Muka",
    desc: "Bertemu langsung dengan konselor di ruang konseling Politeknik Negeri Semarang",
    cta: "Pilih Tatap Muka",
    color: "violet",
  },
  {
    id: "online",
    image: onlineImg,
    title: "Online",
    desc: "Konseling melalui chat atau video call dari mana saja ",
    cta: "Pilih Online",
    color: "sky",
  },
];

const STYLES = {
  violet: {
    iconBg: "bg-violet-100 text-violet-600",
    cardBg: "bg-violet-50",
    button: "bg-violet-600 hover:bg-violet-700",
    ring: "ring-violet-500",
  },
  sky: {
    iconBg: "bg-sky-100 text-sky-600",
    cardBg: "bg-sky-50",
    button: "bg-sky-600 hover:bg-sky-700",
    ring: "ring-sky-500",
  },
};;

function MetodeCard({ data, selected, onSelect }) {
  const Icon = data.icon;
  const style = STYLES[data.color];
  const isSelected = selected === data.id;

  return (
          <div
        onClick={() => onSelect(data.id)}
        className={`flex h-full cursor-pointer flex-col items-center rounded-2xl ${style.cardBg} p-8 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
        isSelected ? `ring-2 ${style.ring}` : ""
      }`}
      >
      <img
        src={data.image}
        alt={data.title}
        className="mb-5 h-40 w-full object-contain"
      />
      <h3 className="mb-2 text-lg font-bold text-gray-900">{data.title}</h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-500">
        {data.desc}
      </p>
      <Link to="/detail-pemesanan"
        className={`w-full rounded-lg py-2.5 text-sm font-semibold text-white ${style.button}`}
      >
        {data.cta}
      </Link>
    </div>
  );
}

export default function PilihMetode() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-left">
     
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 text-center">
          <h1 className="mb-2 mt-16 text-2xl font-bold text-gray-900">
            Pilih Metode Konseling
          </h1>
          <p className="text-sm text-gray-500">
            Pilih metode konseling yang paling nyaman untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {METODE.map((m) => (
            <MetodeCard
              key={m.id}
              data={m}
              selected={selected}
              onSelect={setSelected}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <Info className="h-4 w-4 shrink-0" />
          <span>
            Anda dapat memilih metode yang berbeda setiap kali membuat jadwal
          </span>
        </div>
      </div>
    </div>
  );
}
