"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex py-3 items-center justify-between relative bg-white w-full px-4 sm:px-8 md:px-32">
      {/* Logo */}
      <Image src="/purpledry.png" alt="Purple Dry Logo" width={75} height={9} />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 capitalize">
        <Link href="#" className="text-sm font-normal">Home</Link>
        <Link href="#" className="text-sm font-normal">Pricing</Link>
        <Link href="#" className="text-sm font-normal">Why Choose Us?</Link>
        <Link href="#" className="text-sm font-normal">Join as Dhobi</Link>
        <Link href="#" className="text-sm font-normal">About Us</Link>
        <Link href="#" className="text-sm font-normal">Contact Us</Link>
      </div>

      {/* CTA Button for App Download (Always Visible on Desktop) */}
      <div className="hidden md:block">
        <Button>Download App</Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 relative"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation (Slides in from Top) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col items-center justify-center gap-5 text-lg transition-transform duration-500 ease-in-out text-white ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>Pricing</Link>
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>Why Choose Us?</Link>
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>Join as Dhobi</Link>
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link href="#" className="text-text" onClick={() => setIsOpen(false)}>Contact Us</Link>

        {/* CTA Button for Mobile */}
        <Button className="bg-white text-primary!">Download App</Button>
      </div>
    </nav>
  );
};

export default Navbar;
