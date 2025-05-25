import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const MuseumLouvre = () => {
  const navigate = useNavigate();
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const artworks = [
    {
      id: 1,
      title: "Мона Лиза",
      artist: "Леонардо да Винчи",
      year: "1503-1519",
      description:
        "Самая знаменитая картина в мире. Портрет Лизы Герардини поражает своей загадочной улыбкой и совершенной техникой сфумато.",
      image:
        "https://cdn.poehali.dev/files/9e27ff57-8338-43f0-bc77-6d43ad2eec94.jpg",
      audioText: `Добро пожаловать в самый священный зал Лувра, где висит самая знаменитая картина в истории человечества - Мона Лиза Леонардо да Винчи. 

        Эта небольшая картина размером всего семьдесят семь на пятьдесят три сантиметра изменила весь ход мирового искусства. Леонардо работал над ней более шестнадцати лет, с тысяча пятьсот третьего по тысяча пятьсот девятнадцатый год.

        Посмотрите на эту загадочную улыбку - она кажется живой. Да Винчи использовал революционную технику сфумато - дымчатую манеру письма без четких контуров. Благодаря этому лицо Моны Лизы словно окутано легкой дымкой, создающей ощущение объема и жизни.

        Интересно, что модель для картины - Лиза Герардини, жена флорентийского торговца Франческо дель Джокондо. Отсюда второе название картины - Джоконда, что означает веселая, радостная.

        Обратите внимание на руки - они сложены с аристократической грацией. Да Винчи считал, что руки отражают душу человека. А фон картины - это не просто пейзаж, а философское размышление о связи человека и природы.

        Мона Лиза пережила множество приключений. В тысяча девятьсот одиннадцатом году ее украл итальянский работник Лувра Винченцо Перуджа. Картина пропадала два года и была найдена случайно.

        Сегодня Мону Лизу защищает пуленепробиваемое стекло, а ежедневно на нее смотрят более тридцати тысяч посетителей со всего мира.`,
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
        "https://cdn.poehali.dev/files/28de392b-8c58-4d2e-8514-3b675d2a85e1.jpg",
      audioText: `Перед вами стоит величайшее творение античной скульптуры - Венера Милосская, созданная во втором веке до нашей эры неизвестным мастером, предположительно Александром Антиохийским.

        Эта мраморная богиня высотой два метра четыре сантиметра была обнаружена в тысяча восемьсот двадцатом году на греческом острове Милос французским моряком. Отсюда и название - Милосская.

        Венера потеряла руки, но не потеряла своего величия. Искусствоведы до сих пор спорят, что она держала в руках - яблоко, символ красоты, или прялку, символ женственности.

        Посмотрите на эту совершенную позу - контрапост, когда вес тела перенесен на одну ногу. Эта техника создает ощущение движения в статичной скульптуре. Древние греки достигли невероятного мастерства в передаче человеческого тела.

        Складки одежды, драпирующей нижнюю часть фигуры, выполнены с математической точностью. Каждая линия рассчитана так, чтобы подчеркнуть красоту женского силуэта.

        Венера символизирует греческий идеал красоты - гармонию духа и тела. Древние греки верили, что красота тела отражает красоту души.

        Интересный факт - Венера Милосская вдохновила множество художников и скульпторов последующих эпох. Сальвадор Дали создал серию работ, посвященных этой скульптуре.

        Сегодня Венера остается символом классической красоты и совершенства античного искусства.`,
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
        "https://cdn.poehali.dev/files/9e27ff57-8338-43f0-bc77-6d43ad2eec94.jpg",
      audioText: `Эта монументальная картина Эжена Делакруа размером два метра шестьдесят на три метра двадцать пять сантиметров стала символом французского духа свободы.

        Делакруа написал ее под впечатлением от июльской революции тысяча восемьсот тридцатого года, когда парижане восстали против короля Карла десятого.

        В центре композиции - аллегорическая фигура Свободы с обнаженной грудью, держащая трехцветное знамя Франции. Это не портрет конкретной женщины, а символ революционного духа народа.

        Рядом с ней - представители разных слоев общества: буржуа в цилиндре с ружьем, рабочий с саблей, уличный мальчишка с пистолетами. Все они объединены общей идеей борьбы за свободу.

        Обратите внимание на цветовую гамму - триколор французского флага присутствует во всей картине: красный в крови и одежде, белый в рубашке Свободы, синий в небе и одежде персонажей.

        Делакруа использовал динамичную диагональную композицию, создающую ощущение движения вперед. Фигура Свободы возвышается над толпой, ведя ее к победе.

        На переднем плане художник изобразил тела погибших - напоминание о цене свободы. Революция требует жертв, но стремление к свободе непобедимо.

        Эта картина стала настолько знаковой, что ее изображение украшает французские монеты достоинством в сто франков. Она вдохновляла борцов за свободу по всему миру.

        Интересно, что сам Делакруа не участвовал в революции, но был глубоко потрясен героизмом простых людей, вышедших на баррикады.`,
      duration: "3:45",
    },
    {
      id: 4,
      title: "Кающаяся Мария Магдалина",
      artist: "Жорж де Латур",
      year: "1635-1640",
      description:
        "Шедевр французского караваджизма. Интимная сцена покаяния, освещенная единственной свечой, создает атмосферу глубокой духовности.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      audioText: `Перед вами один из самых поэтичных и загадочных шедевров французской живописи семнадцатого века - "Кающаяся Мария Магдалина" Жоржа де Латура.

        Жорж де Латур был мастером света и тени, последователем итальянского художника Караваджо. Он создал уникальный стиль, где единственным источником света служит пламя свечи.

        На картине изображена Мария Магдалина в момент глубокого покаяния. Она сидит в полутемной комнате, освещенной лишь мерцающим светом свечи. Это не просто портрет - это философское размышление о грехе, покаянии и искуплении.

        Обратите внимание, как мастерски Латур использует свет. Пламя свечи не только освещает лицо Марии, но и создает игру теней, которая словно материализует ее внутренние переживания.

        Символика картины глубока: зеркало символизирует тщеславие мирской жизни, которую она оставляет позади. Свеча - это свет веры, озаряющий путь к спасению. Простота одежды подчеркивает отказ от земных соблазнов.

        Поза Марии передает состояние глубокой задумчивости. Её рука мягко касается черепа - древнего символа бренности земного существования. Это напоминание о том, что истинная красота - в душе, а не в телесной оболочке.

        Латур работал в Лотарингии, в эпоху религиозных войн и эпидемий. Его искусство отражало духовные искания времени, когда люди особенно остро ощущали хрупкость жизни.

        Техника художника поражает своей виртуозностью. Каждый блик света, каждая тень просчитаны математически точно. Латур изучал оптику и знал законы преломления света.

        Эта картина - гимн внутренней красоте и духовному преображению. Мария Магдалина здесь не грешница, а символ человеческой души, обретающей путь к истине.`,
      duration: "4:00",
    },
  ];

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        artworks[currentArtwork].audioText,
      );
      utterance.lang = "ru-RU";
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onstart = () => {
        setIsPlaying(true);
        const estimatedDuration =
          artworks[currentArtwork].audioText.length / 12; // примерно 12 символов в секунду
        setTotalTime(estimatedDuration);
        setCurrentTime(0);

        // Симуляция прогресса
        intervalRef.current = setInterval(() => {
          setCurrentTime((prev) => {
            if (prev >= estimatedDuration) {
              setIsPlaying(false);
              return 0;
            }
            return prev + 1;
          });
        }, 1000);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };

      speechRef.current = utterance;
      speechSynthesis.speak(utterance);
    }
  };

  const stopAudio = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextArtwork = () => {
    stopAudio();
    setCurrentArtwork((prev) => (prev + 1) % artworks.length);
  };

  const prevArtwork = () => {
    stopAudio();
    setCurrentArtwork((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const current = artworks[currentArtwork];
  const progress = totalTime > 0 ? (currentTime / totalTime) * 100 : 0;

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

              {/* Enhanced Audio Player */}
              <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Icon name="Headphones" size={20} />
                      Аудио-экскурсия
                    </h3>
                    <span className="text-sm text-gray-600">
                      {formatTime(currentTime)} / {current.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
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

                    <div className="flex-1 bg-rose-200 rounded-full h-2 cursor-pointer">
                      <div
                        className="bg-rose-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {isPlaying && (
                    <div className="text-sm text-gray-600 bg-white/60 p-3 rounded-lg">
                      <Icon name="Volume2" size={16} className="inline mr-2" />
                      Воспроизводится аудио-рассказ...
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Artwork Navigation */}
              <div className="grid grid-cols-3 gap-3">
                {artworks.map((artwork, index) => (
                  <button
                    key={artwork.id}
                    onClick={() => {
                      stopAudio();
                      setCurrentArtwork(index);
                    }}
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
