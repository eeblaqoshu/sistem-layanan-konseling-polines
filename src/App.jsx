import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import InformasiLayanan from "./page/InformasiLayanan";
import BookingBerhasil from "./page/BookingBerhasil";
import DetailPemesanan from "./page/DetailPemesanan";
import Dashboard from "./page/Dashboard";
import DetailJadwalKonselor from "./page/DetailJadwalKonselor";
import Konseling from "./page/Konseling";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="detail-jadwal" element={<DetailJadwalKonselor />} />
          <Route path="layanan-informasi" element={<InformasiLayanan />} />
          <Route path="booking-berhasil" element={<BookingBerhasil />}/>
          <Route path="detail-pemesanan" element={<DetailPemesanan />}/>
        </Route>

        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
  
export default App