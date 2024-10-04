export interface Image {
  thumb: string;
  large: string;
  videoId?: string;
}

export enum GalleryTypes {
  Mobile = "mobile",
  Desktop = "desctop",
}

export const mockImage = {
  thumb: "/b-2-520-820-90.webp",
  large: "/b-2-520-820-90.webp",
};
