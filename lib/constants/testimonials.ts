export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  project?: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Abebe Kebede",
    role: "Event Manager",
    company: "Ethiopian Airlines",
    content: "Fetan LED provided exceptional service for our annual corporate event. The LED screens were crystal clear, and their team handled the entire installation professionally. Our attendees were impressed by the visual quality.",
    rating: 5,
    project: "Corporate Annual Event",
  },
  {
    id: "2",
    name: "Sara Mohammed",
    role: "Marketing Director",
    company: "Dashen Brewery",
    content: "We've been working with Fetan LED for our outdoor advertising campaigns for over two years. Their LED billboards have significantly increased our brand visibility. The quality and reliability are unmatched in Ethiopia.",
    rating: 5,
    project: "Outdoor Advertising Campaign",
  },
  {
    id: "3",
    name: "Dawit Haile",
    role: "Operations Manager",
    company: "Addis Stadium",
    content: "The installation of our stadium display screens was seamless. Fetan LED's team understood our requirements perfectly and delivered a solution that enhances the spectator experience. Highly recommended for large-scale projects.",
    rating: 5,
    project: "Stadium Display Installation",
  },
  {
    id: "4",
    name: "Helen Tesfaye",
    role: "Store Manager",
    company: "Shoa Shopping Mall",
    content: "Our indoor LED display has transformed our customer engagement. The team at Fetan LED provided excellent guidance on the right specifications and installed everything on schedule. Great value for the investment.",
    rating: 4,
    project: "Indoor Display Installation",
  },
  {
    id: "5",
    name: "Mikael Araya",
    role: "Technical Director",
    company: "EBS TV",
    content: "As a broadcaster, we need reliable display technology. Fetan LED has been our trusted partner for studio displays. Their technical support is excellent, and the products perform flawlessly under demanding conditions.",
    rating: 5,
    project: "Studio Display Systems",
  },
  {
    id: "6",
    name: "Ruth Negussie",
    role: "Conference Coordinator",
    company: "UN Economic Commission for Africa",
    content: "Fetan LED handled our international conference displays with professionalism. Their attention to detail and quick response to last-minute changes made our event a success. We'll definitely work with them again.",
    rating: 5,
    project: "International Conference",
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return TESTIMONIALS.find((testimonial) => testimonial.id === id);
}

export function getAverageRating(): number {
  const total = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0);
  return Math.round((total / TESTIMONIALS.length) * 10) / 10;
}
