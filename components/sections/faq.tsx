"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of LED screens does Fetan LED provide?",
    answer: "Fetan LED provides a wide range of indoor and outdoor LED display solutions, including fixed LED screens, rental screens, digital billboards, indoor video walls, transparent LED displays, and custom LED display systems. We help you select the right solution based on your location, viewing distance, screen size, and application.",
  },
  {
    question: "Do you sell and install LED screens in Ethiopia?",
    answer: "Yes. Fetan LED provides complete LED screen sales and professional installation services in Ethiopia. Our team handles the process from selecting the right display and designing the supporting structure to installation, calibration, and final testing.",
  },
  {
    question: "What is the difference between indoor and outdoor LED screens?",
    answer: "Outdoor LED screens are designed for high brightness and protection against weather conditions, making them suitable for billboards, outdoor advertising, stadiums, events, and building facades. Indoor LED screens are optimized for closer viewing, higher image detail, and controlled lighting environments such as offices, retail stores, hotels, conference rooms, and lobbies.",
  },
  {
    question: "How do I choose the right pixel pitch for my LED screen?",
    answer: "The right pixel pitch depends mainly on the viewing distance and where the screen will be installed. Smaller pixel pitches such as P1.25, P1.8, and P2.5 are suitable for closer viewing and high-resolution indoor applications, while larger pitches can be suitable for outdoor displays viewed from greater distances. Our team can recommend the appropriate pixel pitch based on your project.",
  },
  {
    question: "How much does an LED screen cost in Ethiopia?",
    answer: "The cost of an LED screen depends on factors such as screen size, pixel pitch, indoor or outdoor application, brightness, cabinet type, supporting structure, installation requirements, and other technical specifications. Contact Fetan LED with your project requirements and we will provide a detailed proposal based on your needs.",
  },
  {
    question: "Can you build a custom-size LED screen?",
    answer: "Yes. Fetan LED provides custom LED display solutions based on your available space, required dimensions, viewing distance, and intended use. Our team can also design and fabricate the necessary supporting structure for the installation.",
  },
  {
    question: "Do you provide LED screen rental for events?",
    answer: "Yes. We provide LED screen rental solutions for concerts, festivals, conferences, corporate events, stage productions, and other temporary installations. Our rental solutions can include the LED display, installation, setup, calibration, and technical support.",
  },
  {
    question: "Can LED screens display videos, images, and live feeds?",
    answer: "Yes. Depending on the configuration, our LED display systems can be used for videos, animations, static images, presentations, live camera feeds, broadcasts, scoreboards, and other digital content.",
  },
  {
    question: "Do you provide maintenance and technical support after installation?",
    answer: "Yes. Fetan LED provides ongoing maintenance and technical support after installation. Our support services are designed to help keep your LED display operating reliably and performing at its best.",
  },
  {
    question: "How long does LED screen installation take?",
    answer: "Installation time depends on the screen size, location, supporting structure, site conditions, and project requirements. After assessing your project, our team can provide an estimated installation timeline as part of the proposal.",
  },
  {
    question: "What information do I need to request a quotation?",
    answer: "To prepare an accurate quotation, it is helpful to provide your preferred screen dimensions, indoor or outdoor location, intended application, viewing distance, content type, installation location, and desired completion date. If you are not sure about the specifications, our team can help determine the appropriate solution.",
  },
  {
    question: "Does Fetan LED provide LED screen solutions outside Addis Ababa?",
    answer: "Yes. Fetan LED works on LED display projects across Ethiopia. Contact our team with your project location and requirements so we can assess the installation and support requirements for your area.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-[#040e1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-white/60 mb-12 text-lg">
          Find answers to common questions about our LED display solutions
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-brand-blue transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-white/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
