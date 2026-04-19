import { useState } from "react";
import { useNavigate } from "react-router";
import { Apple, Smile, Frown, Meh, Moon, Angry, Send, CheckCircle } from "lucide-react";

export function WifeDashboard() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [expandedCheckIn, setExpandedCheckIn] = useState(false);

  const moods = [
    { id: "happy", icon: Smile, label: "Senang", color: "text-green-500" },
    { id: "tired", icon: Moon, label: "Lelah", color: "text-blue-500" },
    { id: "nauseous", icon: Frown, label: "Mual", color: "text-purple-500" },
    { id: "anxious", icon: Meh, label: "Cemas", color: "text-orange-500" },
    { id: "moody", icon: Angry, label: "Moody", color: "text-red-500" },
  ];

  const conditions = ["Pusing", "Sakit Pinggang", "Aktif", "Mual", "Oke"];

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const handleSendToHusband = () => {
    setExpandedCheckIn(false);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-['Nunito',sans-serif]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#F4C7D3] to-[#FFE5EC] text-white py-6 px-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Dashboard Bunda</h1>
        <p className="text-sm opacity-90 mt-1">Selamat datang kembali!</p>
      </div>

      {/* Notification Banner */}
      {showNotification && (
        <div className="mx-6 mt-4 bg-gradient-to-r from-[#8BA888] to-[#B8D4B5] text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-[slideDown_0.3s_ease-out]">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <p className="text-sm font-semibold">
            Suami baru saja menyelesaikan misinya untukmu! ❤️
          </p>
        </div>
      )}

      <div className="p-6 space-y-6 max-w-md mx-auto">
        {/* Progress Widget */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
              <svg className="transform -rotate-90" width="160" height="160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#F4C7D3"
                  strokeWidth="12"
                  fill="none"
                  opacity="0.2"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#F4C7D3"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(12 / 40) * 440} 440`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-[#8BA888]">Minggu 12</p>
                <p className="text-xs text-gray-600 mt-1">84 hari</p>
                <p className="text-xs text-gray-500">menuju HPL</p>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-[#F4C7D3] to-[#FFE5EC] p-4 rounded-2xl flex items-center gap-3 w-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Apple className="w-6 h-6 text-[#E89AAC]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Si kecil sekarang sebesar
                </p>
                <p className="text-lg font-bold text-[#8BA888]">Lemon 🍋</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Apa yang terjadi minggu ini?
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-[#F4C7D3]">•</span>
              <span>Organ vital mulai berfungsi dengan sempurna</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#F4C7D3]">•</span>
              <span>Ukuran janin sekitar 5-6 cm dari kepala hingga bokong</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#F4C7D3]">•</span>
              <span>Sidik jari mulai terbentuk pada jari-jari mungil</span>
            </li>
          </ul>
        </div>

        {/* Daily Check-in Card */}
        <div className="bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-3xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">
            Gimana perasaanmu hari ini, Bun?
          </h3>

          {!expandedCheckIn ? (
            <button
              onClick={() => setExpandedCheckIn(true)}
              className="w-full bg-white text-[#8BA888] py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Bagikan Kondisiku
            </button>
          ) : (
            <div className="space-y-5">
              {/* Mood Selection */}
              <div>
                <p className="text-white text-sm font-semibold mb-3">
                  Pilih mood:
                </p>
                <div className="flex justify-between gap-2">
                  {moods.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-2xl transition-all ${
                        selectedMood === mood.id
                          ? "bg-white shadow-lg scale-110"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      <mood.icon
                        className={`w-8 h-8 ${
                          selectedMood === mood.id
                            ? mood.color
                            : "text-white"
                        }`}
                      />
                      <span
                        className={`text-xs ${
                          selectedMood === mood.id
                            ? "text-gray-800 font-semibold"
                            : "text-white"
                        }`}
                      >
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Chips */}
              <div>
                <p className="text-white text-sm font-semibold mb-3">
                  Kondisi fisik:
                </p>
                <div className="flex flex-wrap gap-2">
                  {conditions.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedConditions.includes(condition)
                          ? "bg-white text-[#8BA888] shadow-md"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wishlist Input */}
              <div>
                <p className="text-white text-sm font-semibold mb-2">
                  Wishlist hari ini:
                </p>
                <input
                  type="text"
                  value={wishlist}
                  onChange={(e) => setWishlist(e.target.value)}
                  placeholder="Contoh: Pengen Martabak"
                  className="w-full px-4 py-3 rounded-2xl border-none outline-none text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendToHusband}
                className="w-full bg-white text-[#8BA888] py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kirim ke Suami
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
