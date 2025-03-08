"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { question: "How does the service work?", answer: "You log in, select clothes for ironing, and place an order." },
  { question: "What are the pricing details?", answer: "Pricing depends on the number of clothes you send for ironing." },
  { question: "Do you offer same-day delivery?", answer: "Yes, we offer same-day delivery based on availability." },
  { question: "How can I track my order?", answer: "You can track your order in the app under 'My Orders'." },
  { question: "Is my clothing safe?", answer: "Yes, we follow strict quality checks to ensure your clothes are well handled." },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-50 px-4 sm:px-8 md:px-32">
      <h1 className="text-center font-bold text-2xl text-primary text-wrap">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto mt-8 space-y-4 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-left text-primary focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100 p-4 border-t border-gray-200" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
