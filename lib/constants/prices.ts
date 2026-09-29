export interface PriceItem {
  id: string;
  name: string;
  category: "Indoor" | "Outdoor";
  type: "Cabinet" | "Module";
  priceFrom: number;
  priceTo: number;
  unit: string;
  note?: string;
}

export const PRODUCT_PRICES: PriceItem[] = [
  {
    id: "p25-cabinet",
    name: "P2.5 Cabinet",
    category: "Indoor",
    type: "Cabinet",
    priceFrom: 360_000,
    priceTo: 500_000,
    unit: "ETB",
  },
  {
    id: "p25-module",
    name: "P2.5 Module",
    category: "Indoor",
    type: "Module",
    priceFrom: 320_000,
    priceTo: 450_000,
    unit: "ETB",
  },
  {
    id: "p4-module",
    name: "P4 Module",
    category: "Outdoor",
    type: "Module",
    priceFrom: 220_000,
    priceTo: 400_000,
    unit: "ETB",
  },
  {
    id: "p4-cabinet",
    name: "P4 Cabinet",
    category: "Outdoor",
    type: "Cabinet",
    priceFrom: 340_000,
    priceTo: 500_000,
    unit: "ETB",
  },
  {
    id: "p10-single",
    name: "P10 Single Color",
    category: "Outdoor",
    type: "Module",
    priceFrom: 80_000,
    priceTo: 200_000,
    unit: "ETB",
  },
  {
    id: "p10-full",
    name: "P10 Full Color",
    category: "Outdoor",
    type: "Module",
    priceFrom: 110_000,
    priceTo: 220_000,
    unit: "ETB",
  },
];

export function formatEtbRange(from: number, to: number): string {
  const fmt = (n: number) => n.toLocaleString("en-US");
  return `${fmt(from)} – ${fmt(to)} ETB`;
}
