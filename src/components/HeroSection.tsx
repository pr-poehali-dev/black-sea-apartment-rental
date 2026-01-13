import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
