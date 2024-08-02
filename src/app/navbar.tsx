"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [hoveredInnerPath, setHoveredInnerPath] = useState(null);
  const { replace, push } = useRouter();
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

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToElement(href, 200);
    } else {
      push(`/${href}`);
    }
    setDrawer(false); // Close drawer when a link is clicked
  };

  return (
    <div
      className={twMerge(
        "z-40 fixed top-0 left-0 w-full py-4 px-8 md:px-48 bg-[#3bb24a] transition-all duration-300",
        hoveredPath && "bg-black"
      )}
    >
      <div className="flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={150} height={50} />
        <div className="p-4 md:hidden flex justify-end items-center">
          <button
            className="p-2 rounded hover:bg-white/10 transition-all duration-300"
            onClick={() => {
              setDrawer(!drawer);
            }}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex justify-end items-center break-keep gap-6 w-full">
          <Link
            key="OVERVIEW"
            href="/#modern-view"
            onClick={(e) => handleNavClick(e, "#modern-view")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Scrollup Nedir?
          </Link>
          <Link
            key="APP"
            href="/#scrollupapp"
            onClick={(e) => handleNavClick(e, "#scrollupapp")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Scrollup App
          </Link>
          <Link
            key="FEATURES"
            href="/#features"
            onClick={(e) => handleNavClick(e, "#features")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Özellikler
          </Link>
          <Link
            key="USAGE"
            href="/#usage"
            onClick={(e) => handleNavClick(e, "#usage")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Kullanım Alanları
          </Link>
          <Link
            key="TECHNICAL"
            href="/#technical"
            onClick={(e) => handleNavClick(e, "#technical")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Teknik
          </Link>
          <Link
            key="CONTACT"
            href="/#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Bize Ulaşın
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawer && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#3bb24a] flex flex-col items-start px-8 py-4">
          <Link
            key="OVERVIEW"
            href="/#modern-view"
            onClick={(e) => handleNavClick(e, "#modern-view")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap mb-4`}
          >
            Scrollup Nedir?
          </Link>
          <Link
            key="APP"
            href="/#scrollupapp"
            onClick={(e) => handleNavClick(e, "#scrollupapp")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap mb-4`}
          >
            Scrollup App
          </Link>
          <Link
            key="FEATURES"
            href="/#features"
            onClick={(e) => handleNavClick(e, "#features")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap mb-4`}
          >
            Özellikler
          </Link>
          <Link
            key="USAGE"
            href="/#usage"
            onClick={(e) => handleNavClick(e, "#usage")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap mb-4`}
          >
            Kullanım Alanları
          </Link>
          <Link
            key="TECHNICAL"
            href="/#technical"
            onClick={(e) => handleNavClick(e, "#technical")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap mb-4`}
          >
            Teknik
          </Link>
          <Link
            key="CONTACT"
            href="/#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`font-medium text-white transition-all duration-300 whitespace-nowrap`}
          >
            Bize Ulaşın
          </Link>
        </div>
      )}
    </div>
  );
}
