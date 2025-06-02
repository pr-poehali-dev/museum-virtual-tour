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
      "https://cdn.poehali.dev/files/44220f85-f399-498b-ae15-16182339726a.jpg",
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
  {
    id: 4,
    name: "Россия моя история",
    location: "Республика Саха (Якутия)",
    description:
      "Мультимедийный исторический парк, рассказывающий о богатой истории России и уникальной культуре народа Саха",
    image:
      "https://cdn.poehali.dev/files/e45f3176-1105-4a59-b240-4669f2a63b08.jpg",
    exhibits: 16,
    duration: "60 мин",
  },
];
