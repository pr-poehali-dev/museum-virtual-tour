import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const museums = [
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
        "https://images.unsplash.com/photo-1520637836862-4d197d17c958?w=800&h=600&fit=crop",
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

  const handleStartTour = (museumName: string) => {
    console.log(`Начинаем экскурсию: ${museumName}`);
  };

  const hermitagePhotos = [
    {
      url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
      title: "Зимний дворец - фасад Эрмитажа",
    },
    {
      url: "https://images.unsplash.com/photo-1571043733612-d5444ff06921?w=800&h=600&fit=crop",
      title: "Георгиевский зал",
    },
    {
      url: "https://images.unsplash.com/photo-1520637736862-4d197d17c958?w=800&h=600&fit=crop",
      title: "Главная лестница",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Виртуальные музейные экскурсии
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Исследуйте самые известные музеи мира не выходя из дома
        </p>
      </div>

      {/* Hermitage Photo Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Государственный Эрмитаж
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hermitagePhotos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Museums Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {museums.map((museum) => (
            <Card
              key={museum.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={museum.image}
                  alt={museum.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">
                    {museum.duration}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {museum.name}
                </CardTitle>
                <CardDescription className="text-purple-600 font-medium flex items-center gap-1">
                  <Icon name="MapPin" size={16} />
                  {museum.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {museum.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Icon name="Image" size={16} />
                      <span>{museum.exhibits} экспонатов</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Headphones" size={16} />
                      <span>Аудио-гид</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => handleStartTour(museum.name)}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать экскурсию
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Почему выбирают наши экскурсии?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Профессиональный аудио-гид
              </h4>
              <p className="text-gray-600 text-sm">
                Экспертные рассказы о каждом экспонате от искусствоведов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Интерактивность
              </h4>
              <p className="text-gray-600 text-sm">
                Управляйте темпом экскурсии и изучайте детали
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Доступно 24/7
              </h4>
              <p className="text-gray-600 text-sm">
                Посещайте музеи в любое удобное время
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
