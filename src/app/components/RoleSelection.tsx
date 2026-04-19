import { useNavigate } from "react-router";
import { User, Heart } from "lucide-react";

export function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: "wife" | "husband") => {
    navigate(`/profile-setup?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col p-6 font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="text-center pt-8 pb-12">
        <h1 className="text-4xl font-bold text-[#8BA888]">CARE</h1>
        <p className="text-sm text-gray-600 mt-2">Jaga si kecil bersama</p>
      </div>

      {/* Role Cards */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4 max-w-md mx-auto w-full">
        <div
          onClick={() => handleRoleSelect("wife")}
          className="bg-white rounded-3xl p-8 shadow-lg w-full cursor-pointer hover:shadow-xl transition-all active:scale-95 border-2 border-[#F4C7D3]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 bg-gradient-to-br from-[#F4C7D3] to-[#FFE5EC] rounded-full flex items-center justify-center">
              <Heart className="w-16 h-16 text-[#E89AAC]" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Aku Istri</h2>
            <p className="text-sm text-gray-600 text-center">
              Pantau perkembangan si kecil dan bagikan kondisimu
            </p>
          </div>
        </div>

        <div
          onClick={() => handleRoleSelect("husband")}
          className="bg-white rounded-3xl p-8 shadow-lg w-full cursor-pointer hover:shadow-xl transition-all active:scale-95 border-2 border-[#8BA888]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-[#6B8E68]" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Aku Suami</h2>
            <p className="text-sm text-gray-600 text-center">
              Dukung istri dan jadi support system terbaik
            </p>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="pt-8 pb-4 max-w-md mx-auto w-full">
        <button className="w-full bg-[#8BA888] text-white py-4 rounded-2xl font-semibold text-lg shadow-md hover:bg-[#7A9777] transition-colors">
          Lanjut
        </button>
      </div>
    </div>
  );
}
