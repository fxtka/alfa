import { MoreVertical } from "lucide-react";

// Mocking the specific icons if not available, using Lucide as close alternatives
// The user asked for "PlusCircle", "CoinIn", "Request", "Clock" for buttons.

const LeftPanel = () => {
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-[283px] shrink-0 mx-auto md:mx-0">
      {/* === Credit Card === */}
      {/* Aspect ratio maintenance is tricky with fixed height, using css aspects or min-height */}
      <div className="relative w-full aspect-[283/372] max-h-[372px] md:h-[372px] gap-[48px] bg-[#00413D] rounded-[30px] p-[2px] flex flex-col justify-between shadow-2xl shrink-0 overflow-hidden box-border mx-auto md:mx-0">
        {/* Top Section: Chip & Contactless */}
        <div className="w-full flex justify-between items-start px-6 pt-8">
          {/* Silicon Chip */}
          <div className="w-[43px] h-[60px] rounded-[6px] relative overflow-hidden">
            <img
              src="/Silicon Chip.svg"
              alt="Silicon Chip"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contactless Icon */}
          <div className="opacity-90">
            <img
              src="/rfid.svg"
              alt="Contactless"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute top-[42%] left-1/2 h-[99px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center ">
          <img
            src="/card-font.svg"
            alt="Alfa Logo"
            width={120}
            height={120}
            className="object-contain"
            style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
          />
        </div>

        {/* Bottom Section */}
        <div
          className="w-full h-[86px] bg-[#A0C8C8] rounded-b-[28px] rounded-t-[28px] flex items-center justify-between px-6 mx-auto mb-0 relative z-10"
          style={{ width: "calc(100% - 4px)", marginBottom: "2px" }}
        >
          {/* Text Info */}
          <div className="flex flex-col justify-center gap-1">
            <div className="text-[#00211A] text-[24px] font-bold leading-none tracking-tight">
              Alfa
            </div>
            <div className="text-[#00211A] text-[15px] font-medium tracking-wide opacity-90">
              EXP 09/24
            </div>
          </div>

          {/* Mastercard Logo */}
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#EB001B]"></div>
            <div className="w-10 h-10 rounded-full bg-[#F79E1B] -ml-6 mix-blend-multiply opacity-95"></div>
            <span className="absolute text-white font-bold text-[6px] tracking-widest drop-shadow-md z-20 mt-[2px]">
              MasterCard
            </span>
          </div>
        </div>
      </div>

      {/* === Spending / Daily Limit Section === */}
      <div className="w-full h-[107px] border border-[#E5E9EA] rounded-[16px] p-4 flex flex-col gap-5 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center h-[19px]">
          <span className="text-[16px] font-bold text-black font-urbanist">
            Daily Limit
          </span>
          <button className="w-[18px] h-[18px] flex items-center justify-center text-black">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Bar Chart Section */}
        <div className="flex flex-col gap-3">
          {/* Labels */}
          <div className="flex justify-between items-end h-[16px]">
            <div className="flex items-baseline gap-1">
              <span className="text-[12px] font-semibold text-black font-urbanist">
                £2,500
              </span>
              <span className="text-[10px] font-normal text-black font-urbanist">
                spent of £20,000
              </span>
            </div>
            <span className="text-[12px] font-semibold text-black font-urbanist">
              12%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-[#BBF49C] rounded-full overflow-hidden">
            <div className="w-[12%] h-full bg-[#00413D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
