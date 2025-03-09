"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { TestimonialProps } from "@/app/types/type";

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const testimonials: TestimonialProps[] = [
        {
            name: "Customer 1",
            review: "PurpleDry exceeded my expectations! The service was prompt, and my clothes were perfectly ironed.",
            stars: 4.5,
            image: "/purpledry.png",
        },
        {
            name: "Customer 2",
            review: "Great experience! Timely pickup and delivery. My clothes came back looking fresh and neatly pressed.",
            stars: 3.5,
            image: "/purpledry.png",
        },
        {
            name: "Customer 3",
            review: "Amazing quality! I highly recommend PurpleDry for their professional ironing and delivery service.",
            stars: 5,
            image: "/purpledry.png",
        },
        {
            name: "Customer 4",
            review: "Reliable and efficient. The best laundry service I have used so far. Would definitely use it again!",
            stars: 5,
            image: "/purpledry.png",
        },
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className="flex items-center justify-center gap-1 mt-2 text-amber-400" aria-label={`Rating: ${rating} stars`}>
                {[...Array(fullStars)].map((_, index) => (
                    <Star key={index} />
                ))}
                {halfStar && <StarHalf />}
            </div>
        );
    };

    return (
        <section className="w-full py-10 bg-gray-50">
            <h1 className="text-center font-bold text-2xl text-primary">What Our Customers Say</h1>
            <div className="w-full max-w-4xl mx-auto px-4">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 md:p-10 rounded-lg text-center flex flex-col items-center justify-center gap-4">
                            <Image
                                src={testimonial.image}
                                alt={`${testimonial.name}'s Testimonial`}
                                width={100}
                                height={100}
                                className="rounded-full mx-auto bg-gray-200"
                                priority={index === 0} // Prioritize first image for better loading
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <h4 className="text-xl font-bold mt-2 text-primary">{testimonial.name}</h4>
                            <p className="text-sm md:text-lg font-normal text-gray-700 text-center mt-2 max-w-md mx-auto">
                                {testimonial.review}
                            </p>
                            {renderStars(testimonial.stars)}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
