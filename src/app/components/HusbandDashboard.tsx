import { useState } from "react";
import { useNavigate } from "react-router";
import { Heart, Apple, CheckCircle2, Frown } from "lucide-react";

export function HusbandDashboard() {
  const navigate = useNavigate();
  const [missionComplete, setMissionComplete] = useState(false);

  const handleMissionComplete = () => {
    setMissionComplete(true);
    navigate("/mission-complete");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-['Nunito',sans-serif]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8BA888] to-[#B8D4B5] text-white py-6 px-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Dashboard Ayah</h1>
        <p className="text-sm opacity-90 mt-1">Jadi support terbaik hari ini!</p>
      </div>

      <div className="p-6 space-y-6 max-w-md mx-auto">
        {/* Wife Status Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[#F4C7D3]">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#F4C7D3]" />
            Kondisi Istri Bunda
          </h3>

          <div className="space-y-4">
            {/* Mood Display */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F4C7D3] to-[#FFE5EC] rounded-full flex items-center justify-center">
                <Frown className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Mood hari ini</p>
                <p className="text-xl font-bold text-gray-800">Mual</p>
              </div>
            </div>

            {/* Conditions */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Kondisi fisik:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F4C7D3]/20 text-[#E89AAC] rounded-full text-sm font-medium">
                  Lelah
                </span>
                <span className="px-3 py-1 bg-[#F4C7D3]/20 text-[#E89AAC] rounded-full text-sm font-medium">
                  Mual
                </span>
                <span className="px-3 py-1 bg-[#F4C7D3]/20 text-[#E89AAC] rounded-full text-sm font-medium">
                  Pusing
                </span>
              </div>
            </div>

            {/* Wishlist */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl">
              <p className="text-sm text-gray-600 mb-1">Wishlist hari ini:</p>
              <p className="text-base font-semibold text-gray-800">
                "Pengen Martabak Telur sama Es Teh Manis"
              </p>
            </div>
          </div>
        </div>

        {/* AI Mission Card - Most Prominent */}
        <div className="bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-3xl p-6 shadow-2xl border-4 border-[#8BA888]/30">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            Misi Sayang Hari Ini 🦸‍♂️
          </h3>
          <p className="text-sm text-white/80 mb-4">
            AI sudah analisa kondisi istrimu
          </p>

          <div className="bg-white/95 backdrop-blur rounded-2xl p-5 mb-5">
            <p className="text-gray-800 leading-relaxed text-base">
              <span className="font-bold text-[#8BA888]">Istri kamu lagi mual banget nih.</span>
              <br />
              <br />
              Siapkan air jahe hangat dan pijat pundaknya pelan-pelan ya. Jangan lupa belikan
              martabak telur yang dia mau, tapi ingetin makan sedikit-sedikit dulu biar ga
              tambah mual.
              <br />
              <br />
              Temenin dia istirahat dan bilang "Aku bangga sama kamu Sayang" - dia butuh
              support emosional juga.
            </p>
          </div>

          <button
            onClick={handleMissionComplete}
            disabled={missionComplete}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
              missionComplete
                ? "bg-white/50 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#8BA888] hover:shadow-xl active:scale-95"
            }`}
          >
            <CheckCircle2 className="w-6 h-6" />
            {missionComplete ? "Misi Selesai ✓" : "Tandai Misi Selesai"}
          </button>
        </div>

        {/* Shared Progress */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Perkembangan Si Kecil
          </h3>

          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="transform -rotate-90" width="128" height="128">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#8BA888"
                  strokeWidth="10"
                  fill="none"
                  opacity="0.2"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#8BA888"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={`${(12 / 40) * 352} 352`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-[#8BA888]">Minggu 12</p>
                <p className="text-xs text-gray-600">84 hari lagi</p>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-[#8BA888] to-[#B8D4B5] p-4 rounded-2xl flex items-center gap-3 w-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Apple className="w-6 h-6 text-[#8BA888]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Si kecil sekarang sebesar
                </p>
                <p className="text-lg font-bold text-white">Lemon 🍋</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
