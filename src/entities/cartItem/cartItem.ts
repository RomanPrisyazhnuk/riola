import {
  // Excursion,
  ExcursionFull,
  // mockExcursion1,
  // mockExcursion2,
} from "../excursion/excursion";
import { Transfer } from "../transfer/transfer";

export interface CartItem {
  item: ExcursionFull | Transfer;
  starts_at: string;
  options: { id: number; amount: number }[];
  //Порядок и айди должен соответствовать опциям цены в экскурсии или трансфере
}

// export const mocCartItem: CartItem = {
//   item: mockExcursion1,
//   starts_at: "2024-10-01",
//   options: [
//     { id: 3, amount: 5 },
//     { id: 34, amount: 2 },
//   ],
// };
// export const mocCartItem1: CartItem = {
//   item: mockExcursion2,
//   starts_at: "2024-11-01",
//   options: [
//     { id: 2, amount: 2 },
//     { id: 33, amount: 7 },
//   ],
// };
