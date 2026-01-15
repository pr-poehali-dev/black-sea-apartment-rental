import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { format, differenceInDays } from 'date-fns';
import { ru } from 'date-fns/locale';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const bookedDates = [
    new Date(2026, 0, 20),
    new Date(2026, 0, 21),
    new Date(2026, 0, 22),
    new Date(2026, 0, 25),
    new Date(2026, 0, 26),
    new Date(2026, 1, 1),
    new Date(2026, 1, 2),
    new Date(2026, 1, 3),
  ];

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        date.getDate() === bookedDate.getDate() &&
        date.getMonth() === bookedDate.getMonth() &&
        date.getFullYear() === bookedDate.getFullYear()
    );
  };

  const getPriceForDate = (date: Date): number => {
    const month = date.getMonth() + 1;
    if (month >= 7 && month <= 8) return 5500;
    if (month >= 9 && month <= 10) return 4500;
    if (month >= 3 && month <= 6) return 4500;
    return 3500;
  };

  const calculateTotal = (): { days: number; total: number } | null => {
    if (!checkIn || !checkOut) return null;
    const days = differenceInDays(checkOut, checkIn);
    if (days <= 0) return null;
    
    let total = 0;
    for (let i = 0; i < days; i++) {
      const currentDate = new Date(checkIn);
      currentDate.setDate(currentDate.getDate() + i);
      total += getPriceForDate(currentDate);
    }
    return { days, total };
  };

  const calculation = calculateTotal();

  const handlePayment = async () => {
    if (!name || !phone) {
      toast({
        title: 'Ошибка',
        description: 'Заполните имя и телефон',
        variant: 'destructive'
      });
      return;
    }

    if (!checkIn || !checkOut) {
      toast({
        title: 'Ошибка',
        description: 'Выберите даты заезда и выезда',
        variant: 'destructive'
      });
      return;
    }

    if (!calculation) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось рассчитать стоимость',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    // Данные вашей карты (замените на реальные)
    const cardNumber = '2200700955746733';
    
    toast({
      title: 'Переход к оплате',
      description: `Сумма: ${calculation.total} ₽. Карта: ${cardNumber.slice(-4)}`,
    });

    // Здесь будет интеграция с платежной системой
    setTimeout(() => {
      toast({
        title: 'Оплата успешна!',
        description: `Бронирование подтверждено на ${calculation.days} ${calculation.days === 1 ? 'ночь' : 'ночей'}`,
      });
      setIsSubmitting(false);
      setName('');
      setPhone('');
      setGuests('2');
      setMessage('');
      setCheckIn(undefined);
      setCheckOut(undefined);
    }, 2000);
  };

  const prices = [
    { period: 'Март - Июнь', price: '4 500', description: 'Весенний сезон' },
    { period: 'Июль - Август', price: '5 500', description: 'Высокий сезон' },
    { period: 'Сентябрь - Октябрь', price: '4 500', description: 'Бархатный сезон' },
    { period: 'Ноябрь - Февраль', price: '3 500', description: 'Зимний сезон' }
  ];

  return (
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
                <Calendar 
                  mode="single" 
                  selected={checkIn} 
                  onSelect={setCheckIn}
                  modifiers={{ booked: bookedDates }}
                  modifiersClassNames={{
                    booked: 'text-red-600 font-bold line-through'
                  }}
                  disabled={isDateBooked}
                />
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
                <Calendar 
                  mode="single" 
                  selected={checkOut} 
                  onSelect={setCheckOut}
                  modifiers={{ booked: bookedDates }}
                  modifiersClassNames={{
                    booked: 'text-red-600 font-bold line-through'
                  }}
                  disabled={isDateBooked}
                />
              </PopoverContent>
            </Popover>
          </div>
          {calculation && (
            <div className="pt-4 border-t space-y-3 bg-gradient-to-br from-ocean/5 to-accent/5 p-4 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Количество ночей:</span>
                <span className="font-semibold">{calculation.days}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-muted-foreground">Итого:</span>
                <div className="text-right">
                  <p className="text-3xl font-bold text-ocean">{calculation.total.toLocaleString('ru-RU')} ₽</p>
                  <p className="text-xs text-muted-foreground">≈ {Math.round(calculation.total / calculation.days)} ₽/ночь</p>
                </div>
              </div>
            </div>
          )}
          {!calculation && (
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">Стоимость от:</p>
              <p className="text-3xl font-bold text-ocean">3 500 ₽</p>
              <p className="text-sm text-muted-foreground">за ночь</p>
            </div>
          )}
          <Collapsible open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full justify-between mt-4"
              >
                <span className="font-semibold">Форма бронирования</span>
                <Icon name={isBookingOpen ? "ChevronUp" : "ChevronDown"} size={20} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input 
                  placeholder="+7 (999) 123-45-67" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Количество гостей</label>
                <Input 
                  type="number" 
                  min="1" 
                  max="4" 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение (необязательно)</label>
                <Textarea 
                  placeholder="Ваши пожелания или вопросы..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="CreditCard" size={16} className="text-green-600" />
                    <span className="text-sm font-semibold text-green-800">Привязанная карта</span>
                  </div>
                  <p className="text-sm text-green-700">Сбербанк •••• 6733</p>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
                  onClick={handlePayment}
                  disabled={isSubmitting || !calculation}
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  {isSubmitting ? 'Обработка...' : `Оплатить ${calculation ? calculation.total.toLocaleString('ru-RU') : ''} ₽`}
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
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

      <Card className="shadow-xl animate-fade-in bg-gradient-to-br from-ocean/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Phone" size={20} />
            Нужна помощь?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Свяжитесь с нами для консультации</p>
          <Button 
            variant="outline" 
            className="w-full bg-blue-50 hover:bg-blue-100 border-blue-200"
            asChild
          >
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={16} className="mr-2" />
              Написать в Max
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;