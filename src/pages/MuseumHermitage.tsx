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
        "Одна из самых известных работ да Винчи в Эрмитаже. Картина написана темперой по дереву и демонстрирует характерную для Леонардо технику сфумато — мягкие переходы света и тени без резких контуров. Мадонна изображена кормящей младенца Христа, что символизирует материнскую любовь и жертвенность. Особое внимание привлекают руки Мадонны — их изящество и анатомическая точность свидетельствуют о глубоких познаниях художника в области медицины. Пейзаж на заднем плане, выполненный в голубоватых тонах, создает ощущение воздушной перспективы и бесконечности пространства.",
      image:
        "https://cdn.poehali.dev/files/101b5ae1-f047-43b4-8115-7127aa77695d.jpg",
      audioText:
        "Перед вами шедевр Леонардо да Винчи — Мадонна Литта, созданная в период расцвета творчества мастера. Название картины происходит от фамилии миланских аристократов Литта, которым она принадлежала до поступления в Эрмитаж в 1865 году. Обратите внимание на лицо Мадонны — оно излучает спокойствие и нежность. Да Винчи мастерски использует технику сфумато, создавая мягкие переходы между светом и тенью. Посмотрите на руки Мадонны — каждая складка кожи, каждый изгиб пальцев написаны с анатомической точностью. Младенец Христос изображен с удивительной естественностью — его поза и движения полны детской непосредственности. Пейзаж в окнах символизирует божественную природу происходящего, а голубоватая дымка создает ощущение бесконечности.",
      duration: "4:45",
      historicalContext:
        "Картина была создана во время пребывания Леонардо в Милане при дворе Лудовико Сфорца. Это период зрелости мастера, когда он совершенствовал свою технику и философские взгляды на искусство.",
      technique:
        "Темпера по дереву, 42×33 см. Использована техника сфумато для создания мягких переходов света и тени.",
    },
    {
      id: 2,
      title: "Возвращение блудного сына",
      artist: "Рембрандт ван Рейн",
      year: "1666-1669",
      description:
        "Величайший шедевр позднего творчества Рембрандта, написанный в последние годы жизни художника. Картина основана на евангельской притче о блудном сыне и является философским размышлением о прощении, любви и человеческой природе. Рембрандт изображает момент встречи отца с вернувшимся сыном с потрясающей психологической глубиной. Фигура коленопреклоненного сына, одетого в лохмотья, контрастирует с величественной фигурой отца в богатых одеждах. Особенно выразительны руки отца — одна мужская, сильная, другая более нежная, женственная, что символизирует единство отцовской и материнской любви. Свет исходит от фигур главных героев, погружая второстепенных персонажей в полумрак, что усиливает драматический эффект сцены.",
      image:
        "https://cdn.poehali.dev/files/661febde-0000-48be-9c09-164c8fbbf2cc.jpg",
      audioText:
        "Перед вами венец творчества Рембрандта — картина 'Возвращение блудного сына', написанная в последние годы жизни мастера. Это произведение считается одним из самых трогательных в мировом искусстве. Рембрандт создавал эту картину, будучи больным и обремененным долгами, что придает ей особую эмоциональную силу. Центр композиции — коленопреклоненный сын у ног отца. Посмотрите на его изношенную обувь, порванную одежду — художник не скрывает следов тяжелой жизни. Руки отца — это отдельная история: одна рука мужская, властная, другая более мягкая, почти женственная. Это символизирует полноту родительской любви. Обратите внимание на освещение — свет исходит не от внешнего источника, а словно от самих фигур, создавая мистическую атмосферу. В глубине картины видны другие персонажи — старший сын и слуги, их лица выражают различные эмоции от радости до недоумения.",
      duration: "5:20",
      historicalContext:
        "Картина создана в период тяжелых личных испытаний Рембрандта — смерти близких, финансовых трудностей и непризнания современниками.",
      technique:
        "Холст, масло, 262×205 см. Характерная для позднего Рембрандта пастозная техника письма и контрастная светотень.",
    },
    {
      id: 3,
      title: "Кающаяся Мария Магдалина",
      artist: "Тициан Вечеллио",
      year: "1560-1565",
      description:
        "Один из шедевров позднего творчества великого венецианского мастера. Картина изображает раскаявшуюся грешницу в момент духовного преображения. Тициан создал образ, полный человечности и глубокой эмоциональности. Мария Магдалина показана полуобнаженной, с распущенными волосами золотистого оттенка, что было характерно для венецианской школы живописи. Ее взгляд устремлен к небу, руки сложены в молитвенном жесте. Особенно выразительна цветовая гамма: теплые золотистые и красноватые тона кожи и волос контрастируют с холодными синими тонами неба. Пейзаж на заднем плане, с его мягкими очертаниями гор и деревьев, создает атмосферу умиротворения. Техника Тициана отличается свободной, почти импрессионистической манерой письма, особенно заметной в трактовке волос и тканей.",
      image:
        "https://cdn.poehali.dev/files/9644af41-8a3e-4d10-b842-ccfe05bb6596.jpg",
      audioText:
        "Перед вами произведение великого венецианца Тициана — 'Кающаяся Мария Магдалина'. Это одна из последних работ мастера, созданная в период его творческой зрелости. Тициан обращается к популярному в эпоху Возрождения сюжету о раскаянии Марии Магдалины. Обратите внимание на мастерство художника в передаче фактуры: золотистые волосы Магдалины написаны с удивительной легкостью и воздушностью, каждая прядь кажется живой. Посмотрите на ее лицо — в нем читается глубокое раскаяние и одновременно надежда на прощение. Руки, сложенные в молитве, выражают искреннюю веру. Цветовая гамма картины построена на контрасте теплых и холодных тонов — золотистая кожа и волосы противопоставлены холодному синему небу. Пейзаж на заднем плане типично венецианский — мягкие очертания, воздушная дымка. Тициан использует здесь свою знаменитую позднюю манеру — свободные мазки, которые на расстоянии создают удивительно точное изображение.",
      duration: "4:30",
      historicalContext:
        "Картина создана в поздний период творчества Тициана, когда художник достиг полной творческой зрелости и выработал уникальную живописную манеру.",
      technique:
        "Холст, масло, 119×97 см. Характерная для Тициана свободная манера письма с использованием пастозных мазков.",
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

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Исторический контекст
                  </h4>
                  <p className="text-sm text-gray-700">
                    {current.historicalContext}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Техника исполнения
                  </h4>
                  <p className="text-sm text-gray-700">{current.technique}</p>
                </div>
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
