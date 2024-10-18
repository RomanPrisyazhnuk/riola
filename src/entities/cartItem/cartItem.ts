import { ExcursionFull, mockExcursion1Full } from "../excursion/excursion";
import { Transfer } from "../transfer/transfer";

export interface CartItemOptionMember {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export const mockCartItemOptionMember1: CartItemOptionMember = {
  id: 321123123,
  firstName: "Vasiliy",
  lastName: "Pupkin",
  email: "asfsfa@dsaffvdv.asc",
  phone: "+376433455667",
};

export interface CartItemOption {
  id: number;
  count: number;
  customers?: CartItemOptionMember[];
}

export const mockCartItemOption1: CartItemOption = {
  id: 321123123,
  count: 1,
  customers: [mockCartItemOptionMember1, { id: 23432235 }],
};

export interface CartItem {
  id: number;
  item: ExcursionFull | Transfer;
  starts_at: string;
  address?: string;
  options: CartItemOption[];
  //Порядок и айди должен соответствовать опциям цены в экскурсии или трансфере
}

export const mockCartItem: CartItem = {
  id: 123456,
  item: mockExcursion1Full,
  starts_at: "12-12-1989",
  address: "aadvadv",
  options: [mockCartItemOption1],
};
