import {
  Camera,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
export const categories = [
  "Woman's Fashion",
  "Man's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's Toys",
  "Groceries & Pets",
  "Health & Beauty",
] as const;

export const Electronics = [
  "Phones",
  "Computers",
  "Smartwatch",
  "Camera",
  "Headphones",
  "Gaming",
] as const;

export const ElectronicsG = [
  { name: "Phones", icon: Smartphone },
  {
    name: "Computers",
    icon: Monitor,
  },
  {
    name: "Smartwatch",
    icon: Watch,
  },
  {
    name: "Camera",
    icon: Camera,
  },
  {
    name: "Headphones",
    icon: Headphones,
  },
  {
    name: "Gamimg",
    icon: Gamepad,
  },
] as const;

export const products = [
  {
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    image: "/image.png",
    star: 5,
  },
  {
    name: "Gucci",
    price: 960,
    originalPrice: 1160,
    image: "/image copy.png",
    star: 4.5,
  },
  {
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    image: "/image.png",
    star: 5,
  },
  {
    name: "Gucci",
    price: 960,
    originalPrice: 1160,
    image: "/image copy.png",
    star: 4.5,
  },
] as const
