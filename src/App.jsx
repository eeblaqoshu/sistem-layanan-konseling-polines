import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import InformasiLayanan from "./page/InformasiLayanan";
import BookingBerhasil from "./page/BookingBerhasil";
import DetailPemesanan from "./page/DetailPemesanan";
import Dashboard from "./page/Dashboard";
import DetailJadwalKonselor from "./page/DetailJadwalKonselor";
import Konseling from "./page/Konseling";
import Splash from "./page/Splash";
import Login from "./page/Login";
import Profile from "./page/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman tanpa Navbar/Footer */}
        <Route path="/" element={<Navigate to="/splash" replace />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />

        {/* Halaman dengan Navbar/Footer */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="detail-jadwal" element={<DetailJadwalKonselor />} />
          <Route path="layanan-informasi" element={<InformasiLayanan />} />
          <Route path="booking-berhasil" element={<BookingBerhasil />} />
          <Route path="detail-pemesanan" element={<DetailPemesanan />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;