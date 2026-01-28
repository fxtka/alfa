import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import IncomeCards from "@/components/IncomeCards";
import StatisticsSidebar from "@/components/StatisticsSidebar";
import LeftPanel from "@/components/LeftPanel";

export default function Index() {
  return (
    <div className="flex min-h-screen bg-[#013026] text-foreground overflow-x-hidden xl:overflow-hidden xl:h-screen">
      {/* Sidebar - Fixed on Desktop */}
      <div className="hidden xl:block w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-[calc(100vh-1rem)] xl:h-full overflow-hidden bg-white rounded-t-[24px] xl:rounded-l-[24px] xl:rounded-tr-none shadow-2xl relative z-10 my-4 xl:my-0 mr-4 xl:mr-0 ml-4 xl:ml-0">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 xl:p-[28px] pt-0">
          <div className="flex flex-col xl:flex-row gap-[12px] max-w-[1600px] mx-auto min-h-min pb-8 lg:pb-0">
            {/* Left Column (Credit Card & Actions) */}
            <div className="shrink-0 w-full xl:w-auto flex justify-center xl:block">
              <LeftPanel />
            </div>

            {/* Middle Column (Charts & Tables) */}
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <IncomeCards />
            </div>

            {/* Right Column (Statistics) */}
            {/* On small/medium screens, this stacks below. On 2xl it goes to right. */}
            <div className="w-full 2xl:w-80 shrink-0 mt-8 2xl:mt-0 px-4 md:px-0">
              <StatisticsSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
