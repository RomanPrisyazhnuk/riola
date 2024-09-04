import { Image } from "./image";

export interface Place {
  id: string;
  slug: string;
  title: string;
  desctiption: string;
  image: Image;
  excursionsCount: number;
}

export const mockPlace1: Place = {
  id: "1",
  slug: "pataiya",
  title: "Паттайя",
  desctiption: "Паттайя",
  image: { thumb: "/pataiya.webp", large: "/pataiya.webp" },
  excursionsCount: 32,
};

export const mockPlace2 = {
  id: "2",
  slug: "vietnam",
  title: "Вьетнам",
  desctiption: "Паттайя",
  image: { thumb: "/vietnam.webp", large: "/vietnam.webp" },
  excursionsCount: 15,
};

export const mockPlace3 = {
  id: "3",
  slug: "phuket",
  title: "Пхукет",
  desctiption: "Паттайя",
  image: { thumb: "/phuket.webp", large: "/phuket.webp" },
  excursionsCount: 34,
};

export const mockPlace4 = {
  id: "4",
  slug: "stambul",
  title: "Стамбул",
  desctiption: "Паттайя",
  image: { thumb: "/stambul.webp", large: "/stambul.webp" },
  excursionsCount: 70,
};

export const mockPlace5 = {
  id: "5",
  slug: "banghoc",
  title: "Бангкок",
  desctiption: "Паттайя",
  image: { thumb: "/banghoc.webp", large: "/banghoc.webp" },
  excursionsCount: 50,
};

export const mockPlace6 = {
  id: "6",
  slug: "kapadokia",
  title: "Каппадокия",
  desctiption: "Паттайя",
  image: { thumb: "/kapadokia.webp", large: "/kapadokia.webp" },
  excursionsCount: 21,
};
export const mockPlaces: Place[] = [
  mockPlace1,
  mockPlace2,
  mockPlace3,
  mockPlace4,
  mockPlace5,
  mockPlace6,
];
