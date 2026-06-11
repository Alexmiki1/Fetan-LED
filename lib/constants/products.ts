import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "outdoor-die-cast",
    name: "Outdoor LED Display - Die Casting Aluminium",
    subtitle: "High-precision rental and fixed outdoor display",
    image: "/images/products/outdoor_die_cast.png",
    description: "Designed for high-end rental and premium outdoor installations. The die-casting aluminium frame provides ultra-high precision cabinet alignment, quick lock mechanism for rapid setup, and superior heat dissipation. Weatherproof and highly durable under harsh conditions.",
    features: [
      "High-precision alignment (error <0.1mm)",
      "Lightweight aluminium frame for fast rigging",
      "Quick-lock mechanism for rapid single-person installation",
      "IP65 front and rear weatherproofing against rain, dust, and humidity"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P2.6 - P4.8" },
      { label: "Brightness", value: "5,500 - 6,500 nits" },
      { label: "Refresh Rate", value: "3,840 - 7,680 Hz" },
      { label: "Cabinet Weight", value: "6.5 kg / panel" },
      { label: "Service Mode", value: "Front or Rear Maintenance" }
    ]
  },
  {
    id: "indoor-die-cast",
    name: "Indoor LED Display - Die Casting Aluminium",
    subtitle: "Premium high-definition seamless indoor wall",
    image: "/images/products/indoor_die_cast.png",
    description: "Our flagship indoor display solution. Crafted with precision die-cast aluminium cabinets, it ensures seamless bezel-free video walls with stunning color depth. Perfect for corporate lobbies, auditoriums, high-end retail, and broadcast studios.",
    features: [
      "Perfect seamless mechanical jointing with zero cabinet-gaps",
      "Fanless passive cooling for completely silent operation",
      "Front-service magnetic modules for effortless maintenance",
      "Superior HDR color representation and deep contrast levels"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P0.9 - P2.5" },
      { label: "Brightness", value: "800 - 1,200 nits" },
      { label: "Refresh Rate", value: "3,840 - 7,680 Hz" },
      { label: "Grayscale Depth", value: "16 - 22 bit" },
      { label: "Cabinet Ratio", value: "16:9 Aspect Ratio Native" }
    ]
  },
  {
    id: "outdoor-fixed-steel",
    name: "Outdoor LED Display - Fixed Steel",
    subtitle: "Robust permanent billboard and advertising panel",
    image: "/images/products/outdoor_fixed_steel.png",
    description: "A cost-effective, heavy-duty solution for permanent outdoor billboards and advertising installations. The robust steel cabinet is highly customizable and built to withstand extreme weather conditions, ensuring long-term operational stability.",
    features: [
      "Heavy-duty reinforced steel casing for structural strength",
      "Double back-door access for safe maintenance access",
      "Highly customizable cabinet sizes to fit specific architectures",
      "Premium anti-corrosion and anti-rust industrial coating"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P4.0 - P10.0" },
      { label: "Brightness", value: "6,500 - 8,500 nits" },
      { label: "Refresh Rate", value: "1,920 - 3,840 Hz" },
      { label: "IP Rating", value: "IP65 Waterproof Housing" },
      { label: "Cabinet Style", value: "Standard Fixed Cabinet" }
    ]
  },
  {
    id: "indoor-fixed-steel",
    name: "Indoor LED Display - Fixed Steel",
    subtitle: "Cost-efficient large-scale indoor wall display",
    image: "/images/products/indoor_fixed_steel.png",
    description: "Perfect for budget-friendly large-scale indoor wall installations. The fixed steel frame offers solid, rigid mounting for wall-recessed setups in retail malls, control rooms, and public display boards, keeping costs optimized.",
    features: [
      "Highly cost-efficient large format design",
      "Sturdy fixed framing system for direct-wall mounting",
      "Rear maintenance setup with ventilation doors",
      "High reliability with simple electrical wiring structure"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P2.0 - P4.0" },
      { label: "Brightness", value: "1,000 - 1,500 nits" },
      { label: "Refresh Rate", value: "1,920 - 3,840 Hz" },
      { label: "Cabinet Thickness", value: "80 - 100 mm" },
      { label: "Power Consumption", value: "Low standby power drawing" }
    ]
  },
  {
    id: "transparent-outdoor",
    name: "Transparent Outdoor LED Display - Mesh Screen",
    subtitle: "Facade-integrated wind-permeable media screen",
    image: "/images/products/transparent_outdoor.png",
    description: "An innovative, high-transparency mesh display designed for building glass facades. With up to 70% transparency, it allows natural light to enter the building while displaying vibrant advertisements to the outside world. Light wind loading reduces building structural stress.",
    features: [
      "High transparency rate (65-80%) maintaining interior light",
      "Lightweight wind-permeable mesh structure reduces load by 50%",
      "Fast glass curtain-wall mounting installation",
      "Vibrant high-contrast visibility even in direct noon sunlight"
    ],
    specs: [
      { label: "Pixel Pitch", value: "H: 3.91mm / V: 7.81mm" },
      { label: "Brightness", value: "5,000 - 6,000 nits" },
      { label: "Transparency", value: "70% - 85%" },
      { label: "Weight", value: "12 kg / SQM" },
      { label: "IP Rating", value: "IP65 Weatherproof Modules" }
    ]
  },
  {
    id: "transparent-indoor",
    name: "Transparent Indoor LED Display - Mesh Screen",
    subtitle: "Sleek retail storefront and shop window display",
    image: "/images/products/transparent_indoor.png",
    description: "A sleek, highly transparent mesh LED screen tailored for indoor window displays and retail storefronts. It maintains daylight visibility inside the store while creating stunning holographic-style digital advertising content for shoppers outside.",
    features: [
      "Ultra-slim visual profile for modern premium storefronts",
      "Easy glass hanging or floor standing mounting options",
      "Energy-efficient SMD technology for continuous operation",
      "No structural modification required for fast installation"
    ],
    specs: [
      { label: "Pixel Pitch", value: "H: 2.8mm / V: 5.6mm" },
      { label: "Brightness", value: "2,500 - 3,500 nits" },
      { label: "Transparency", value: "75% - 88%" },
      { label: "Power Consumption", value: "Avg: 180W / SQM" },
      { label: "Glass Attachment", value: "Acrylic sheet or steel hang frame" }
    ]
  },
  {
    id: "flexible-led",
    name: "Flexible Outdoor & Indoor LED Display Screens",
    subtitle: "Creative curved, wave, and spherical panels",
    image: "/images/products/flexible_led.png",
    description: "Bendable and flexible LED modules designed for creating curved, wave-shaped, cylindrical, or creative spherical displays. Perfect for artistic interior designs, exhibition booths, and custom architectural landmarks.",
    features: [
      "High flexibility & bendability for convex/concave curves",
      "Magnetic module mounting for easy metal-frame bonding",
      "Smooth curves with zero segmentation artifact gaps",
      "Custom display shapes (cylinders, waves, globes) possible"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P1.8 - P3.0" },
      { label: "Brightness", value: "1,000 - 3,000 nits" },
      { label: "Min. Bend Diameter", value: "250 mm" },
      { label: "Module Weight", value: "85 g / module" },
      { label: "Installation Type", value: "Magnetic Front Service" }
    ]
  },
  {
    id: "text-led",
    name: "Outdoor & Indoor Text LED Screens",
    subtitle: "Legible text display for informational signs",
    image: "/images/products/text_led.png",
    description: "Versatile, highly legible LED banner screens optimized for scrolling text messages, store signs, queue announcements, and pricing updates. Available in single, tri-color, or full-color configurations for all-day operational use.",
    features: [
      "High text contrast and readability from long distances",
      "Easy software scheduling (Wi-Fi, USB, or 4G cloud options)",
      "Rugged impact-resistant frame housing",
      "Low power consumption for continuous 24/7 service"
    ],
    specs: [
      { label: "Pixel Pitch", value: "P10 - P16" },
      { label: "Control Interface", value: "Wi-Fi / USB / RS485 / 4G" },
      { label: "Display Color", value: "Single, Tri-Color, or Full-Color" },
      { label: "Operating Life", value: ">100,000 Hours" },
      { label: "Cabinet Housing", value: "Waterproof Steel/Aluminium" }
    ]
  }
];
