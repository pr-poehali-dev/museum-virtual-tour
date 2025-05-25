import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const MuseumHermitage = () => {
  const navigate = useNavigate();
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const artworks = [
    {
      id: 1,
      title: "Мадонна Литта",
      artist: "Леонардо да Винчи",
      year: "1490-1491",
      description:
        "Одна из самых известных работ да Винчи в Эрмитаже. Изображает Мадонну с младенцем в интимной домашней обстановке.",
      image:
        "https://cdn.poehali.dev/files/101b5ae1-f047-43b4-8115-7127aa77695d.jpg",
      audioText:
        "Эта картина демонстрирует мастерство Леонардо в передаче нежности материнской любви. Обратите внимание на мягкое освещение и тонкую работу с тенями.",
      duration: "2:30",
    },
    {
      id: 2,
      title: "Возвращение блудного сына",
      artist: "Рембрандт ван Рейн",
      year: "1666-1669",
      description:
        "Шедевр позднего творчества Рембрандта, одна из самых трогательных картин в мировом искусстве.",
      image:
        "https://cdn.poehali.dev/files/661febde-0000-48be-9c09-164c8fbbf2cc.jpg",
      audioText:
        "Рембрандт создал эту картину в последние годы жизни. Мастерски передано прощение и безусловная любовь отца к сыну.",
      duration: "3:15",
    },
    {
      id: 3,
      title: "Кающаяся Мария Магдалина",
      artist: "Тициан Вечеллио",
      year: "1560-1565",
      description:
        "Один из шедевров позднего творчества Тициана. Картина изображает раскаявшуюся грешницу в момент духовного преображения.",
      image:
        "https://cdn.poehali.dev/files/0c4a8b2e-0000-4d5e-8f1c-2a3b4c5d6e7f.jpg",
      audioText:
        "Тициан создал это произведение в зрелые годы, мастерски передав эмоциональную глубину покаяния. Обратите внимание на драматическое освещение и выразительность жеста.",
      duration: "3:45",
    },
  ];

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const nextArtwork = () => {
    setCurrentArtwork((prev) => (prev + 1) % artworks.length);
    setIsPlaying(false);
  };

  const prevArtwork = () => {
    setCurrentArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
    setIsPlaying(false);
  };

  const current = artworks[currentArtwork];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
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
          <h1 className="text-xl font-bold text-gray-800">
            Государственный Эрмитаж
          </h1>
          <div className="text-sm text-gray-600">
            {currentArtwork + 1} из {artworks.length}
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
                  onClick={prevArtwork}
                  size="sm"
                  className="bg-white/90 text-gray-700 hover:bg-white"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <Button
                  onClick={nextArtwork}
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
                <p className="text-lg text-amber-600 font-medium">
                  {current.artist} • {current.year}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                {current.description}
              </p>

              {/* Audio Player */}
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Icon name="Headphones" size={20} />
                      Аудио-рассказ
                    </h3>
                    <span className="text-sm text-gray-600">
                      {current.duration}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 italic">
                    "{current.audioText}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Button
                      onClick={toggleAudio}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <Icon
                        name={isPlaying ? "Pause" : "Play"}
                        size={20}
                        className="mr-2"
                      />
                      {isPlaying ? "Пауза" : "Слушать"}
                    </Button>

                    <div className="flex-1 bg-amber-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Artwork Navigation */}
              <div className="grid grid-cols-3 gap-3">
                {artworks.map((artwork, index) => (
                  <button
                    key={artwork.id}
                    onClick={() => setCurrentArtwork(index)}
                    className={`p-2 rounded-lg border transition-all ${
                      index === currentArtwork
                        ? "border-amber-600 bg-amber-50"
                        : "border-gray-200 hover:border-amber-300"
                    }`}
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-16 object-cover rounded"
                    />
                    <p className="text-xs text-gray-600 mt-1 truncate">
                      {artwork.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuseumHermitage;
