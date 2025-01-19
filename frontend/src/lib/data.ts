import {
  Camera,
  Gamepad,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import { LuStore } from "react-icons/lu";
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
    id: 0,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    image: "/image.png",
    star: 5,
  },
  {
    id: 1,
    name: "Gucci",
    price: 960,
    originalPrice: 1160,
    image: "/image copy.png",
    star: 4.5,
  },
  {
    id: 2,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    image: "/image.png",
    star: 5,
  },
  {
    id: 3,
    name: "Gucci",
    price: 960,
    originalPrice: 1160,
    image: "/image copy.png",
    star: 4.5,
  },
  {
    id: 4,
    name: "Gucci",
    price: 960,
    originalPrice: 1160,
    image: "/image copy.png",
    star: 4.5,
  },
] as const;

export const aboutData = [
  {
    icon: LuStore,
    number: 10.5,
    desc: "Sellers active our store",
  },
  {
    icon: LuStore,
    number: 33,
    desc: "Monthly Product Sale",
  },
  {
    icon: LuStore,
    number: 45.5,
    desc: "Customers active in our site",
  },
  {
    icon: LuStore,
    number: 25,
    desc: "Anual grow sale in our site",
  },
] as const;

export const teamMembers = [
  {
    name: "Zaw Hlaing Phyo",
    role: "Fullstack Developer",
    image: "/member1.png",
    links: {
      facebook: "https://www.facebook.com/ZawHlaingPhyo.23",
      twitter: "https://x.com/ZawHlaingPhyo",
      linkedin: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
    },
  },
  {
    name: "Prameshwor Dharel",
    role: "UI/UX Designer",
    image: "/member1.png",
    links: {
      facebook: "https://www.figma.com/@prameshwordhare",
      twitter: "",
      linkedin: "",
    },
  },
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/member1.png",
    links: {
      facebook: "https://www.facebook.com/ZawHlaingPhyo.23",
      twitter: "https://x.com/ZawHlaingPhyo",
      linkedin: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
    },
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/member1.png",
    links: {
      facebook: "https://www.facebook.com/ZawHlaingPhyo.23",
      twitter: "https://x.com/ZawHlaingPhyo",
      linkedin: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
    },
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/member1.png",
    links: {
      facebook: "https://www.facebook.com/ZawHlaingPhyo.23",
      twitter: "https://x.com/ZawHlaingPhyo",
      linkedin: "https://www.linkedin.com/in/zaw-hlaing-phyo-6734052a2/",
    },
  },
];
