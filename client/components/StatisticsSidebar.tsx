import { ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

const StatisticsSidebar = () => {
  const [activeTab, setActiveTab] = useState<"income" | "expense">("expense");

  const expenseData = [
    {
      name: "Rent & Living",
      value: 2100,
      color: "#013026",
      percentage: "60%",
      textColor: "white",
    },
    {
      name: "Investment",
      value: 525,
      color: "#BBF49C",
      percentage: "15%",
      textColor: "#013026",
    },
    {
      name: "Education",
      value: 420,
      color: "#EEF3E9",
      percentage: "12%",
      textColor: "#013026",
    },
    {
      name: "Food & Drink",
      value: 280,
      color: "#E5E9EA",
      percentage: "8%",
      textColor: "#013026",
    },
  ];

  const incomeData = [
    {
      name: "Salary",
      value: 3200,
      color: "#013026",
      percentage: "67%",
      textColor: "white",
    },
    {
      name: "Freelance",
      value: 1200,
      color: "#BBF49C",
      percentage: "25%",
      textColor: "#013026",
    },
    {
      name: "Investments",
      value: 400,
      color: "#EEF3E9",
      percentage: "8%",
      textColor: "#013026",
    },
  ];

  const pieData = activeTab === "expense" ? expenseData : incomeData;
  const totalAmount = activeTab === "expense" ? "£3,500" : "£4,800";
  const label = activeTab === "expense" ? "Total Expense" : "Total Income";

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Statistic Chart Card */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#E5E9EA] h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[20px] font-bold text-[#013026] font-urbanist">
            Statistic
          </h3>
          <button className="flex items-center gap-1 text-[14px] font-medium text-[#013026] font-urbanist hover:opacity-80">
            This Month <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-end mb-6 w-full">
          <div
            onClick={() => setActiveTab("income")}
            className={`flex-1 pb-2 text-center cursor-pointer ${activeTab === "income" ? "border-b-2 border-[#BBF49C] relative top-[1px]" : "border-b border-[#E5E9EA]"}`}
          >
            <span
              className={`${activeTab === "income" ? "text-[#013026] font-bold" : "text-[#9A9FA5] font-medium"} font-urbanist text-[16px]`}
            >
              Income <span className="text-[12px] font-normal hidden sm:inline">(£4,800)</span>
            </span>
          </div>
          <div
            onClick={() => setActiveTab("expense")}
            className={`flex-1 pb-2 text-center cursor-pointer ${activeTab === "expense" ? "border-b-2 border-[#BBF49C] relative top-[1px]" : "border-b border-[#E5E9EA]"}`}
          >
            <span
              className={`${activeTab === "expense" ? "text-[#013026] font-bold" : "text-[#9A9FA5] font-medium"} font-urbanist text-[16px]`}
            >
              Expense <span className="text-[12px] font-normal hidden sm:inline">(£3,500)</span>
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-[200px] mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={85}
                paddingAngle={0}
                dataKey="value"
                cornerRadius={0}
                stroke="white"
                strokeWidth={4}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
            <div className="text-[12px] text-[#9A9FA5] font-urbanist font-medium mb-1">
              {label}
            </div>
            <div className="text-[28px] font-bold text-[#013026] font-urbanist leading-none">
              {totalAmount}
            </div>
          </div>
        </div>

        {/* Legend List */}
        <div className="space-y-3">
          {pieData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Badge */}
                <div
                  className="w-[42px] h-[28px] rounded-[8px] flex items-center justify-center text-[12px] font-bold font-urbanist"
                  style={{ backgroundColor: item.color, color: item.textColor }}
                >
                  {item.percentage}
                </div>
                <span className="text-[16px] font-medium text-[#013026] font-urbanist">
                  {item.name}
                </span>
              </div>
              <span className="text-[16px] font-bold text-[#013026] font-urbanist">
                £{item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSidebar;
