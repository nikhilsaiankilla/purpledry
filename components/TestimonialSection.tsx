"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import { TestimonialProps } from '@/app/types/type';

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
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt dolor libero commodi ea? Amet minus minima dolore, aut nulla possimus distinctio, recusandae laudantium libero expedita quisquam praesentium labore? Incidunt!",
            stars: 4.5,
            image: "/purpledry.png"
        },
        {
            name: "Customer 2",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt dolor libero commodi ea? Amet minus minima dolore, aut nulla possimus distinctio, recusandae laudantium libero expedita quisquam praesentium labore? Incidunt!",
            stars: 3.5,
            image: "/purpledry.png"
        },
        {
            name: "Customer 3",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt dolor libero commodi ea? Amet minus minima dolore, aut nulla possimus distinctio, recusandae laudantium libero expedita quisquam praesentium labore? Incidunt!",
            stars: 5,
            image: "/purpledry.png"
        },
        {
            name: "Customer 4",
            review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt dolor libero commodi ea? Amet minus minima dolore, aut nulla possimus distinctio, recusandae laudantium libero expedita quisquam praesentium labore? Incidunt!",
            stars: 5,
            image: "/purpledry.png"
        },
    ];

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className='flex items-center justify-center gap-1 mt-3 text-amber-400'>
                {[...Array(fullStars)].map((_, index) => (
                    <Star key={index} />
                ))}
                {halfStar && <StarHalf />}
            </div>
        );
    };

    return (
        <section className="w-full py-8">
            <h1 className="text-center font-bold text-2xl text-primary">Testimonials</h1>
            <div className="w-full max-w-4xl mx-auto px-4">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 md:p-10 rounded-lg text-center flex flex-col items-center justify-center gap-3">
                            <Image src={testimonial.image} alt='testimonial-user-image' width={100} height={100} className='rounded-full mx-auto bg-green-200' />
                            <h4 className='text-xl font-bold mt-3 text-primary'>{testimonial.name}</h4>
                            <p className='text-sm md:text-lg font-normal text-gray-700 text-center mt-3'>{testimonial.review}</p>
                            {renderStars(testimonial.stars)}
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
