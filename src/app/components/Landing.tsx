import { useNavigate } from "react-router";
import { Heart, Users, MessageCircle, Target, ArrowRight } from "lucide-react";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-[#FFE5EC]/20 font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          {/* Logo & Title */}
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full shadow-2xl mb-6">
              <Heart className="w-12 h-12 text-white fill-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              CARE
            </h1>
            <p className="text-xl md:text-2xl text-[#8BA888] font-semibold">
              Jaga si kecil bersama, selangkah demi selangkah
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Platform pendukung kehamilan yang menghubungkan pasangan untuk memberikan
            perhatian dan dukungan terbaik di setiap momen kehamilan
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/auth")}
            className="bg-[#8BA888] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:bg-[#7A9777] transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            Mulai Sekarang
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Decorative waves */}
        <div className="absolute bottom-0 left-0 right-0 opacity-30">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#8BA888"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Kenapa CARE?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F4C7D3] to-[#FFE5EC] rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#E89AAC]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Pantau Perkembangan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lihat perkembangan si kecil setiap minggu dengan visualisasi yang mudah dipahami
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Komunikasi Real-time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bagikan kondisi dan perasaan harian langsung ke pasangan dengan mudah
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Misi AI Harian
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dapatkan saran berbasis AI untuk mendukung istri berdasarkan kondisinya
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-r from-[#8BA888]/10 to-[#F4C7D3]/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Cara Kerjanya
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8BA888] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Pilih Peran
              </h4>
              <p className="text-gray-600">
                Tentukan apakah kamu istri atau suami
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8BA888] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Pairing Pasangan
              </h4>
              <p className="text-gray-600">
                Kirim magic link ke pasangan untuk terhubung
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8BA888] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Mulai Jaga Bersama
              </h4>
              <p className="text-gray-600">
                Bagikan kondisi dan dapatkan support setiap hari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-3xl p-12 shadow-2xl">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap jadi support system terbaik?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pasangan yang sudah merasakan manfaat CARE dalam
            perjalanan kehamilan mereka
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="bg-white text-[#8BA888] px-10 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            Mulai Gratis Sekarang
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 CARE. Jaga si kecil bersama dengan penuh kasih sayang.
          </p>
        </div>
      </footer>
    </div>
  );
}
