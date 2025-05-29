import { Button } from "./button";
import { Card } from "./card";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./navigation-menu";
import { type JSX } from "react";
import { Link } from "react-router-dom";
export const Navigation = (): JSX.Element => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
    ];
    return (
        <div>
            {/* Navigation Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-4">
                <Card className="relative w-[900px] h-[70px] rounded-[40px] bg-[#ffffffe6] backdrop-blur-[20px] border-none">
                    <div className="flex items-center h-full px-8">
                        {/* Logo */}
                        <Link to='/'>
                            <div className="flex items-center">
                                <img
                                    className="w-[50px] h-[42px] -ml-1 object-cover cursor-pointer"
                                    alt="Logo"
                                    src="/images/svg/logo.svg"
                                />
                                <span className="ml-4 font-bold text-[#4f9cf9] text-xl leading-6 font-sans cursor-pointer">
                                    RecruVision
                                </span>
                            </div>
                        </Link>
                        {/* Navigation */}
                        <div className="flex items-center ml-[200px]">
                            <NavigationMenu>
                                <NavigationMenuList className="flex gap-8">
                                    {navItems.map((item) => (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink
                                                href={item.href}
                                                className="font-normal text-gray-700 text-base leading-5 font-sans"
                                            >
                                                {item.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>

                            {/* Auth Buttons */}
                            <div className="flex items-center ml-8">
                                <Link to="/login">
                                    <Button
                                        variant="ghost"
                                        className="font-bold text-black text-base leading-5 font-sans cursor-pointer"
                                    >
                                        Login
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="ml-4 w-[100px] h-[40px] bg-black rounded-lg text-white text-base font-normal font-sans cursor-pointer">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
