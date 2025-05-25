import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "@/components/AudioPlayer";

const MuseumHermitage = () => {
  const navigate = useNavigate();
  const [currentArtwork, setCurrentArtwork] = useState(0);

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
        "Добро пожаловать к шедевру Леонардо да Винчи — картине «Мадонна Литта», созданной между 1490 и 1491 годами. Это произведение представляет собой один из прекраснейших примеров искусства Высокого Возрождения и демонстрирует непревзойденное мастерство великого итальянского художника. Картина написана темперой на дереве и имеет размеры 42 на 33 сантиметра. Название произведения происходит от имени миланской семьи Литта, которая долгое время владела этим шедевром. В 1865 году император Александр Второй приобрел картину для Императорского Эрмитажа за огромную по тем временам сумму — сто тысяч франков. Композиция изображает Мадонну с младенцем Христом в момент кормления. Леонардо мастерски передал интимность материнской любви и нежности. Обратите внимание на совершенное владение техникой сфумато — мягкие переходы света и тени создают почти осязаемую атмосферу. Особенно поразительны руки Мадонны — их изящество и анатомическая точность свидетельствуют о глубоких познаниях да Винчи в области человеческого тела. Младенец изображен с поразительным реализмом, его пухлые щечки и детские пропорции выполнены с математической точностью. Пейзаж на заднем плане, видимый через окна, характерен для североитальянской живописи и демонстрирует воздушную перспективу — еще одно открытие Леонардо.",
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
        "Перед вами величайший шедевр Рембрандта ван Рейна — картина «Возвращение блудного сына», созданная в последние годы жизни мастера, между 1666 и 1669 годами. Это монументальное полотно размером 262 на 205 сантиметров стало духовным завещанием великого голландского художника. Сюжет основан на притче Иисуса Христа из Евангелия от Луки о сыне, который растратил отцовское наследство и вернулся домой в нищете. Рембрандт интерпретировал эту библейскую историю как универсальную драму человеческого прощения и безусловной любви. Композиция построена вокруг центральной группы — коленопреклоненного сына и обнимающего его отца. Мастерство Рембрандта проявляется в каждой детали: обратите внимание на руки отца — одна мужская, сильная, другая более мягкая, женственная, символизирующие отцовскую и материнскую любовь одновременно. Освещение играет ключевую роль — золотистый свет исходит как будто изнутри фигур, создавая мистическую атмосферу. Одежда блудного сына — рваная, выцветшая, стоптанные башмаки рассказывают историю его скитаний без слов. На заднем плане видны фигуры старшего брата и слуг, их лица выражают различные эмоции — от осуждения до сочувствия. Цветовая гамма построена на контрасте теплых охристых и холодных коричневых тонов. Эта картина считается вершиной психологизма в мировой живописи.",
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
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
      audioText:
        "Познакомьтесь с одним из наиболее впечатляющих произведений позднего периода творчества Тициана Вечеллио — картиной «Кающаяся Мария Магдалина», написанной между 1560 и 1565 годами. Это полотно размером 119 на 97 сантиметров представляет собой вершину венецианской живописи эпохи Позднего Возрождения. Тициан, которому на момент создания картины было уже за семьдесят лет, достиг невиданной прежде выразительности и эмоциональной глубины. Мария Магдалина изображена в момент глубокого духовного переживания — ее взгляд устремлен к небесам, руки сложены в молитвенном жесте. Художник мастерски передал внутреннее преображение героини через внешние детали: распущенные золотистые волосы символизируют отказ от мирских соблазнов, а драгоценности рядом — от материальных благ. Особое внимание обратите на живописную технику мастера — в поздний период Тициан писал не только кистью, но и пальцами, создавая уникальную фактуру. Красочный слой нанесен свободно, местами просвечивает холст, что создает особую вибрацию цвета. Колорит построен на контрасте теплых золотисто-охристых тонов тела и волос с холодным голубоватым тоном неба. Драматическое освещение усиливает эмоциональное воздействие — свет падает сверху, выхватывая из полумрака фигуру кающейся грешницы. Эта картина оказала огромное влияние на развитие европейской живописи, особенно на творчество Рубенса и художников барокко. В Эрмитаж произведение поступило в 1850 году из собрания графа Кочубея.",
      duration: "3:45",
    },
  ];

  const nextArtwork = () => {
    setCurrentArtwork((prev) => (prev + 1) % artworks.length);
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
