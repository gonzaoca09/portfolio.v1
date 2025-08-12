"use client";

import Link from "next/link";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
  { label: "Home", path: "/" },
  { label: "About me", path: "/about" },
  { label: "Work", path: "/work" },
  { label: "Blogs", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsComponents = pillTabs.map((tab, i) => {
    const isHovered = hoveredIndex === i;
    const isActive = activeIndex === i;

    return (
      <Link
        key={tab.label}
        href={tab.path}
        onClick={() => setActiveIndex(i)}
        onMouseEnter={() => setHoveredIndex(i)}
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          color: "white", 
        }}
        className="font-google text-lg bg-base-100 rounded-full"
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
    <div 
      style={{ display: "flex", gap: "0.75rem" }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {tabsComponents}
    </div>
  );}