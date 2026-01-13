import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PropertyContent = () => {
  const images = [
    'https://cdn.poehali.dev/files/2025-07-08 19-47-37.JPG',
    'https://cdn.poehali.dev/files/2021-07-21 20-31-35.JPG',
    'https://cdn.poehali.dev/files/2021-07-23 20-15-33.JPG',
    'https://cdn.poehali.dev/files/DSC_0080.JPG',
    'https://cdn.poehali.dev/files/DSC_0075.JPG',
    'https://cdn.poehali.dev/files/DSC_0071.JPG',
    'https://cdn.poehali.dev/files/DSC_0068.JPG',
    'https://cdn.poehali.dev/files/DSC_0072.JPG',
    'https://cdn.poehali.dev/files/2024-11-24 14-41-28.JPG',
    'https://cdn.poehali.dev/files/2024-11-24 14-41-19.JPG',
    'https://cdn.poehali.dev/files/2024-11-17 13-41-05.JPG',
    'https://cdn.poehali.dev/files/2024-11-24 14-41-12.JPG',
    'https://cdn.poehali.dev/files/2024-12-01 16-36-55.JPG'
  ];

  const amenities = [
    { icon: 'Wifi', title: 'Wi-Fi' },
    { icon: 'AirVent', title: 'Кондиционер' },
    { icon: 'Tv', title: 'Телевизор' },
    { icon: 'Waves', title: 'Вид на море' },
    { icon: 'ParkingCircle', title: 'Парковка' },
    { icon: 'Utensils', title: 'Кухня' },
    { icon: 'Refrigerator', title: 'Холодильник' },
    { icon: 'WashingMachine', title: 'Стиральная машина' }
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Прекрасная квартира с шикарным видом! Все очень чисто, хозяева встретили и провели экскурсию. Трансфер из аэропорта был очень удобен!' },
    { name: 'Дмитрий К.', rating: 5, text: 'Отличное расположение в заповеднике. Тихо, спокойно, море в 5 минутах. Квартира полностью оборудована всем необходимым.' },
    { name: 'Елена С.', rating: 5, text: 'Останавливались семьей на две недели. Все понравилось! Особенно порадовал трансфер и помощь хозяев с организацией экскурсий.' }
  ];

  const rules = [
    'Заезд: после 14:00',
    'Выезд: до 12:00',
    'Курение запрещено',
    'Животные не допускаются',
    'Максимальное количество гостей: 4 человека',
    'Тихий час: 22:00 - 08:00'
  ];

  return (
    <div className="space-y-12">
      <section id="gallery" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Галерея
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <img
                src={img}
                alt={`Фото квартиры ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      <section id="description" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Описание
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6 space-y-4">
            <p className="text-lg leading-relaxed">Сдается светлая и комфортная однокомнатная квартира для проживания и отдыха (40 м²) с видом на можжевеловый лес и море. Квартира находится в ЖК «Резиденция Аннаполис», в живописном горном заповеднике, в 5 минутах пешком от галечного пляжа.</p>
            <p className="text-lg leading-relaxed">В квартире есть все необходимое для комфортного проживания: двуспальная кровать, диван-кровать, встроенная кухня с необходимой посудой и техникой (холодильник, электроплита, СВЧ, чайник, стиральная машина), телевизор, кондиционер, Wi-Fi.</p>
            <p className="text-lg leading-relaxed">На территории комплекса: бассейн для взрослых и детей, детская площадка, зона отдыха с беседкой, охраняемая парковка.</p>
            <div className="bg-gradient-to-r from-ocean/10 to-accent/10 p-4 rounded-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-ocean mb-2">🚖 Трансфер по ценам Яндекс.Такси</p>
                  <p className="text-sm text-muted-foreground mb-3">Организуем встречу на жд вокзале или в аэропорту Анапы. Оплата по тарифам Яндекс.Такси</p>
                </div>
              </div>
              <a 
                href="https://3.redirect.appmetrica.yandex.com/route?start-lat=44.950537&start-lon=37.317821&end-lat=44.828056&end-lon=37.338400&level=2&appmetrica_tracking_id=1178268795219780156"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors"
              >
                <Icon name="Car" size={18} />
                Рассчитать в Яндекс Go
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="amenities" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Удобства
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((item, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-gradient-to-br from-ocean/10 to-accent/10 rounded-full">
                  <Icon name={item.icon as any} size={24} className="text-ocean" />
                </div>
                <p className="font-medium">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="reviews" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Отзывы гостей
        </h2>
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-lg">{review.name}</p>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="rules" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Правила проживания
        </h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-ocean mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="map" className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-ocean to-accent bg-clip-text text-transparent">
          Расположение
        </h2>
        <Card className="shadow-lg overflow-hidden">
          <img
            src="https://cdn.poehali.dev/files/Снимок экрана 2026-01-13 144145.jpg"
            alt="Карта расположения ЖК Анаполис"
            className="w-full h-auto object-cover"
          />
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Icon name="MapPin" size={20} className="text-ocean mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-lg mb-1">ЖК Резиденция Анаполис, Корпус 7</p>
                <p className="text-muted-foreground">Село Варваровка, Большой Утриш, Анапа</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Icon name="Waves" size={18} className="text-ocean" />
                <div>
                  <p className="text-sm font-medium">До моря</p>
                  <p className="text-sm text-muted-foreground">5 минут пешком</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Trees" size={18} className="text-ocean" />
                <div>
                  <p className="text-sm font-medium">До пляжа</p>
                  <p className="text-sm text-muted-foreground">300 метров</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PropertyContent;