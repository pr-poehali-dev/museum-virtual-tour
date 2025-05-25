import { Museum } from "@/types/museum";

export const museums: Museum[] = [
  {
    id: 1,
    name: "Ленские столбы",
    location: "Республика Саха (Якутия)",
    description:
      "Уникальные скальные образования на берегу реки Лена, внесенные в список Всемирного наследия ЮНЕСКО",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    exhibits: 12,
    duration: "45 мин",
  },
  {
    id: 2,
    name: "Государственный Эрмитаж",
    location: "Санкт-Петербург, Россия",
    description:
      "Один из крупнейших и самых значительных художественных и культурно-исторических музеев мира",
    image:
      "https://images.unsplash.com/photo-1571089864657-c645fcaa8b92?w=800&h=600&fit=crop",
    exhibits: 24,
    duration: "90 мин",
  },
  {
    id: 3,
    name: "Лувр",
    location: "Париж, Франция",
    description:
      "Самый посещаемый музей мира с бесценными произведениями искусства, включая Мону Лизу",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
    exhibits: 18,
    duration: "75 мин",
  },
];
