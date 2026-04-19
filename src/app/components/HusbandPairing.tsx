import { useState } from "react";
import { useNavigate } from "react-router";
import { Link2, KeyRound, ArrowRight } from "lucide-react";

export function HusbandPairing() {
  const navigate = useNavigate();
  const [pairingCode, setPairingCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock validation - in real app, this would verify the code with backend
    if (pairingCode.length >= 6) {
      // Store pairing info
      localStorage.setItem("pairingCode", pairingCode);
      localStorage.setItem("isPaired", "true");

      navigate("/husband-dashboard");
    } else {
      alert("Kode pairing minimal 6 karakter");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col p-6 font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#8BA888]">CARE</h1>
        <p className="text-sm text-gray-600 mt-2">Pairing dengan Istri</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center shadow-lg">
                <Link2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Masukkan Kode Pairing
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Minta kode pairing dari istrimu untuk terhubung
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pairing Code Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 pl-1">
                  Kode Pairing
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={pairingCode}
                    onChange={(e) => setPairingCode(e.target.value.toUpperCase())}
                    placeholder="Masukkan kode pairing"
                    required
                    minLength={6}
                    maxLength={12}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#8BA888] focus:outline-none transition-colors text-center text-2xl font-bold tracking-wider uppercase"
                  />
                </div>
                <p className="text-xs text-gray-500 pl-1">
                  Contoh: ABC123 atau CARE2024
                </p>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-r from-[#8BA888]/10 to-[#B8D4B5]/10 p-4 rounded-2xl border-2 border-[#8BA888]/20">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">💡 Tips:</span> Kode pairing bisa didapatkan dari
                  istri yang sudah membuat akun terlebih dahulu
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8BA888] to-[#B8D4B5] text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                Hubungkan Akun
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-500">atau</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Alternative Option */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                Belum punya kode pairing?
              </p>
              <button
                type="button"
                onClick={() => navigate("/husband-dashboard")}
                className="text-[#8BA888] font-semibold hover:text-[#7A9777] transition-colors"
              >
                Lewati untuk sekarang →
              </button>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/profile-setup?role=husband")}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
