import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { User, Calendar, Baby, ArrowRight } from "lucide-react";

export function ProfileSetup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "wife";
  const isWife = role === "wife";

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    pregnancyWeek: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store data in localStorage for demo purposes
    localStorage.setItem("userData", JSON.stringify({ ...formData, role }));

    // Navigate based on role
    if (isWife) {
      navigate("/wife-pairing");
    } else {
      navigate("/husband-pairing");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col p-6 font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#8BA888]">CARE</h1>
        <p className="text-sm text-gray-600 mt-2">
          {isWife ? "Setup Profil Bunda" : "Setup Profil Ayah"}
        </p>
      </div>

      {/* Form Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${
                isWife
                  ? "from-[#F4C7D3] to-[#FFE5EC]"
                  : "from-[#8BA888] to-[#B8D4B5]"
              } rounded-full flex items-center justify-center shadow-lg`}>
                <User className={`w-10 h-10 ${
                  isWife ? "text-[#E89AAC]" : "text-white"
                }`} />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Lengkapi Data Diri
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Kami butuh beberapa informasi untuk personalisasi pengalaman kamu
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 pl-1">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#8BA888] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Age Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 pl-1">
                  Usia
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Masukkan usia"
                    required
                    min="18"
                    max="60"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#8BA888] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Pregnancy Week Field - Only for Wife */}
              {isWife && (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 pl-1">
                    Usia Kandungan (Minggu)
                  </label>
                  <div className="relative">
                    <Baby className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="pregnancyWeek"
                      value={formData.pregnancyWeek}
                      onChange={handleChange}
                      placeholder="Contoh: 12"
                      required
                      min="1"
                      max="42"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#8BA888] focus:outline-none transition-colors"
                    />
                  </div>
                  <p className="text-xs text-gray-500 pl-1">
                    Masukkan usia kehamilan dalam minggu (1-42)
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-gradient-to-r ${
                  isWife
                    ? "from-[#F4C7D3] to-[#FFE5EC]"
                    : "from-[#8BA888] to-[#B8D4B5]"
                } text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2`}
              >
                Lanjutkan
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Back Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/onboarding")}
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
