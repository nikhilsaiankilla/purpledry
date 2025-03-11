import React from "react";
import Head from "next/head";
import Button from "@/components/Button";
import TestimonialSection from "@/components/TestimonialSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const PartnerPage = () => {
    return (
        <div className="w-full">
            {/* SEO Head */}
            <Head>
                <title>Partner with PurpleDry | Laundry Service Partner in Hyderabad</title>
                <meta
                    name="description"
                    content="Become a PurpleDry partner and grow your laundry business. Get more customers, manage orders easily, and earn with zero upfront investment."
                />
                <meta
                    name="keywords"
                    content="Laundry Service Partner, Dhobi Partner, Laundry Business, Laundry Franchise, Hyderabad Laundry Partner"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Partner with PurpleDry | Laundry Service Partner in Hyderabad" />
                <meta property="og:description" content="Grow your laundry business by partnering with PurpleDry. Get more customers and steady income." />
                <meta property="og:url" content="https://purpledry.vercel.app/partner" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://purpledry.vercel.app/purpledry.png" />
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

            {/* Hero Section */}
            <section className="w-full bg-primary text-white py-16 px-6 text-center">
                <h1 className="text-4xl font-bold">Partner with PurpleDry</h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Join our network of professional dhobis in Hyderabad and grow your business with a steady income and easy order management.
                </p>
                <Button href="#contact" className="mt-6 bg-white! text-primary! hover:text-white! hover:bg-primary! hover:outline-white! outline-1" ariaLabel="Become a PurpleDry Partner">
                    Become a Partner
                </Button>
            </section>

            {/* Why Choose PurpleDry? */}
            <section className="w-full py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary">Why Partner with Us?</h2>
                <p className="mt-4 text-lg text-gray-600">
                    PurpleDry helps local dhobis expand their business by connecting them with customers and providing seamless pickup & delivery solutions.
                </p>
                <div className="mt-10 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "More Customers", desc: "Increase your earnings by reaching more customers effortlessly." },
                        { title: "Easy Order Management", desc: "Manage your orders and deliveries smoothly with our app." },
                        { title: "Zero Upfront Investment", desc: "Join without any investment and start earning immediately." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-primary">Benefits of Partnering with PurpleDry</h2>
                <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "Regular Orders", desc: "We bring customers to you so you never have an empty schedule." },
                        { title: "Flexible Timings", desc: "You decide when and how much work you take on." },
                        { title: "Timely Payments", desc: "Receive your payments on time, every time." }
                    ].map((item, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialSection />

            {/* Contact Form */}
            <ContactForm />

            <Footer />
        </div>
    );
};

export default PartnerPage;
