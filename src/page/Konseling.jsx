import { useState } from "react";
import {
  PhoneOff,
  Mic,
  Video,
  VideoOff,
  MonitorUp,
  SendHorizontal,
  PanelRightClose,
  PanelRightOpen
} from "lucide-react";

function Konseling() {
  const [cameraOn, setCameraOn] = useState(true);
  const [chatExpanded, setChatExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-[#F9FAFD]">
      <div className="mx-auto w-full max-w-7xl px-20 pb-10 pt-25">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/img/psikolog.png" alt="Psikolog" className="h-14 w-14 rounded-full object-cover" />

            <div>
              <h2 className="text-base font-bold text-[#1F1F1F]">
                Rina Wulandari , M.Psi., Psikolog
              </h2>

              <div className="mt-1 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2DBE3F]"></div>
                <span className="text-xs text-[#555]">Online</span>
              </div>
            </div>
          </div>

          <button className="rounded-xl border border-[#E4E4E4] bg-white px-8 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
            Akhiri Sesi
          </button>
        </div>

        <div
          className={`mt-8 grid gap-5 transition-all duration-300 ${
            chatExpanded ? "grid-cols-[2fr_1fr]" : "grid-cols-[1fr_70px]"
          }`}
        >

          {/* call */}
          <div className="rounded-2xl bg-white p-5 shadow-md">

            <div className="overflow-hidden rounded-2xl">
                {cameraOn ? (
                    <img
                    src="/assets/img/video-call.png"
                    alt="Video Call"
                    className={`w-full object-cover transition-all duration-300 ${
                        chatExpanded ? "h-90" : "h-125"
                    }`}
                    />
                ) : (
                    <div
                    className={`flex w-full flex-col items-center justify-center bg-linear-to-br from-[#ECE8FF] to-[#D8E4FF] transition-all duration-300 ${
                        chatExpanded ? "h-90" : "h-125"
                    }`}
                    >
                    <img
                        src="/assets/img/psikolog.png"
                        alt="Psikolog"
                        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                    />

                    <p className="mt-5 text-lg font-semibold">
                        Kamera Dimatikan
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        Rina Wulandari, M.Psi.
                    </p>
                    </div>
                )}
                </div>

            {/* ctrl */}
            <div className="mt-5 flex items-center justify-center gap-5">
              <button className="rounded-full bg-[#F3F4F6] p-4 transition hover:bg-[#E5E7EB]">
                <Mic size={22} />
              </button>
              <button
                onClick={() => setCameraOn(!cameraOn)}
                className={`rounded-full p-4 transition ${
                  cameraOn
                    ? "bg-[#F3F4F6] hover:bg-[#E5E7EB]"
                    : "bg-[#7B61FF] text-white"
                }`}
              >
                {cameraOn ? <Video size={22} /> : <VideoOff size={22} />}
              </button>
              <button className="rounded-full bg-[#F3F4F6] p-4 transition hover:bg-[#E5E7EB]">
                <MonitorUp size={22} />
              </button>
              <button className="rounded-full bg-[#EF4444] p-4 text-white transition hover:bg-red-600">
                <PhoneOff size={22} />
              </button>
            </div>
          </div>

          {/* chat */}
          <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className={`${chatExpanded ? "block" : "hidden"} text-base font-bold`}>
                Chat
              </h2>
              <button onClick={() => setChatExpanded(!chatExpanded)}>
                {chatExpanded ? (
                  <PanelRightClose size={18} className="text-gray-500" />
                ) : (
                  <PanelRightOpen size={18} className="text-gray-500" />
                )}
              </button>
            </div>
            {chatExpanded && (
              <>
                <div className="mt-5 flex-1 space-y-4 overflow-y-auto">
                  <div className="max-w-[85%] rounded-2xl bg-[#F3F4F6] px-4 py-3 text-xs">
                    Halo Lukman, apakah suara saya terdengar dengan jelas?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl bg-[#7B61FF] px-4 py-3 text-xs text-white">
                    Iya Bu, terdengar dengan jelas.
                  </div>
                  <div className="max-w-[85%] rounded-2xl bg-[#F3F4F6] px-4 py-3 text-xs">
                    Baik. Bagaimana kondisi Anda hari ini?
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl bg-[#7B61FF] px-4 py-3 text-xs text-white">
                    Saya cukup cemas menghadapi sidang tugas akhir.
                  </div>
                  <div className="max-w-[85%] rounded-2xl bg-[#F3F4F6] px-4 py-3 text-xs">
                    Tidak apa-apa. Kita bahas bersama secara perlahan ya.
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Tulis pesan..."
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-xs outline-none focus:border-[#7B61FF]"
                  />
                  <button className="rounded-xl bg-[#7B61FF] p-3 text-white transition hover:bg-[#6A53E8]">
                    <SendHorizontal size={18} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Konseling;