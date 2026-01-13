import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PropertyInfo = () => {
  return (
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
  );
};

export default PropertyInfo;
