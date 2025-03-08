"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='w-full absolute bg-primary left-0 -top-56'>
      <span onClick={() => setIsOpen(!isOpen)} className='absolute z-20 right-2 top-4'>
        {
          isOpen ? <X size={24} className='md:hidden' /> : <Menu size={24} className='md:hidden' />
        }
      </span>

      {/* mobile nav links ui  */}
      <nav className='flex md:hidden flex-col items-center gap-3'>
        <Link href="#">Home</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">Why Choose Us?</Link>
        <Link href="#">Join as Dhobi</Link>
        <Link href="#">about us</Link>
        <Link href="#">Contact Us</Link>
      </nav>

      
    </div>
  )
}

export default MobileMenu