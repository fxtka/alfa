import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutGrid, Lock, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SidebarContent = () => {
    const [isTransferOpen, setIsTransferOpen] = useState(true);

    return (
        <div className="flex flex-col h-full text-white">
             {/* Logo Section */}
            <div className="px-2 mb-8 mt-2">
                <img src="/sidebar-header.svg" alt="Alfa" className="h-10 w-auto" />
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto space-y-2 pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Dashboard - Active */}
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#c3f0b2] text-[#013026] font-semibold transition-all shadow-sm"
                >
                    <LayoutGrid className="w-5 h-5" />
                    <span className="text-sm">Dashboard</span>
                </Link>

                {/* Transfer - Collapsible */}
                <div className="space-y-1">
                    <div
                        onClick={() => setIsTransferOpen(!isTransferOpen)}
                        className="flex items-center justify-between px-4 py-2 text-white/90 hover:text-white cursor-pointer select-none"
                    >
                        <div className="flex items-center gap-3">
                            <img src="/transfer.svg" alt="Transfer" className="w-5 h-5" />
                            <span className="text-sm font-medium">Transfer</span>
                        </div>
                        <ChevronDown
                            className={cn(
                                "w-4 h-4 opacity-70 transition-transform duration-200",
                                isTransferOpen ? "rotate-180" : "",
                            )}
                        />
                    </div>

                    {/* Submenu with line */}
                    {isTransferOpen && (
                        <div className="relative pl-4 ml-6 border-l border-white/20 space-y-4 py-2 animate-accordion-down">
                            <div className="text-sm text-white/80 hover:text-white cursor-pointer pl-4">
                                Add Money
                            </div>
                            <div className="text-sm text-white/80 hover:text-white cursor-pointer pl-4">
                                Transfer
                            </div>
                            <div className="text-sm text-white/80 hover:text-white cursor-pointer pl-4">
                                Request
                            </div>
                            <div className="text-sm text-white/80 hover:text-white cursor-pointer pl-4">
                                History
                            </div>
                        </div>
                    )}
                </div>

                {/* Other Items */}
                {[
                    { img: "/cards.svg", label: "Cards", href: "/cards" },
                    { img: "/invoices.svg", label: "Invoices", href: "/invoices" },
                    { img: "/savings.svg", label: "Saving Plans", href: "/saving-plans" },
                    { img: "/schedules.svg", label: "Schedules", href: "/schedules" },
                    { img: "/calender.svg", label: "Calendar", href: "/calendar" },
                    {
                        img: "/withdrawls.svg",
                        label: "Withdrawals",
                        href: "/withdrawals",
                    },
                    { img: "/help.svg", label: "Help & Support", href: "/help" },
                    { img: "/help.svg", label: "Deposits", href: "/deposits" },
                ].map((item: any, index) => (
                    <Link
                        key={index}
                        to={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                        {item.img ? (
                            <img src={item.img} alt={item.label} className="w-5 h-5" />
                        ) : (
                            <item.icon className="w-5 h-5" />
                        )}
                        <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* Get Pro Card */}
            <div className="relative mt-4 p-5 rounded-2xl bg-[#9fbfa9] border border-white/10 overflow-hidden shadow-lg mb-4">
                {/* Decorative Wave - pseudo element representation or SVG */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#013026]/10 rounded-bl-full -mr-4 -mt-4 transform rotate-12"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#013026]/5 rounded-bl-full z-0"></div>

                <div className="relative z-10 w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Lock className="w-5 h-5 text-[#013026]" />
                </div>

                <p className="relative z-10 text-xs text-[#013026] leading-relaxed mb-4 font-medium pr-2">
                    Gain full access to your finances with detailed analytics and graphs
                </p>

                <Button className="relative z-10 w-full bg-[#c3f0b2] text-[#013026] hover:bg-[#b0e0a0] font-bold text-sm h-10 rounded-xl shadow-sm border-none">
                    Get Pro
                </Button>
            </div>
        </div>
    );
};

export default SidebarContent;
