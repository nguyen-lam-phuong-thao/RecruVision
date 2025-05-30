import { clsx } from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    to: string;
    collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    text,
    to,
    collapsed,
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = location.pathname === to;

    const handleClick = () => {
        navigate(to);
    };

    return (
        <div
        onClick={handleClick}
            className={clsx(
                "flex items-center px-4 py-2 hover:bg-[#4F9CF9] cursor-pointer transition-all rounded-md",
                collapsed ? "justify-center" : "justify-start",
                isActive ? "bg-[#4F9CF9] text-white" : "hover:bg-[#4F9CF9] text-white"
            )}
        >
            <span className="text-white">{icon}</span>
            {!collapsed && <span className="ml-3 text-sm text-white">{text}</span>}
        </div>
    );
};
