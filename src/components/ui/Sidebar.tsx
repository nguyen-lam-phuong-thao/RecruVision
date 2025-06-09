import { useState } from "react";
import {
    Home,
    User,
    LifeBuoy,
    ArrowLeftToLine,
    FileUser,
    ChevronsRight,
    Route,
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
            <div className="flex items-center justify-between p-2">
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
            <nav className="flex flex-col h-[calc(100%-80px)]">
                <div className="flex flex-col space-y-2">
                    <SidebarItem
                        icon={<Home className="w-5 h-5" />}
                        text="Home"
                        to="/app"
                        collapsed={collapsed}
                    />
                    <div className="border-b border-white mb-2"></div>
                    <SidebarItem
                        icon={<FileUser className="w-5 h-5" />}
                        text="Resume Builder"
                        to="/app/resume-builder"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        icon={<ChevronsRight className="w-5 h-5" />}
                        text="Job Tracker"
                        to="/app/job-tracker"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        icon={<FileUser className="w-5 h-5" />}
                        text="Interview Practice"
                        to="/app/interview-practice"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        icon={<Route className="w-5 h-5"/>}
                        text="Career Path"
                        to="/app/career-path"
                        collapsed={collapsed}
                    />
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col space-y-2">
                    <SidebarItem
                        icon={<LifeBuoy className="w-5 h-5" />}
                        text="Support Center"
                        to="/app/support-center"
                        collapsed={collapsed}
                    />
                    <SidebarItem
                        icon={<User className="w-5 h-5" />}
                        text="Profile"
                        to="/app/profile"
                        collapsed={collapsed}
                    />
                </div>
            </nav>
        </div>
    );
};
