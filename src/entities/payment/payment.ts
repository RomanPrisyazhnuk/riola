export interface PaymentData {
  methods: Payment[];
  amount: number;
  currency: string;
  item_count: number;
}

export interface Payment {
  type: string;
  icons?: string[];
  title: string;
  url: string;
  images?: string[];
}
