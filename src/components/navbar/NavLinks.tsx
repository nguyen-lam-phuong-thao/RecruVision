import React from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Support", href: "#" },
];

const NavLinks: React.FC = () => {
  return (
    <nav className="flex gap-12 justify-between max-md:gap-8 max-sm:hidden">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-xl leading-5 cursor-pointer max-md:text-lg no-underline font-sans"
          style={{ color: 'black' }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
