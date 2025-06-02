import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import AudioPlayer from "@/components/AudioPlayer";
import { Link } from "react-router-dom";

export default function MuseumRussiaMyHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к музеям
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Россия моя история
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
              alt="Россия моя история"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Мультимедийный исторический парк
            </h2>
            <p className="text-lg text-gray-600">
              Уникальное пространство, где история России оживает с помощью
              современных технологий. Познакомьтесь с богатым наследием народа
              Саха и узнайте о ключевых событиях российской истории.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Icon name="MapPin" size={16} />
                Республика Саха (Якутия)
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                90 мин
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Image" size={16} />6 экскурсионных зон
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* История Российской империи */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Crown" size={24} className="text-red-600" />
                История Российской империи
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1576089073624-7b6b5f0e6a6e?w=500&h=300&fit=crop"
                    alt="Российская империя"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Погрузитесь в эпоху великих преобразований от Петра I до
                    Николая II. Интерактивные карты показывают расширение границ
                    империи, а голографические проекции воссоздают исторические
                    события.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      1721-1917 гг.
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Реформы Петра I
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Великие правители России"
                duration="7:32"
                audioText="Добро пожаловать в зал Российской империи. Здесь мы познакомимся с эпохой великих преобразований, которая началась с царствования Петра Первого. В 1721 году Россия была провозглашена империей, и началась эра грандиозных реформ. Петр Великий основал новую столицу - Санкт-Петербург, создал регулярную армию и флот, провел административные реформы. При Екатерине Второй империя достигла наивысшего расцвета, присоединив Крым и земли Северного Причерноморья. Александр Первый возглавил коалицию против Наполеона, а его брат Николай Первый укрепил самодержавие. Великие реформы Александра Второго отменили крепостное право в 1861 году, изменив облик страны. Последний император Николай Второй правил в сложное время революций и войн, завершив трехвековую историю династии Романовых."
              />
            </CardContent>
          </Card>

          {/* Культура народа Саха */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Mountain" size={24} className="text-blue-600" />
                Культура народа Саха
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&h=300&fit=crop"
                    alt="Культура Саха"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Древние традиции якутского народа сохранились в эпосе
                    Олонхо, который признан ЮНЕСКО шедевром устного наследия
                    человечества. Познакомьтесь с уникальной мифологией и
                    обрядами.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Олонхо
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Ысыах
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Древние традиции Саха"
                duration="6:45"
                audioText="Перед вами открывается мир древней культуры народа Саха - якутов. Этот народ сформировался в результате взаимодействия тюркских племен с местными народностями Севера. Основа духовной культуры якутов - героический эпос Олонхо, состоящий из множества сказаний о богатырях и мифических существах. В 2005 году Олонхо был включен в список шедевров устного наследия человечества ЮНЕСКО. Главный праздник народа Саха - Ысыах, праздник встречи лета, который отмечается в день летнего солнцестояния. Традиционные верования якутов включают шаманизм и культ природы. Якуты создали уникальную культуру коневодства и скотоводства в условиях Крайнего Севера. Их устное творчество, ремесла и музыкальные традиции передаются из поколения в поколение, сохраняя связь с предками."
              />
            </CardContent>
          </Card>

          {/* Современная Россия */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-purple-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Zap" size={24} className="text-purple-600" />
                Современная Россия
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&h=300&fit=crop"
                    alt="Современная Россия"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Достижения России в космонавтике, науке и технологиях.
                    Интерактивные стенды демонстрируют современные инновации и
                    роль России в мировом сообществе XXI века.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      Космос
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      Технологии
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Россия в XXI веке"
                duration="8:15"
                audioText="Современная Россия - это страна великих достижений в науке, технологиях и культуре. Россия остается мировым лидером в освоении космоса, продолжая традиции, заложенные Циолковским, Королевым и Гагариным. Российская космическая программа включает международную космическую станцию, запуски спутников и исследование дальнего космоса. В области науки Россия занимает ведущие позиции в физике, математике, химии и биологии. Российские ученые работают в таких областях как квантовые технологии, искусственный интеллект и нанотехнологии. Культурное наследие России признано во всем мире - российские театры, музыка, литература и кинематограф продолжают влиять на мировую культуру. Современная Россия активно развивает цифровые технологии, создает инновационные центры и технопарки. Страна играет важную роль в международных организациях и глобальных процессах, сохраняя при этом свою уникальную культурную идентичность."
              />
            </CardContent>
          </Card>

          {/* Герои Якутии */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Users" size={24} className="text-green-600" />
                Герои Якутии
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
                    alt="Герои Якутии"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Выдающиеся личности, внесшие вклад в развитие Якутии и
                    России. От первых исследователей Севера до современных
                    деятелей науки, культуры и спорта.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Исследователи
                    </span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      Герои войны
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Выдающиеся личности Саха"
                duration="7:20"
                audioText="Якутская земля подарила России и миру множество выдающихся личностей. Платон Алексеевич Ойунский - основоположник якутской советской литературы, записал и сохранил для потомков героический эпос Олонхо. Максим Аммосов - государственный деятель, именем которого названа Якутская государственная медицинская академия. Во время Великой Отечественной войны 62 якутянина стали Героями Советского Союза. Среди них Федор Попов - первый якут, удостоенный этого звания, и Илларион Слепцов, повторивший подвиг Александра Матросова. В мирное время прославились ученые как Андрей Христофоров - геолог, открывший крупнейшие алмазные месторождения, и Николай Жуков - полярный исследователь. Современная Якутия гордится спортсменами международного уровня, деятелями культуры и науки, которые достойно представляют родной край на мировой арене."
              />
            </CardContent>
          </Card>

          {/* Природные богатства */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-100 to-orange-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Gem" size={24} className="text-orange-600" />
                Природные богатства
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=500&h=300&fit=crop"
                    alt="Алмазы Якутии"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Якутия - крупнейший алмазодобывающий регион России. Здесь
                    также добывают золото, платину и редкие металлы. Уникальная
                    геология региона хранит несметные сокровища.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      Алмазы
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Золото
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Сокровища земли Саха"
                duration="6:50"
                audioText="Республика Саха - настоящая кладовая России. Недра Якутии содержат четверть мировых запасов алмазов. История алмазодобычи началась в 1954 году с открытия кимберлитовой трубки 'Зарница', а затем знаменитой трубки 'Мир'. Сегодня компания 'АЛРОСА' является крупнейшим производителем алмазов в мире. Помимо алмазов, Якутия богата золотом - здесь работают как крупные золотодобывающие предприятия, так и артели старателей. В недрах республики находятся месторождения платины, серебра, олова, сурьмы и редкоземельных металлов. Особую ценность представляют месторождения каменного угля, которые обеспечивают энергией северные районы. Якутия также обладает огромными запасами пресной воды и лесными ресурсами. Рациональное использование этих богатств является основой устойчивого развития региона и благосостояния его жителей."
              />
            </CardContent>
          </Card>

          {/* Аудиогид */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-100 to-indigo-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon name="Headphones" size={24} className="text-indigo-600" />
                Интерактивный аудиогид
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=300&fit=crop"
                    alt="Аудиогид"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Профессиональное аудиосопровождение на русском и якутском
                    языках. Дополнительные материалы, интерактивные карты и
                    возможность персонализации маршрута.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                      2 языка
                    </span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                      Детская версия
                    </span>
                  </div>
                </div>
              </div>
              <AudioPlayer
                title="Добро пожаловать в музей"
                duration="5:30"
                audioText="Добро пожаловать в мультимедийный исторический парк 'Россия моя история' в Якутске! Вы держите в руках современный аудиогид, который станет вашим проводником в увлекательное путешествие по истории. Наш музей использует самые современные технологии для создания полного эффекта присутствия. Вы увидите голографические проекции исторических личностей, интерактивные карты и мультимедийные инсталляции. Экспозиция разделена на тематические зоны, каждая из которых рассказывает свою историю. Вы можете выбрать полный маршрут продолжительностью полтора часа или сократить посещение, остановившись на наиболее интересных для вас темах. Для детей предусмотрена специальная программа с игровыми элементами и упрощенными объяснениями. Желаем вам увлекательного путешествия в мир истории!"
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать полную экскурсию
          </Button>
        </div>
      </main>
    </div>
  );
}
