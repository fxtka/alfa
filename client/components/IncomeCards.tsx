import { MoreVertical, TrendingUp, TrendingDown } from "lucide-react";

const DollarIcon = ({ className }: { className?: string }) => (
  <img
    src="/dollar.png"
    alt="Dollar Icon"
    className={`${className} object-contain`}
  />
);

const WalletIcon = ({ className }: { className?: string }) => (
  <img
    src="/wallet.png"
    alt="Wallet Icon"
    className={`${className} object-contain`}
  />
);

const IncomeCards = () => {
  const cards = [
    {
      label: "Total Income",
      amount: "£78,000",
      percentage: "+1.29%",
      trend: "up",
      icon: DollarIcon,
    },
    {
      label: "Total Expense",
      amount: "£43,000",
      percentage: "-2.10%",
      trend: "down",
      icon: DollarIcon,
    },
    {
      label: "Total Savings",
      amount: "£56,000",
      percentage: "+3.24%",
      trend: "up",
      icon: WalletIcon,
    },
  ];

  return (
    <div className="flex flex-wrap items-start gap-[18px] w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="box-border flex-1 min-w-[160px] flex flex-col items-start p-4 gap-[28px] h-[174px] border border-[#E5E9EA] rounded-[16px] bg-white text-black relative"
        >
          {/* Header */}
          <div className="flex flex-row justify-between items-start gap-[10px] w-full h-[36px]">
            {/* Icon Container */}
            <div className="flex flex-row items-start p-2 gap-[10px] w-[36px] h-[36px] bg-[#E5E9EA] rounded-[8px]">
              <card.icon className="w-[20px] h-[20px]" />
            </div>

            {/* Menu Button */}
            <button className="flex flex-row items-start gap-[10px] w-[18px] h-[18px] rounded-[8px] text-black">
              <MoreVertical className="w-[18px] h-[18px]" />
            </button>
          </div>

          {/* Div Balance */}
          <div className="flex flex-col items-start gap-[12px] w-full h-[78px]">
            {/* Badge */}
            <div
              className={`flex flex-row items-center px-1 gap-1 w-[49px] h-[12px] rounded-[15px] ${card.trend === 'up' ? 'bg-[#BBF49C]' : 'bg-[#FDCED1]'
                }`}
            >
              {card.trend === 'up' ? (
                <TrendingUp className="w-[10px] h-[10px] text-black" />
              ) : (
                <TrendingDown className="w-[10px] h-[10px] text-[#F73541]" />
              )}
              <span
                className={`font-urbanist font-medium text-[8px] leading-[130%] ${card.trend === 'up' ? 'text-[#00413D]' : 'text-[#F73541]'
                  }`}
              >
                {card.percentage.replace('+', '').replace('-', '')}
              </span>
            </div>

            {/* Amount */}
            <div className="font-urbanist font-bold text-[24px] leading-[110%] text-black h-[26px]">
              {card.amount}
            </div>

            {/* Title */}
            <div className="font-urbanist font-normal text-[12px] leading-[130%] text-black h-[16px]">
              {card.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncomeCards;
