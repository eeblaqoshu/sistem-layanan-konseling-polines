import { useState } from "react";
import FeedbackImage from "../assets/Feedback/FeedbackImage.png";
import Star from "../assets/Feedback/Star.png";
import { Link } from "react-router-dom";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [catatan, setCatatan] = useState("");

  const labels = ["Sangat Buruk", "Buruk", "Cukup", "Baik", "Sangat Baik"];

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex justify-center items-center px-4 py-5">
      <div className="w-full h-[650px] max-w-2xl bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        {/* Judul */}
        <h1 className="text-center text-2xl poppins-bold text-[#23235F]">
          Bagaimana sesi Anda hari ini?
        </h1>

        {/* Ilustrasi */}
        <div className="flex flex-col items-center">
          <img
            src={FeedbackImage}
            alt="Feedback"
            className="w-48 md:w-56 object-cover"
          />

          {/* Rating Preview */}
          <div className="flex gap-1 -mt-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={Star}
                alt="star"
                className="w-4 h-4 object-contain"
              />
            ))}
          </div>

          <p className="mt-2 text-center text-sm text-gray-500">
            Ulasan Anda membantu kami memberikan layanan yang lebih baik.
          </p>
        </div>

        {/* Rating */}
        <div className="mt-5 flex justify-between gap-2 md:gap-6">
          {labels.map((label, index) => (
            <button
              key={label}
              type="button"
              onClick={() => setRating(index + 1)}
              className="flex flex-col items-center group"
            >
              <img
                src={Star}
                alt={label}
                className={`w-7 h-7 md:w-9 md:h-9 transition-all duration-200 ${
                  rating >= index + 1
                    ? "scale-110"
                    : "opacity-80 group-hover:opacity-100"
                }`}
              />

              <span className="mt-2 text-[10px] md:text-xs text-gray-700 text-center">
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Catatan */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-base poppins-semibold text-[#23235F]">
              Catatan pribadi
            </h2>
            <span className="text-sm text-gray-500">(opsional)</span>
          </div>

          <textarea
            maxLength={500}
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Tuliskan catatan pribadi Anda di sini..."
            className="
              w-full
              h-20
              rounded-lg
              border
              border-gray-200
              p-4
              text-sm
              resize-none
              transition-all
              duration-200
              outline-none
              focus:ring-2
              focus:ring-violet-300
              focus:border-violet-300
            "
          />

          <div className="mt-1 text-right text-xs text-gray-400">
            {catatan.length}/500
          </div>
        </div>

        {/* Tombol */}
        <Link to="/home">
          <button
            type="button"
            className="
            mt-3
            w-full
            rounded-xl
            bg-[#8B7CF6]
            py-4
            text-white
            poppins-semibold
            shadow-md
            transition-all
            duration-200
            hover:bg-[#7665F3]
            hover:shadow-lg
            active:scale-[0.98]
          "
          >
            Kirim Ulasan
          </button>
        </Link>
      </div>
    </div>
  );
}
