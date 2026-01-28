import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SidebarContent from "./SidebarContent";
import { useState } from "react";

const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden text-muted-foreground hover:bg-transparent">
                    <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-[#013026] border-r-[#013026] text-white w-72">
                <div className="h-full p-4">
                    <SidebarContent />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
