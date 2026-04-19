import { useNavigate, useParams } from "react-router";
import { Heart, Users } from "lucide-react";

export function HusbandInvite() {
  const navigate = useNavigate();
  const { wifeName } = useParams();

  const handleAccept = () => {
    navigate("/husband-dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col p-6 font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#8BA888]">CARE</h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 max-w-md mx-auto w-full">
        {/* Wife Avatar */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-[#F4C7D3] to-[#FFE5EC] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            <Heart className="w-16 h-16 text-[#E89AAC]" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#8BA888] rounded-full flex items-center justify-center shadow-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Invitation Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Kamu diundang oleh
          </h2>
          <p className="text-3xl font-bold text-[#8BA888]">{wifeName}</p>
          <p className="text-gray-600 mt-4">
            untuk menjadi support system terbaik dalam perjalanan kehamilan ini
          </p>
        </div>

        {/* Handshake Illustration */}
        <div className="w-24 h-24 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.71 8.71c1.25-1.25.69-2.73 0-3.42l-1-1c-.69-.69-2.17-1.25-3.42 0l-3.58 3.58-1.5-1.5 3.29-3.29c.69-.69.69-1.81 0-2.5-.69-.69-1.81-.69-2.5 0L9.71 4.71 8.21 3.21c-1.25-1.25-2.73-.69-3.42 0l-1 1c-.69.69-1.25 2.17 0 3.42l1.5 1.5-3.58 3.58c-1.25 1.25-.69 2.73 0 3.42l1 1c.69.69 2.17 1.25 3.42 0l3.58-3.58 1.5 1.5-3.29 3.29c-.69.69-.69 1.81 0 2.5.69.69 1.81.69 2.5 0l3.29-3.29 1.5 1.5c1.25 1.25 2.73.69 3.42 0l1-1c.69-.69 1.25-2.17 0-3.42l-1.5-1.5 3.58-3.58z"/>
          </svg>
        </div>
      </div>

      {/* Accept Button */}
      <div className="pt-8 pb-4 max-w-md mx-auto w-full">
        <button
          onClick={handleAccept}
          className="w-full bg-[#8BA888] text-white py-4 rounded-2xl font-semibold text-lg shadow-md hover:bg-[#7A9777] transition-colors"
        >
          Terima Undangan & Pairing
        </button>
      </div>
    </div>
  );
}
