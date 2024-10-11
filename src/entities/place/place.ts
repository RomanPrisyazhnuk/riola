import { Image } from "../image";

export interface Place {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: Image;
  excursions_count: number;
  images?:Image[]
}

export const mockPlace1: Place = {
  id: "1",
  slug: "pataiya",
  name: "Паттайя",
  description: "Паттайя",
  image: { thumb: "/pataiya.webp", large: "/pataiya.webp" },
  excursions_count: 32,
};

export const mockPlace2 = {
  id: "2",
  slug: "vietnam",
  name: "Вьетнам",
  description: "Паттайя",
  image: { thumb: "/vietnam.webp", large: "/vietnam.webp" },
  excursions_count: 15,
};

export const mockPlace3 = {
  id: "3",
  slug: "phuket",
  name: "Пхукет",
  description: "Паттайя",
  image: { thumb: "/phuket.webp", large: "/phuket.webp" },
  excursions_count: 34,
};

export const mockPlace4 = {
  id: "4",
  slug: "stambul",
  name: "Стамбул",
  description: "Паттайя",
  image: { thumb: "/stambul.webp", large: "/stambul.webp" },
  excursions_count: 70,
};

export const mockPlace5 = {
  id: "5",
  slug: "banghoc",
  name: "Бангкок",
  description: "Паттайя",
  image: { thumb: "/banghoc.webp", large: "/banghoc.webp" },
  excursions_count: 50,
};

export const mockPlace6 = {
  id: "6",
  slug: "kapadokia",
  name: "Каппадокия",
  description: "Паттайя",
  image: { thumb: "/kapadokia.webp", large: "/kapadokia.webp" },
  excursions_count: 21,
};
export const mockPlaces: Place[] = [
  mockPlace1,
  mockPlace2,
  mockPlace3,
  mockPlace4,
  mockPlace5,
  mockPlace6,
];
