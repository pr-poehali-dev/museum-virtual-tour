import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import AudioPlayer from "@/components/AudioPlayer";

const MuseumLenskyPillars = () => {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const locations = [
    {
      id: 1,
      title: "Столб Дед",
      type: "Скальное образование",
      height: "104 метра",
      description:
        "Самый высокий и величественный столб, названный так за свою мощную форму, напоминающую фигуру старца.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      audioText:
        "Этот величественный каменный гигант формировался миллионы лет. Его слои рассказывают историю нашей планеты.",
      duration: "3:20",
    },
    {
      id: 2,
      title: "Устье реки Буотама",
      type: "Природный комплекс",
      height: "Долина",
      description:
        "Место слияния рек, где открывается потрясающий вид на весь комплекс Ленских столбов.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      audioText:
        "Здесь древние воды Лены встречаются с притоком Буотама. Это священное место для народов Якутии.",
      duration: "2:45",
    },
    {
      id: 3,
      title: "Тукуланы",
      type: "Песчаные дюны",
      height: "До 30 метров",
      description:
        "Уникальные песчаные массивы в условиях вечной мерзлоты - настоящий природный феномен Севера.",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
      audioText:
        "Эти северные пустыни - результат тысячелетних ветров. Летом здесь можно встретить редких животных.",
      duration: "3:00",
    },
  ];

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length);
    setIsPlaying(false);
  };

  const prevLocation = () => {
    setCurrentLocation(
      (prev) => (prev - 1 + locations.length) % locations.length,
    );
    setIsPlaying(false);
  };

  const current = locations[currentLocation];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад к музеям
          </Button>
          <h1 className="text-xl font-bold text-gray-800">Ленские столбы</h1>
          <div className="text-sm text-gray-600">
            {currentLocation + 1} из {locations.length}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-[500px] object-cover"
                />
              </Card>

              {/* Navigation Controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <Button
                  onClick={prevLocation}
                  size="sm"
                  className="bg-white/90 text-gray-700 hover:bg-white"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <Button
                  onClick={nextLocation}
                  size="sm"
                  className="bg-white/90 text-gray-700 hover:bg-white"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {current.title}
                </h2>
                <p className="text-lg text-emerald-600 font-medium">
                  {current.type} • {current.height}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                {current.description}
              </p>

              <AudioPlayer
                title="Аудио-рассказ"
                duration={current.duration}
                audioText={current.audioText}
                className="bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location Navigation */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setCurrentLocation(index)}
                className={`p-2 rounded-lg border transition-all ${
                  index === currentLocation
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-16 object-cover rounded"
                />
                <p className="text-xs text-gray-600 mt-1 truncate">
                  {location.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumLenskyPillars;
