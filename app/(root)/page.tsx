import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TestimonialSection from '@/components/TestimonialSection'
import ProcessSection from "@/components/ProcessSection";
import FAQAccordion from "@/components/FAQAccordion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {


  return (
    <div className="w-full h-screen">
      <Navbar />

      <section className="w-full h-[55vh] flex items-center justify-center flex-col gap-4 mt-19 px-4 sm:px-8 md:px-32">
        <h1 className="w-full max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Fast & Affordable Ironing Service at Your Doorstep.
        </h1>
        <p className="text-lg max-w-4xl text-center text-gray-600">
          Hassle-free, professional ironing service tailored for gated communities. Schedule pickups, track orders, and enjoy crisp, neatly pressed clothes—delivered to your doorstep with just a tap!
        </p>
        <Button>Download App</Button>
      </section>

      <section className="w-full bg-primary h-screen mt-20 flex items-center justify-center flex-col gap-10 px-6">
        <Image
          src="/mobileMockup.png"
          alt="mobile mockup"
          width={400}
          height={400}
          className="w-[500px] aspect-square"
        />
        <Button className="bg-white text-primary!">Download App</Button>
      </section>

      <TestimonialSection />

      <ProcessSection />

      <section className="w-full py-6 px-4 sm:px-8 md:px-32 mt-10 flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-2xl text-primary">Become a Purple Dry Partner!</h1>
        <p className="text-sm font-normal text-gray-600 text-center mt-3.5 max-w-5xl mx-auto">Hassle-free, professional ironing service tailored for gated communities. Schedule pickups, track orders, and enjoy crisp, neatly pressed clothes—delivered to your doorstep with just a tap!</p>
        <Button className="mt-4">Join as a Dhobi</Button>
      </section>

      <FAQAccordion />

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
                  <a href="#" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white">Services</a>
                </li>
                <li>
                  <a href="#" className="text-white">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="mt-3 flex space-x-4">
                <a href="#" className="text-white">
                  <Facebook />
                </a>
                <a href="#" className="text-white">
                  <Twitter />
                </a>
                <a href="#" className="text-white">
                  <Instagram />
                </a>
                <a href="#" className="text-white">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white mt-8 pt-4 text-center text-sm text-white">
            © {new Date().getFullYear()} Purple Dry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
