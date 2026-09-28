export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "What types of LED screens does Fetan LED provide?",
    answer:
      "Fetan LED provides a wide range of indoor and outdoor LED display solutions, including fixed LED screens, rental screens, digital billboards, indoor video walls, transparent LED displays, and custom LED display systems. We help you select the right solution based on your location, viewing distance, screen size, and application.",
  },
  {
    question: "Do you sell and install LED screens in Ethiopia?",
    answer:
      "Yes. Fetan LED provides complete LED screen sales and professional installation services in Ethiopia. Our team handles the process from selecting the right display and designing the supporting structure to installation, calibration, and final testing.",
  },
  {
    question: "What is the difference between indoor and outdoor LED screens?",
    answer:
      "Outdoor LED screens are designed for high brightness and protection against weather conditions, making them suitable for billboards, outdoor advertising, stadiums, events, and building facades. Indoor LED screens are optimized for closer viewing, higher image detail, and controlled lighting environments such as offices, retail stores, hotels, conference rooms, and lobbies.",
  },
  {
    question: "How do I choose the right pixel pitch for my LED screen?",
    answer:
      "The right pixel pitch depends mainly on the viewing distance and where the screen will be installed. Smaller pixel pitches such as P1.25, P1.8, and P2.5 are suitable for closer viewing and high-resolution indoor applications, while larger pitches can be suitable for outdoor displays viewed from greater distances. Our team can recommend the appropriate pixel pitch based on your project.",
  },
  {
    question: "How much does an LED screen cost in Ethiopia?",
    answer:
      "The cost of an LED screen depends on factors such as screen size, pixel pitch, indoor or outdoor application, brightness, cabinet type, supporting structure, installation requirements, and other technical specifications. Contact Fetan LED with your project requirements and we will provide a detailed proposal based on your needs.",
  },
  {
    question: "Can you build a custom-size LED screen?",
    answer:
      "Yes. Fetan LED provides custom LED display solutions based on your available space, required dimensions, viewing distance, and intended use. Our team can also design and fabricate the necessary supporting structure for the installation.",
  },
  {
    question: "Do you provide LED screen rental for events?",
    answer:
      "Yes. We provide LED screen rental solutions for concerts, festivals, conferences, corporate events, stage productions, and other temporary installations. Our rental solutions can include the LED display, installation, setup, calibration, and technical support.",
  },
  {
    question: "Can LED screens display videos, images, and live feeds?",
    answer:
      "Yes. Depending on the configuration, our LED display systems can be used for videos, animations, static images, presentations, live camera feeds, broadcasts, scoreboards, and other digital content.",
  },
  {
    question: "Do you provide maintenance and technical support after installation?",
    answer:
      "Yes. Fetan LED provides ongoing maintenance and technical support after installation. Our support services are designed to help keep your LED display operating reliably and performing at its best.",
  },
  {
    question: "How long does LED screen installation take?",
    answer:
      "Installation time depends on the screen size, location, supporting structure, site conditions, and project requirements. After assessing your project, our team can provide an estimated installation timeline as part of the proposal.",
  },
  {
    question: "What information do I need to request a quotation?",
    answer:
      "To prepare an accurate quotation, it is helpful to provide your preferred screen dimensions, indoor or outdoor location, intended application, viewing distance, content type, installation location, and desired completion date. If you are not sure about the specifications, our team can help determine the appropriate solution.",
  },
  {
    question: "Does Fetan LED provide LED screen solutions outside Addis Ababa?",
    answer:
      "Yes. Fetan LED works on LED display projects across Ethiopia. Contact our team with your project location and requirements so we can assess the installation and support requirements for your area.",
  },
];

/** First three FAQs shown on the homepage teaser. */
export const HOME_FAQS = FAQS.slice(0, 3);
