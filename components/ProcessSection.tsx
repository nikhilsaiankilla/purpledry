import { Step } from "@/app/types/type";
import React from "react";


const steps: Step[] = [
    { id: 1, title: "Open the app & log in.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
    { id: 2, title: "Select the number of clothes for ironing.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
    { id: 3, title: "Click 'Order' to request service.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
    { id: 4, title: "Delivery agent picks up clothes.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
    { id: 5, title: "Dhobi irons & performs quality check.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
    { id: 6, title: "Clothes are delivered back.", description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima amet consequatur nemo, odit ipsum ipsam asperiores veniam adipisci impedit. Aliquam praesentium laboriosam consequuntur atque velit vel iusto quam, possimus perspiciatis similique veritatis dolores labore cumque?" },
];

const ProcessSection: React.FC = () => {
    
    return (
        <section className="w-full py-16 bg-gray-50">
            <h1 className="text-center font-bold text-2xl text-primary">How It Works</h1>
            <div className="relative max-w-4xl mx-auto mt-8">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-300 h-full"></div>

                {/* Steps */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                } flex-row`}
                        >
                            {/* Step Box */}
                            <div className="bg-white shadow-lg rounded-lg p-6 w-[85%] md:w-[45%] ml-12 md:ml-0">
                                <span className="flex gap-3 items-start">
                                    <h1 className="text-primary font-bold text-4xl">{step.id}.</h1>
                                    <h3 className="text-primary font-bold text-lg mt-auto">{step.title}</h3>
                                </span>
                                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
                            </div>


                            {/* Step Indicator */}
                            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
