import { useNavigate } from "react-router";
import { CheckCircle, Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function MissionComplete() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] flex flex-col items-center justify-center p-6 font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-[fall_3s_linear_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 20}px`,
              }}
            >
              {["🎉", "✨", "❤️", "🎊", "⭐"][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {/* Success Content */}
      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-20 h-20 text-[#8BA888]" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Misi Selesai!
          </h1>
          <p className="text-xl text-white/90 leading-relaxed px-4">
            Terima kasih sudah jadi support system terbaik!
          </p>
          <p className="text-base text-white/80 px-4">
            Istrimu akan segera diberi tahu.
          </p>
        </div>

        {/* Heart Icon */}
        <div className="flex justify-center gap-2 pt-4">
          <Heart className="w-8 h-8 text-[#F4C7D3] fill-[#F4C7D3] animate-pulse" />
          <Heart className="w-8 h-8 text-white fill-white animate-pulse delay-100" />
          <Heart className="w-8 h-8 text-[#F4C7D3] fill-[#F4C7D3] animate-pulse delay-200" />
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/husband-dashboard")}
          className="w-full bg-white text-[#8BA888] py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 mt-8"
        >
          Kembali ke Dashboard
        </button>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
