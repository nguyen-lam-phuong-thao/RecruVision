import { useState } from "react";
import {
    Home,
    User,
    LifeBuoy,
    ArrowLeftToLine,
    FileUser,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import clsx from "clsx";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={clsx(
                "h-full bg-[#043873] border-r shadow-sm transition-all duration-300 ease-in-out p-4",
                collapsed ? "w-20" : "w-72"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-2 border-b border-white">
                <div className="flex items-center gap-1">
                    {collapsed ?
                        <img
                            onClick={toggleSidebar}
                            src="images/svg/logo.svg"
                            alt="Logo"
                            className={clsx("transition-all cursor-pointer", collapsed ? "w-12 h-12" : "w-14 h-14")}
                        />
                        :
                        <img
                            src="images/svg/logo.svg"
                            alt="Logo"
                            className={clsx("transition-all", collapsed ? "w-10 h-10" : "w-12 h-12")}
                        />
                    }
                    {!collapsed && <h1 className="text-white text-2xl font-bold">RecruVision</h1>}
                </div>

                {!collapsed && (
                    <button onClick={toggleSidebar}>
                        <ArrowLeftToLine className="w-7 h-7 text-white cursor-pointer border-2 border-white rounded-md p-1" />
                    </button>
                )}
            </div>

            {/* Menu */}
            <nav className="mt-4 flex flex-col space-y-2">
                <SidebarItem
                    icon={<Home className="w-5 h-5" />}
                    text="Home"
                    to="/app"
                    collapsed={collapsed}
                />
                <SidebarItem
                    icon={<User className="w-5 h-5" />}
                    text="Profile"
                    to="/profile"
                    collapsed={collapsed}
                />
                <SidebarItem
                    icon={<LifeBuoy className="w-5 h-5" />}
                    text="Support Center"
                    to="/support"
                    collapsed={collapsed}
                />
                <SidebarItem
                    icon={<FileUser className="w-5 h-5" />}
                    text="Resume Builder"
                    to="/app/resume-builder"
                    collapsed={collapsed}
                />
            </nav>
        </div>
    );
};
