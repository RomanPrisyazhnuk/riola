import { Image } from "../image";
import { PriceOption } from "../price";

export interface Transfer {
  id: number;
  price: PriceOption;
  image: Image;
  currency: string;
  service_type: string;
  vehicle_type: string;
  name: string;
  max_pax: number;
  max_baggage: number;
  possible_models: any;
  distance: number;
  duration: number;
  opportunities: [];
}

// export const mocktransfer1: Excursion = {
//   id: "132354",
//   name: "Пхи Пхи: 5 островов",
//   slug: "phi-phi-5-ilands",
//   image: { thumb: "/pp-60-520-820-90.webp", large: "/pp-60-520-820-90.webp" },
//   orderedCount: "80k",
//   location: mockLocationObjs[0],
//   prices: mockPrices,
//   duration: "6ч",
//   groupSize: "до 55 чел",
//   type: "Групповая",
//   rating: 3,
// };
// export const mockExcursion2: Excursion = {
//   id: "123",
//   name: "Симиланские острова",
//   slug: "semilands",
//   image: { thumb: "/min-520-820-90.webp", large: "/min-520-820-90.webp" },
//   orderedCount: "80k",
//   location: mockLocationObjs[1],
//   prices: mockPrices,
//   duration: "11ч",
//   groupSize: "до 60 чел",
//   type: "Групповая",
//   rating: 5,
// };

// export const mockExcursions = [
//   mockExcursion1,
//   mockExcursion2,
//   mockExcursion1,
//   mockExcursion2,
//   mockExcursion1,
//   mockExcursion2,
//   mockExcursion1,
//   mockExcursion2,
//   mockExcursion1,
//   mockExcursion2,
//   mockExcursion1,
//   mockExcursion2,
// ];
