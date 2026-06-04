"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const links = [
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "People", href: "#people" },
  { label: "Publications", href: "#publications" },
  { label: "News", href: "#news" },
];

function NavHeader() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-border-strong bg-surface p-1 shadow-sm"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {links.map((link) => (
        <Tab key={link.href} href={link.href} setPosition={setPosition}>
          {link.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block"
    >
      <a
        href={href}
        className="block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-fg-soft transition-colors duration-200 hover:text-white md:px-5 md:py-2.5 md:text-sm"
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      className="absolute z-0 h-7 rounded-full bg-brand-blue md:h-10"
    />
  );
};

export default NavHeader;
