"use client";

import Link from "next/link";
import { useState } from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Videos", href: "/videos" },
    { name: "Support Us", href: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://yt3.ggpht.com/9Ur-zL1RXZn9XYc7aV3ICZwiqJ8pZSuETCsZkRWmkqofkniJhndfSW4H5TH2EXt5wEzHvE7eVIY=s176-c-k-c0x00ffffff-no-rj" 
                alt="Feelings Tune Logo"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">Feelings Tune</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://youtube.com/@feelingstune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/FeelingsOfTune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {theme === "dark" ? (
                <MdLightMode className="h-5 w-5" />
              ) : (
                <MdDarkMode className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://youtube.com/@feelingstune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <FaYoutube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/FeelingsOfTune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-muted-foreground hover:text-primary"
                >
                  {theme === "dark" ? (
                    <MdLightMode className="h-5 w-5" />
                  ) : (
                    <MdDarkMode className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
