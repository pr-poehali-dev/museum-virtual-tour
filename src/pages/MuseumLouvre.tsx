import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const MuseumLouvre = () => {
  const navigate = useNavigate();
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const artworks = [
    {
      id: 1,
      title: "Мона Лиза",
      artist: "Леонардо да Винчи",
      year: "1503-1519",
      description:
        "Самая знаменитая картина в мире. Портрет Лизы Герардини поражает своей загадочной улыбкой и совершенной техникой сфумато.",
      image:
        "https://cdn.poehali.dev/files/c3ee00ff-520a-40b9-9f4a-a0979a5312b2.jpg",
      audioText:
        "Джоконда - это не просто портрет, это революция в искусстве. Да Винчи создал эффект, который до сих пор завораживает миллионы.",
      duration: "4:15",
    },
    {
      id: 2,
      title: "Венера Милосская",
      artist: "Александр Антиохийский",
      year: "130-100 до н.э.",
      description:
        "Одна из самых знаменитых античных скульптур. Воплощение идеала женской красоты древнегреческого искусства.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      audioText:
        "Эта мраморная богиня потеряла руки, но не красоту. Каждая линия скульптуры говорит о мастерстве древних греков.",
      duration: "3:30",
    },
    {
      id: 3,
      title: "Свобода, ведущая народ",
      artist: "Эжен Делакруа",
      year: "1830",
      description:
        "Символ французской революции и борьбы за свободу. Аллегория революции 1830 года стала иконой демократических движений.",
      image:
        "https://cdn.poehali.dev/files/c3ee00ff-520a-40b9-9f4a-a0979a5312b2.jpg",
      audioText:
        "Делакруа запечатлел дух революции. Свобода здесь не абстракция, а живая сила, ведущая людей к переменам.",
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
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
          <h1 className="text-xl font-bold text-gray-800">Лувр</h1>
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
                <p className="text-lg text-rose-600 font-medium">
                  {current.artist} • {current.year}
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                {current.description}
              </p>

              {/* Audio Player */}
              <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200">
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
                      className="bg-rose-600 hover:bg-rose-700 text-white"
                    >
                      <Icon
                        name={isPlaying ? "Pause" : "Play"}
                        size={20}
                        className="mr-2"
                      />
                      {isPlaying ? "Пауза" : "Слушать"}
                    </Button>

                    <div className="flex-1 bg-rose-200 rounded-full h-2">
                      <div className="bg-rose-600 h-2 rounded-full w-1/3"></div>
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
                        ? "border-rose-600 bg-rose-50"
                        : "border-gray-200 hover:border-rose-300"
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

export default MuseumLouvre;
