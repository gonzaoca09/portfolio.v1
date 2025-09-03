"use client";

import Link from "next/link";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";



const pillTabs = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Blogs", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tabsComponents = pillTabs.map((tab, i) => {
    const isHovered = hoveredIndex === i;
    const isActive = pathname === tab.path;

    return (
      <Link
        key={tab.label}
        href={tab.path}
        onMouseEnter={() => setHoveredIndex(i)}
        className="relative py-2 px-4 text-white"
      >
        {isActive && (
          <MagicTabSelect
            id="activePillTab"
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <span
              style={{
                borderRadius: "9999px",
                position: "absolute",
                inset: 0,
                backgroundColor: "white",
                mixBlendMode: "difference",
                zIndex: 10,
              }}
            />
          </MagicTabSelect>
        )}

        {isHovered && !isActive && (
          <MagicTabSelect
            id="hoverPillTab"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span
              style={{
                borderRadius: "9999px",
                position: "absolute",
                inset: 0,
                backgroundColor: "white",
                mixBlendMode: "difference",
                zIndex: 10,
              }}
            />
          </MagicTabSelect>
        )}
        {tab.label}
      </Link>
    );
  });

  return (
    <div className="flex w-full justify-center">
      <div
        className="hidden md:flex font-google text-lg gap-3 rounded-full bg-[#1a1a1a] p-3"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="relative flex items-center gap-3">
          {tabsComponents}
        </div>
      </div>

      <div className="grid grid-cols-2 justify-between md:hidden w-full px-5 gap-3">
        <div className="justify-self-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn rounded-2xl lg:hidden">
              <RxHamburgerMenu size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-stone-500 transition rounded-box z-1 mt-3 w-58 p-2 shadow">
              {pillTabs.map((tab) => (
                <li key={tab.path}>
                  <Link href={tab.path}>{tab.label}</Link>
                </li>
              ))}
            </ul>
        </div>
        </div>
        <div className="justify-self-end">
         <CiUser size={25}/>
        </div>
      </div>
    </div>
  );
}
