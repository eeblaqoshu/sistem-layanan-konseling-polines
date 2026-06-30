import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import InformasiLayanan from "./page/InformasiLayanan";
import BookingBerhasil from "./page/BookingBerhasil";
import DetailPemesanan from "./page/DetailPemesanan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="detail-pemesanan" replace />} />
          <Route path="layanan-informasi" element={<InformasiLayanan />} />
          <Route path="booking-berhasil" element={<BookingBerhasil />}/>
          <Route path="detail-pemesanan" element={<DetailPemesanan />}/>
        </Route>

        <Route
          path="/"
          element={<Navigate to="/detail-pemesanan" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;