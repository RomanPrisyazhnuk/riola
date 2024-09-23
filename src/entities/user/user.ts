export type UserPhoneType = "whatsapp" | "telegram";

export interface User {
  name: string;
  email: string;
  phone: string;
  phone_type: UserPhoneType;
  avatar: string;
  type: string;
}

export const mockUser = {
  firstName: "Vasiliy",
  lastName: "Pupkin",
  email: "mockMail@fff.com",
  phone: "23525342354",
  avatar: "",
};
