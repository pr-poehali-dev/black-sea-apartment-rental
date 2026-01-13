import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const images = [
    'https://cdn.poehali.dev/files/2025-07-08 19-47-37.JPG',
    'https://cdn.poehali.dev/files/2021-07-21 20-31-35.JPG',
    'https://cdn.poehali.dev/files/2021-07-23 20-15-33.JPG',
    'https://cdn.poehali.dev/files/DSC_0080.JPG',
    'https://cdn.poehali.dev/files/DSC_0075.JPG',
    'https://cdn.poehali.dev/files/DSC_0071.JPG',
    'https://cdn.poehali.dev/files/DSC_0068.JPG',
    'https://cdn.poehali.dev/files/DSC_0072.JPG'
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

  const prices = [
    { period: 'Май - Июнь', price: '5 000', description: 'Низкий сезон' },
    { period: 'Июль - Август', price: '6 000', description: 'Высокий сезон' },
    { period: 'Сентябрь - Октябрь', price: '4 000', description: 'Бархатный сезон' }
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
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-purple-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean via-ocean-light to-accent opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNMiAyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative container mx-auto px-4 py-20 text-white">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              ЖК Анаполис • Заповедник
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Квартира на берегу<br />Черного моря
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-2xl">
              Современная однокомнатная квартира в экологически чистом районе
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-ocean hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
                <Icon name="Car" size={20} className="mr-2" />
                Трансфер в подарок
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <Card className="mb-12 shadow-2xl animate-fade-in bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-ocean to-ocean-light rounded-lg">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Площадь</p>
                  <p className="font-semibold">45 м²</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-ocean-light to-secondary rounded-lg">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Гости</p>
                  <p className="font-semibold">До 4 человек</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-lg">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">До моря</p>
                  <p className="font-semibold">5 минут пешком</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-accent to-purple-500 rounded-lg">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Рейтинг</p>
                  <p className="font-semibold">5.0 (24 отзыва)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
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
                  <p className="text-lg leading-relaxed">Сдается светлая и комфортная однокомнатная квартира для проживания и отдыха (40 м²) с видом на можжевеловый лес и море. Квартира находится в ЖК «Резиденция Аннаполис», в живописном горном районе. Жк расположен на первой береговой линии (400 метров от черного моря) в границах природного заповедника. Жк понравится всем любителям тихого и спокойного отдыха на море. 
Квартира полностью оборудована: высокоскоростной интернет, wi-fi, smart-tv, оборудованная кухня, стиральная машина, сплит-система. Есть вся необходимая мебель: три дивана, столы, стулья. Два балкона: французский и большой 9 метров, оба в стекле. Для полноценного отдыха на балконе есть столик и шезлонги. 
Вместимость квартиры до 5 человек, для семьи в самый раз)
Квартира сдается сроком от 5 дней и более. 
После каждого гостя проводится санитарная обработка помещения! 

На территории комплекса имеется охраняемая парковка, продуктовый магазин, точка с выпечкой, три бассейна, несколько детских площадок. Расстояние до моря и пляжа - 7 минут неспешной ходьбы по бетонированной дороге. Автобусные остановки в обе стороны.
Проезд от жк до г. Анапа - 9 км., до с. Сукко – 2 км., до заповедника малый утриш – 5 км., до аэропорта – 25 км., до ж/д вокзала – 20 км. При необходимости организуем трансфер. 

При заселении необходимо иметь паспорт, для заключения договора. Залоговая сумма в размере 5000 рублей (является возвратной на момент выезда). Залоговая сумма не возвращается за нарушения правил проживания. 
Заезд и выезд по согласованию. 
Агентствам просьба не беспокоить, субаренды нет. 

При проживании от 25 дней в стоимость проживания включается коммуналка (вода+э/энергия).</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Квартира полностью оборудована всей необходимой техникой и мебелью. Панорамные окна 
                    с видом на море наполняют пространство светом и создают ощущение единения с природой. 
                    Тихий и безопасный район с развитой инфраструктурой.
                  </p>
                  <div className="flex items-center gap-2 pt-4 text-ocean font-semibold">
                    <Icon name="Car" size={20} />
                    <span>Бесплатный трансфер от аэропорта/вокзала для наших гостей!</span>
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
                  <Card
                    key={idx}
                    className="text-center p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer group"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-ocean/10 to-accent/10 rounded-full mb-3 group-hover:from-ocean/20 group-hover:to-accent/20 transition-colors">
                      <Icon name={item.icon as any} size={24} className="text-ocean" />
                    </div>
                    <p className="font-medium">{item.title}</p>
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
                <div className="aspect-video w-full">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.316622%2C44.947621&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjgwNjg0NRJu0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwg0JDQvdCw0L_QsCwg0YHQtdC70L4g0JHQvtC70YzRiNC-0Lkg0KPRgtGA0LjRiCwg0KbQstC10YLQvtGHIgoN-ZonQhVn9UpC&z=16.49"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'relative' }}
                    title="Карта ЖК Анаполис"
                  />
                </div>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <Card className="shadow-xl animate-fade-in bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Бронирование</CardTitle>
                  <CardDescription>Выберите даты вашего визита</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата заезда</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {checkIn ? format(checkIn, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата выезда</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {checkOut ? format(checkOut, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Стоимость от:</p>
                    <p className="text-3xl font-bold text-ocean">4 000 ₽</p>
                    <p className="text-sm text-muted-foreground">за ночь</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-secondary shadow-lg hover:shadow-xl transition-all">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-xl animate-fade-in">
                <CardHeader>
                  <CardTitle>Тарифы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {prices.map((price, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-ocean/5 to-accent/5 rounded-lg">
                      <div>
                        <p className="font-semibold">{price.period}</p>
                        <p className="text-sm text-muted-foreground">{price.description}</p>
                      </div>
                      <p className="text-xl font-bold text-ocean">{price.price} ₽</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-xl animate-fade-in bg-gradient-to-br from-ocean to-accent text-white">
                <CardContent className="p-6 text-center">
                  <Icon name="Car" size={48} className="mx-auto mb-3 animate-float" />
                  <h3 className="font-bold text-xl mb-2">Трансфер в подарок!</h3>
                  <p className="text-blue-50">
                    Бесплатная встреча в аэропорту или на вокзале для всех гостей
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={20} />
                    Контакты
                  </CardTitle>
                  <CardDescription>Евгений, хозяин</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+79141985356">
                      <Icon name="Phone" size={16} className="mr-2" />
                      +7 (914) 198-53-56
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:dr.makagonoff@yandex.ru">
                      <Icon name="Mail" size={16} className="mr-2" />
                      dr.makagonoff@yandex.ru
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://wa.me/79141985356" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-ocean via-ocean-light to-accent text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Квартира на берегу Черного моря</h3>
          <p className="text-blue-100 mb-6">ЖК Анаполис • Заповедный район</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-8">© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;