import { Image, mockImage } from "../image";
import { LocationObj, mockLocationObjs } from "../location/location";
import { mockPrices, PriceOption } from "../price";

export interface Excursion {
  id: number;
  name: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  slug: string;
  image?: Image;
  orderedCount?: string;
  location: LocationObj;
  prices: PriceOption[];
  duration?: string;
  groupSize?: string;
  type?: string;
  rating: number;
}
export interface ExcursionFull extends Excursion {
  images: Image[];
  similar: Excursion[];
  duration_days: number;
  duration_hours: number;
  meta_title: string;
  meta_description: string;
  summary?: string;
  itinerary?: string;
  included?: string;
  similarExcursions?: Excursion[];
}

export const mockExcursion1: Excursion = {
  id: 132354,
  name: "Пхи Пхи: 5 островов",
  slug: "phi-phi-5-ilands",
  image: { thumb: "/pp-60-520-820-90.webp", large: "/pp-60-520-820-90.webp" },
  orderedCount: "80k",
  location: mockLocationObjs[0],
  prices: mockPrices,
  duration: "6ч",
  groupSize: "до 55 чел",
  type: "Групповая",
  rating: 3,
};

export const mockExcursion2: Excursion = {
  id: 123,
  name: "Симиланские острова",
  slug: "semilands",
  image: { thumb: "/min-520-820-90.webp", large: "/min-520-820-90.webp" },
  orderedCount: "80k",
  location: mockLocationObjs[1],
  prices: mockPrices,
  duration: "11ч",
  groupSize: "до 60 чел",
  type: "Групповая",
  rating: 5,
};

export const mockExcursions = [
  mockExcursion1,
  mockExcursion2,
  mockExcursion1,
  mockExcursion2,
  mockExcursion1,
  mockExcursion2,
  mockExcursion1,
  mockExcursion2,
  mockExcursion1,
  mockExcursion2,
  mockExcursion1,
  mockExcursion2,
];

export const mockExcursion1Full: ExcursionFull = {
  id: 132354,
  name: "Пхи Пхи: 5 островов",
  slug: "phi-phi-5-ilands",
  image: { thumb: "/pp-60-520-820-90.webp", large: "/pp-60-520-820-90.webp" },
  orderedCount: "80k",
  location: mockLocationObjs[0],
  prices: mockPrices,
  duration: "6ч",
  groupSize: "до 55 чел",
  type: "Групповая",
  rating: 3,
  images: [mockImage],
  duration_days: 2,
  duration_hours: 15,
  meta_description: "",
  meta_title: "",
  similar: mockExcursions,
};
