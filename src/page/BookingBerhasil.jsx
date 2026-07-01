import { Link } from "react-router-dom";
import Calendar from "../assets/BookingBerhasil/Calendar.png";
import Home from "../assets/BookingBerhasil/Home.png";
import Success from "../assets/BookingBerhasil/Success.png";

export default function BookingBerhasil() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-24 md:mt-28 px-4">
      <img
        src={Success}
        alt="success"
        className="w-44 h-44 mb-2"
      />

      <div className="max-w-3xl text-black text-center">
        <span className="text-lg poppins-bold">
          Jadwal Berhasil Dibuat!
        </span>

        <p className="text-sm inter-regular mt-1">
          Terima kasih, Andi Pratama.
        </p>

        <p className="text-sm inter-regular">
          Detail pemesanan Anda telah berhasil dikirim ke email
        </p>

        <p className="text-sm inter-semibold">
          andi.pratama@gmail.com
        </p>
      </div>

      <div className="flex flex-col w-full max-w-md mt-6 space-y-3">
        {/* Tombol Beranda */}
        <Link
            to="/home"
          type="button"
          className="
            flex w-full items-center justify-center gap-3
            px-6 py-4
            bg-white
            border border-gray-300
            rounded-xl
            shadow-md
            text-purple-500
            poppins-bold
            text-lg
            transition-all duration-200
            hover:bg-gray-100
            hover:shadow-lg
            active:scale-95
          "
        >
          <img
            src={Home}
            alt="Home"
            className="w-8 h-8"
          />
          <span>Kembali ke Beranda</span>
        </Link>

        {/* Tombol Riwayat */}
        <Link to="/riwayat-konseling"
          type="button"
          className="
            flex w-full items-center justify-center gap-3
            px-6 py-4
            bg-purple-500
            border border-purple-500
            rounded-xl
            shadow-md
            text-white
            poppins-bold
            text-lg
            transition-all duration-200
            hover:bg-purple-700
            hover:border-purple-700
            hover:shadow-lg
            active:scale-95
          "
        >
          <img
            src={Calendar}
            alt="Calendar"
            className="w-8 h-8"
          />
          <span>Lihat di Riwayat</span>
        </Link>
      </div>
    </div>
  );
}