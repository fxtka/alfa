import { Search, Bell, MessageCircleMore } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MobileSidebar from "@/components/MobileSidebar";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="px-4 xl:px-8 py-4 xl:py-6 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 bg-transparent">
      <div className="flex items-center gap-4 w-full xl:w-auto">
        <MobileSidebar />
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-foreground tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6 w-full xl:w-auto">
        {/* Search Bar */}
        <div className="relative w-full xl:w-80">
          <Input
            type="text"
            placeholder="Search placeholder"
            className="w-full bg-secondary/50 border-none rounded-2xl py-5 text-sm placeholder:text-muted-foreground/60 pr-10 focus-visible:ring-1 focus-visible:ring-sidebar-primary"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>

        {/* Icons & Profile - Wrapper for mobile alignment */}
        <div className="flex items-center justify-between w-full xl:w-auto gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-secondary/50 hover:bg-secondary w-10 h-10 text-muted-foreground"
            >
              <MessageCircleMore className="w-5 h-5" />
            </Button>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-secondary/50 hover:bg-secondary w-10 h-10 text-muted-foreground"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-4 pl-4 ml-auto md:ml-0">
            <div className="text-right hidden md:block">
              <div className="text-sm font-bold text-foreground">
                Andrew Forbist
              </div>
            </div>
            <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Andrew Forbist"
              />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
