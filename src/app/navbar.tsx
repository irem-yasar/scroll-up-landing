"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [hoveredInnerPath, setHoveredInnerPath] = useState(null);
  const { replace } = useRouter();
  const pathname = usePathname(); // Correct way to get pathname
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const ifScrolled = scrollPosition > 200;

  const scrollToElement = (selector: string, offset = 0) => {
    const element = document.querySelector(selector);
    if (element) {
      const topPos =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setDrawer(false);
    setHoveredPath(null);
    setHoveredInnerPath(null);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "z-40 fixed top-0 left-0 w-screen py-4 px-8 md:px-48 md:grid md:grid-cols-2 bg-[#3bb24a] transition-all duration-300",
        hoveredPath && "bg-black"
      )}
    >
      <div className="flex justify-start items-center">
        <Image src="/logo.png" alt="logo" width={150} height={50} />
      </div>
      <div className="p-4 md:hidden flex justify-end items-center">
        <button
          className="p-2 rounded hover:bg-white/10 transition-all duration-300"
          onClick={() => {
            setDrawer(true);
          }}
        ></button>
      </div>
      <div className="hidden md:flex justify-end items-center break-keep gap-6 w-full">
        <Link
          key="OVERVIEW"
          href="#modern-view"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#modern-view", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Scrollup Nedir?
        </Link>
        <Link
          key="APP"
          href="#scrollupapp"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#scrollupapp", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Scrollup App
        </Link>
        <Link
          key="FEATURES"
          href="#features"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#features", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Özellikler
        </Link>
        <Link
          key="USAGE"
          href="#usage"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#usage", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Kullanım Alanları
        </Link>
        <Link
          key="TECHNICAL"
          href="#technical"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#technical", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Teknik
        </Link>
        <Link
          key="CONTACT"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement("#contact", 200);
          }}
          className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
        >
          Bize Ulaşın
        </Link>
      </div>
    </div>
  );
}
