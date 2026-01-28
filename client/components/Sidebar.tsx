import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#013026] text-white flex flex-col z-50 p-4 border-none">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
