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
} from "lucide-react";

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#F9FAFD]">
            <div className="mx-auto w-full max-w-7xl px-28 pt-5 pb-12">

                {/* hero */}
                <div className="flex items-center justify-between gap-16">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-extrabold text-[#1F1F1F] leading-tight">
                            Halo, Lukman Setiawan!
                        </h1>
                        <p className="mt-5 text-lg leading-8 text-black">Kesehatan mentalmu penting.<br />Kami siap mendengarkan dan membantu kamu
                            <br />
                            menjadi versi terbaik dirimu.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <img src="/assets/img/hero.png" alt="Gambar orang" className="w-85 object-contain mr-10"
                        />
                    </div>
                </div>
                {/* jadwal tdk */}
                <div className="mt-5 rounded-3xl bg-white px-8 py-6 shadow-md">
                    <h2 className="text-xl font-bold text-[#1F1F1F]">
                        Jadwal Terdekat
                    </h2>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <CalendarDays
                                size={58}
                                strokeWidth={1.8}
                                className="text-[#8D7AD6]"
                            />
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <CalendarDays
                                        size={18}
                                        className="text-[#8D7AD6]"
                                    />
                                    <span className="text-[15px]">
                                        Rabu, 1 Juli 2026
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock3
                                        size={18}
                                        className="text-[#8D7AD6]"
                                    />
                                    <span className="text-[15px]">
                                        10.00 - 10.50 WIB
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* dr */}
                        <div className="flex items-center gap-2">
                            <CircleUserRound
                                size={20}
                                className="text-[#8D7AD6]"
                            />
                            <span className="text-[15px]">
                                Rina Wulandari, M.Psi.
                            </span>
                        </div>
                        {/* st */}
                        <button className="rounded-lg bg-[#E9E0FF] px-7 py-2 text-sm font-semibold text-[#7B61FF]">
                            Tatap Muka
                        </button>
                        {/* det */}
                        <button className="rounded-lg bg-[#7B61FF] px-8 py-3 font-semibold text-white transition hover:bg-[#6D52F5]">
                            Lihat Detail
                        </button>
                    </div>
                </div>
                {/* menu */}
                <div className="mt-6 grid grid-cols-4 gap-5">
                    {/* buat jdw */}
                    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1">
                        <div className="flex justify-center">
                            <CalendarDays
                                size={60}
                                strokeWidth={1.8}
                                className="text-[#8D7AD6]"
                            />
                        </div>
                        <h3 className="mt-5 text-center text-lg font-bold">
                            Buat Jadwal
                        </h3>
                        <p className="mt-1 text-center text-sm text-gray-500">
                            Booking sesi baru
                        </p>
                    </div>
                    {/* info */}
                    <div className="rounded-2xl bg-[#F5FFF2] p-6 shadow-md transition hover:-translate-y-1">
                        <div className="flex justify-center">
                            <Info size={60} strokeWidth={2} className="rounded-full bg-[#4F7DF3] p-2 text-white" />
                        </div>
                        <h3 className="mt-5 text-center text-lg font-bold">Informasi Layanan</h3>
                        <p className="mt-1 text-center text-sm text-gray-500">Lihat jenis layanan</p>
                    </div>
                    {/* hisroty */}
                    <div className="rounded-2xl bg-[#F1FFE9] p-6 shadow-md transition hover:-translate-y-1">
                        <div className="flex justify-center">
                            <History size={60} strokeWidth={2} className="text-[#2CB72C]" />
                        </div>
                        <h3 className="mt-5 text-center text-lg font-bold">Riwayat Konseling</h3>
                        <p className="mt-1 text-center text-sm text-gray-500">Riwayat sesi Anda</p>
                    </div>
                    {/* chat */}
                    <div className="rounded-2xl bg-[#FFF5F5] p-6 shadow-md transition hover:-translate-y-1">
                        <div className="flex justify-center">
                            <MessageCircleMore size={60} strokeWidth={2} className="text-[#FF4B6E]" />
                        </div>
                        <h3 className="mt-5 text-center text-lg font-bold">Chat / Darurat</h3>
                        <p className="mt-1 text-center text-sm text-gray-500">Butuh bantuan cepat?</p>
                    </div>
                </div>
                {/* benefit */}
                <div className="mt-6 grid grid-cols-3 gap-5">
                    {/* anam */}
                    <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
                        <div className="rounded-full bg-[#F3F1FB] p-4">
                            <Shield size={34} className="text-[#8D7AD6]" />
                        </div>
                        <div>
                            <h3 className="font-bold"> Aman & Rahasia</h3>
                            <p className="mt-1 text-sm text-gray-500">Privasi Anda adalah prioritas kami.</p>
                        </div>
                    </div>
                    {/* ez */}
                    <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
                        <div className="rounded-full bg-[#F3F1FB] p-4">
                            <Smartphone size={34} className="text-[#8D7AD6]"/>
                        </div>
                        <div>
                            <h3 className="font-bold">Mudah Diakses</h3>
                            <p className="mt-1 text-sm text-gray-500">Layanan kapan saja, <br /> di mana saja.</p>
                        </div>
                    </div>
                    {/* prof */}
                    <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md">
                        <div className="rounded-full bg-[#F3F1FB] p-4">
                            <Users size={34} className="text-[#8D7AD6]" />
                        </div>
                        <div>
                            <h3 className="font-bold">Profesional</h3>
                            <p className="mt-1 text-sm text-gray-500">Dibimbing oleh <br/>konselor kompeten.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;