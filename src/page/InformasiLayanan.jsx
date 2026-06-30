import { Link } from "react-router-dom";
import kotak_1 from "../assets/InformasiLayanan/kotak_1.png";
import kotak_2 from "../assets/InformasiLayanan/kotak_2.png";
import kotak_3 from "../assets/InformasiLayanan/kotak_3.png";
import kotak_4 from "../assets/InformasiLayanan/kotak_4.png";
import kotak_5 from "../assets/InformasiLayanan/kotak_5.png";
import PanahBawah from "../assets/Navbar/PanahBawah.png";

export default function InformasiLayanan() {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center mx-auto mt-24 md:mt-28 px-4">
      <span className="text-lg poppins-bold text-black text-center">
        Pusat Layanan Konseling POLINES
      </span>

      <div className="flex flex-col space-y-2.5 w-full items-center">
        {/* Kotak 1 */}
        <div className="bg-white shadow-md px-3 md:px-4 py-3 rounded-lg w-full max-w-[95vw] md:max-w-3xl">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
            <div className="flex flex-row items-center space-x-3 md:space-x-5 flex-1 min-w-0">
              <div className="bg-[#F7F6FA] p-2 rounded-lg flex-shrink-0 ml-2">
                <img
                  src={kotak_1}
                  alt="kotak_1"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col text-left text-black min-w-0">
                <span className="text-base md:text-lg poppins-medium">Akademik</span>
                <p className="text-xs md:text-sm poppins-light">
                  Bantuan untuk mengatasi kesulitan belajar, manajemen waktu,
                  stres ujian, dan pengembangan strategi akademik.
                </p>
              </div>
            </div>

            {/* Panah kanan */}
            <Link to="/detail-pemesanan" className="flex-shrink-0 ml-2">
              <img src={PanahBawah} alt="PanahBawah" className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>

        {/* Kotak 2 */}
        <div className="bg-white shadow-md px-3 md:px-4 py-3 rounded-lg w-full max-w-[95vw] md:max-w-3xl">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
            <div className="flex flex-row items-center space-x-3 md:space-x-5 flex-1 min-w-0">
              <div className="bg-[#F7F6FA] p-2 rounded-lg flex-shrink-0 ml-2">
                <img
                  src={kotak_2}
                  alt="kotak_2"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col text-left text-black min-w-0">
                <span className="text-base md:text-lg poppins-medium">Karier</span>
                <p className="text-xs md:text-sm poppins-light">
                  Bimbingan perencanaan karier, pengembangan diri, kesiapan
                  kerja, dan pengambilan keputusan karier.
                </p>
              </div>
            </div>

            {/* Panah kanan */}
            <button className="flex-shrink-0 ml-2">
              <img src={PanahBawah} alt="PanahBawah" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Kotak 3 */}
        <div className="bg-white shadow-md px-3 md:px-4 py-3 rounded-lg w-full max-w-[95vw] md:max-w-3xl">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
            <div className="flex flex-row items-center space-x-3 md:space-x-5 flex-1 min-w-0">
              <div className="bg-[#F7F6FA] p-2 rounded-lg flex-shrink-0 ml-2">
                <img
                  src={kotak_3}
                  alt="kotak_3"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col text-left text-black min-w-0">
                <span className="text-base md:text-lg poppins-medium">
                  Pribadi / Psikologis
                </span>
                <p className="text-xs md:text-sm poppins-light">
                  Dukungan untuk kesehatan mental , kepercayaan diri,
                  pengelolaan emosi, dan pengembangan diri.
                </p>
              </div>
            </div>

            {/* Panah kanan */}
            <button className="flex-shrink-0 ml-2">
              <img src={PanahBawah} alt="PanahBawah" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Kotak 4 */}
        <div className="bg-white shadow-md px-3 md:px-4 py-3 rounded-lg w-full max-w-[95vw] md:max-w-3xl">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
            <div className="flex flex-row items-center space-x-3 md:space-x-5 flex-1 min-w-0">
              <div className="bg-[#F7F6FA] p-2 rounded-lg flex-shrink-0 ml-2">
                <img
                  src={kotak_4}
                  alt="kotak_4"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col text-left text-black min-w-0">
                <span className="text-base md:text-lg poppins-medium">Sosial</span>
                <p className="text-xs md:text-sm poppins-light">
                  Bantuan dalam membangun hubungan sehat, komunikasi efektif,
                  dan mengatasi konflik sosial.
                </p>
              </div>
            </div>

            {/* Panah kanan */}
            <button className="flex-shrink-0 ml-2">
              <img src={PanahBawah} alt="PanahBawah" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Kotak 5 */}
        <div className="bg-[#DBF9E1] shadow-md px-4 py-3 max-w-3xl rounded-lg">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
            <div className="flex flex-row items-center space-x-3 md:space-x-5 flex-1 min-w-0">
              <div className="bg-[#F7F6FA] p-2 rounded-lg flex-shrink-0 ml-2">
                <img
                  src={kotak_5}
                  alt="kotak_5"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div className="flex flex-col text-left text-black min-w-0">
                <span className="text-base md:text-lg poppins-medium">Privasi & Keamanan</span>
                <p className="text-xs md:text-sm poppins-light">
                  Seluruh layanan kami bersifat rahasia dan aman. Data dan Informasi Anda dilindungi sesuai kebijakan privasi POLINES. 
                </p>
              </div>
            </div>

            {/* Panah kanan */}
            <button className="flex-shrink-0 ml-2">
              <img src={PanahBawah} alt="PanahBawah" className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
