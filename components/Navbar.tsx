"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define dynamic routes
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Why Choose Us?", path: "/about" },
    { label: "Join as Dhobi", path: "/partner" },
    { label: "Our Service Providers", path: "/serviceProviders" },
    { label: "Contact Us", path: "/about" },
  ];

  return (
    <nav className="flex py-3 items-center justify-between relative bg-white w-full px-4 sm:px-8 md:px-32" role="navigation">
      {/* Logo */}
      <Image src="/purpledry.png" alt="Purple Dry Logo" width={75} height={9} priority />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 capitalize">
        {navItems.map((item) => (
          <Link key={item.label} href={item.path} className="text-sm font-normal hover:text-primary transition duration-300">
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA Button for App Download (Always Visible on Desktop) */}
      <div className="hidden md:block">
        <Button href="https://play.google.com/store/apps/details?id=your-app-id" ariaLabel="Download the PurpleDry App">
          Book Service
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 relative"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation (Slides in from Top) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-500 ease-in-out text-white ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {navItems.map((item) => (
          <Link key={item.label} href={item.path} className="text-white hover:opacity-80 transition duration-300" onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}

        {/* CTA Button for Mobile */}
        <Button href="https://play.google.com/store/apps/details?id=your-app-id" ariaLabel="Download the PurpleDry App">
          Book Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
