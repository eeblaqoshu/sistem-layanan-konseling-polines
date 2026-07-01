import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import InformasiLayanan from "./page/InformasiLayanan";
import BookingBerhasil from "./page/BookingBerhasil";
import DetailPemesanan from "./page/DetailPemesanan";
import Dashboard from "./page/Dashboard";
import DetailJadwalKonselor from "./page/DetailJadwalKonselor";
import Konseling from "./page/Konseling";
import DaftarKonselor from "./page/DaftarKonselor";
import MetodeKonseling from "./page/PilihMetode";
import RiwayatKonseling from "./page/RiwayatKonseling";
import CatatanKonseling from "./page/CatatanKonseling";
import Feedback from "./page/Feedback";
import Splash from "./page/Splash";
import Login from "./page/Login";
import Profile from "./page/Profile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Halaman tanpa Navbar/Footer */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/splash" element={<Splash />} />

        {/* Halaman dengan Navbar/Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="detail-jadwal" element={<DetailJadwalKonselor />} />
          <Route path="layanan-informasi" element={<InformasiLayanan />} />
          <Route path="booking-berhasil" element={<BookingBerhasil />} />
          <Route path="detail-pemesanan" element={<DetailPemesanan />} />
          <Route path="konselor" element={<DaftarKonselor />} />
          <Route path="metode-kamu" element={<MetodeKonseling />} />
          <Route path="riwayat-konseling" element={<RiwayatKonseling />} />
          <Route path="catatan-konseling" element={<CatatanKonseling />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="konseling" element={<Konseling />} />
        </Route>

        <Route path="feedback" element={<Feedback />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
