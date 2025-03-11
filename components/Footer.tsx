import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Company Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">Purple Dry</h2>
                        <p className="mt-2 text-white">
                            The best laundry service at your doorstep. Fast, reliable, and quality assured.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li>
                                <Link href="/" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-white">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="mt-3 flex space-x-4">
                            <Link href="#" className="text-white" aria-label="Follow us on Facebook"> <Facebook /></Link>
                            <Link href="#" className="text-white" aria-label="Follow us on Twitter"> <Twitter /></Link>
                            <Link href="#" className="text-white" aria-label="Follow us on Instagram"> <Instagram /></Link>
                            <Link href="#" className="text-white" aria-label="Follow us on Linkedin"> <Linkedin /></Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white">
                    © {new Date().getFullYear()} Purple Dry. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer