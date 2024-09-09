export interface PriceOption {
  option_id: number;
  amount: number;
  old_amount: number;
  title: string;
}

export const mockPrices: PriceOption[] = [
  {
    option_id: 23,
    amount: 150,
    old_amount: 180,
    title: "Взрослые",
  },
  {
    option_id: 12,
    amount: 120,
    old_amount: 150,
    title: "Дети 2-10",
  },
];
