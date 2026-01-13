import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
  const { toast } = useToast();

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

  const handleSubmit = async () => {
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

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/e91c3e42-03dc-4c55-a046-3bd7b60732bc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          checkIn: format(checkIn, 'dd MMMM yyyy', { locale: ru }),
          checkOut: format(checkOut, 'dd MMMM yyyy', { locale: ru }),
          guests,
          days: calculation?.days || 0,
          total: calculation?.total || 0,
          message
        })
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время'
        });
        setName('');
        setPhone('');
        setGuests('2');
        setMessage('');
        setCheckIn(undefined);
        setCheckOut(undefined);
      } else {
        toast({
          title: 'Ошибка',
          description: data.error || 'Попробуйте позже',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="pt-4 border-t space-y-4">
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
          </div>
          <Button 
            className="w-full bg-gradient-to-r from-ocean to-ocean-light hover:from-ocean-light hover:to-secondary shadow-lg hover:shadow-xl transition-all"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            <Icon name="Send" size={16} className="mr-2" />
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
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

      <Card className="shadow-xl animate-fade-in bg-gradient-to-br from-ocean/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Phone" size={20} />
            Нужна помощь?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Свяжитесь с нами для консультации</p>
          <Button variant="outline" className="w-full">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
