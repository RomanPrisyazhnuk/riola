import { Image } from "../image";

export interface Place {
  id: string;
  name: string;
  slug: string;
  desctiption: string;
  image: Image;
  excursions: number;
}

export const mockPlace1: Place = {
  id: "1",
  slug: "pataiya",
  name: "Паттайя",
  desctiption: "Паттайя",
  image: { thumb: "/pataiya.webp", large: "/pataiya.webp" },
  excursions: 32,
};

export const mockPlace2 = {
  id: "2",
  slug: "vietnam",
  name: "Вьетнам",
  desctiption: "Паттайя",
  image: { thumb: "/vietnam.webp", large: "/vietnam.webp" },
  excursions: 15,
};

export const mockPlace3 = {
  id: "3",
  slug: "phuket",
  name: "Пхукет",
  desctiption: "Паттайя",
  image: { thumb: "/phuket.webp", large: "/phuket.webp" },
  excursions: 34,
};

export const mockPlace4 = {
  id: "4",
  slug: "stambul",
  name: "Стамбул",
  desctiption: "Паттайя",
  image: { thumb: "/stambul.webp", large: "/stambul.webp" },
  excursions: 70,
};

export const mockPlace5 = {
  id: "5",
  slug: "banghoc",
  name: "Бангкок",
  desctiption: "Паттайя",
  image: { thumb: "/banghoc.webp", large: "/banghoc.webp" },
  excursions: 50,
};

export const mockPlace6 = {
  id: "6",
  slug: "kapadokia",
  name: "Каппадокия",
  desctiption: "Паттайя",
  image: { thumb: "/kapadokia.webp", large: "/kapadokia.webp" },
  excursions: 21,
};
export const mockPlaces: Place[] = [
  mockPlace1,
  mockPlace2,
  mockPlace3,
  mockPlace4,
  mockPlace5,
  mockPlace6,
];
