import { useNavigate } from "react-router";
import { MessageCircle, Copy, Heart, Link2 } from "lucide-react";

export function WifePairing() {
  const navigate = useNavigate();
  const wifeName = "Sarah";
  const magicLink = `${window.location.origin}/husband-invite/${wifeName}`;

  const handleShareWhatsApp = () => {
    const message = `Halo Sayang! Ayo pakai CARE bareng untuk jaga si kecil kita. Klik link ini ya: ${magicLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCopyLink = () => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = magicLink;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Link berhasil disalin!");
    } catch (err) {
      alert(`Link: ${magicLink}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col p-6 font-['Poppins',sans-serif]">
      {/* Header */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-3xl font-bold text-[#8BA888]">CARE</h1>
      </div>

      {/* Illustration & Content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4 max-w-md mx-auto w-full">
        {/* Connection Illustration */}
        <div className="relative w-full max-w-xs">
          <div className="flex justify-between items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#F4C7D3] to-[#FFE5EC] rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-[#E89AAC]" />
            </div>
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="w-full h-1 bg-gradient-to-r from-[#F4C7D3] via-[#8BA888] to-[#8BA888] rounded-full relative">
                <Link2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-[#8BA888] bg-white rounded-full p-1" />
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-[#8BA888] to-[#B8D4B5] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-[#6B8E68]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Ajak Suami Bergabung
          </h2>
          <p className="text-gray-600">
            Ajak Suami bergabung untuk menjaga si kecil bersama
          </p>
        </div>

        {/* WhatsApp Share Button */}
        <button
          onClick={handleShareWhatsApp}
          className="w-full bg-[#25D366] text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-3"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
          Bagikan Magic Link
        </button>

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="text-[#8BA888] font-medium flex items-center gap-2 hover:text-[#7A9777] transition-colors"
        >
          <Copy className="w-4 h-4" />
          Salin Link Manual
        </button>

        {/* Skip for now */}
        <button
          onClick={() => navigate("/wife-dashboard")}
          className="text-gray-500 text-sm mt-4 hover:text-gray-700"
        >
          Lewati untuk sekarang
        </button>
      </div>
    </div>
  );
}
