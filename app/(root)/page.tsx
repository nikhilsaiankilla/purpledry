import Head from "next/head";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TestimonialSection from "@/components/TestimonialSection";
import ProcessSection from "@/components/ProcessSection";
import FAQAccordion from "@/components/FAQAccordion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Head>
        <title>PurpleDry - Online Laundry Service in Hyderabad</title>
        <meta
          name="description"
          content="Get fast, affordable, and professional ironing service in Hyderabad. Book pickups and enjoy neatly pressed clothes delivered to your doorstep!"
        />
        <meta
          name="keywords"
          content="Laundry Service Hyderabad, Online Laundry, Ironing Service, Doorstep Laundry, PurpleDry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="PurpleDry - Online Laundry Service in Hyderabad" />
        <meta property="og:description" content="Fast, affordable, and professional ironing service at your doorstep." />
        <meta property="og:image" content="/purpledry.png" />
        <meta property="og:url" content="https://purpledry.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PurpleDry - Online Laundry Service in Hyderabad" />
        <meta name="twitter:description" content="Hassle-free, professional ironing service tailored for gated communities." />
        <meta name="twitter:image" content="/purpledry.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PurpleDry",
              "image": "/purpledry.png",
              "url": "https://purpledry.vercel.app/",
              "telephone": "+91 8374683831",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1-06/1",
                "addressLocality": "Hyderabad",
                "addressRegion": "TG",
                "postalCode": "500044",
                "addressCountry": "IN",
              },
              "serviceArea": {
                "@type": "Place",
                "name": "Hyderabad",
              },
              "priceRange": "₹60/kg",
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="w-full min-h-[60vh] flex items-center justify-center flex-col gap-4 mt-19 px-4 sm:px-8 md:px-32">
        <h1 className="w-full max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Fast & Affordable Ironing Service at Your Doorstep.
        </h1>
        <p className="text-lg max-w-4xl text-center text-gray-600">
          Hassle-free, professional ironing service tailored for gated communities. Schedule pickups, track orders, and enjoy crisp, neatly pressed clothes—delivered to your doorstep with just a tap!
        </p>
        <Button href="https://play.google.com/store/apps/details?id=your-app-id" ariaLabel="Download the PurpleDry App">
          Download App
        </Button>
      </section>

      {/* Mobile Mockup Section */}
      <section className="w-full bg-primary h-screen mt-20 flex items-center justify-center flex-col gap-10 px-6">
        <Image
          src="/mobileMockup.png"
          alt="PurpleDry mobile app mockup"
          width={400}
          height={400}
          className="w-[500px] aspect-square"
        />
        <Button href="https://play.google.com/store/apps/details?id=your-app-id" className="bg-white text-primary!" ariaLabel="Download the PurpleDry App">
          Download App
        </Button>
      </section>

      <TestimonialSection />
      <ProcessSection />

      {/* Partner Section */}
      <section className="w-full py-6 px-4 sm:px-8 md:px-32 mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center font-bold text-2xl text-primary">
          Become a Purple Dry Partner!
        </h2>
        <p className="text-sm font-normal text-gray-600 text-center mt-3.5 max-w-5xl mx-auto">
          Join our network of professional dhobis and grow your business with our platform. We provide easy order management, customer connections, and steady income opportunities.
        </p>
        <Button href="/partner" className="mt-4" ariaLabel="Join as a Dhobi">
          Join as a Dhobi
        </Button>
      </section>

      <FAQAccordion />

      {/* Footer Section */}
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
                  <a href="/" className="text-white">Home</a>
                </li>
                <li>
                  <a href="/services" className="text-white">Services</a>
                </li>
                <li>
                  <a href="/pricing" className="text-white">Pricing</a>
                </li>
                <li>
                  <a href="/contact" className="text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="mt-3 flex space-x-4">
                <a href="#" className="text-white" aria-label="Follow us on Facebook">
                  <Facebook />
                </a>
                <a href="#" className="text-white" aria-label="Follow us on Twitter">
                  <Twitter />
                </a>
                <a href="#" className="text-white" aria-label="Follow us on Instagram">
                  <Instagram />
                </a>
                <a href="#" className="text-white" aria-label="Follow us on LinkedIn">
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
