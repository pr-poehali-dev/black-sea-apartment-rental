import HeroSection from '@/components/HeroSection';
import PropertyInfo from '@/components/PropertyInfo';
import PropertyContent from '@/components/PropertyContent';
import BookingForm from '@/components/BookingForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-purple-50">
      <HeroSection />

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <PropertyInfo />

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <PropertyContent />
          </div>

          <div className="lg:col-span-1">
            <BookingForm />
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-r from-ocean to-ocean-light text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-blue-100">ЖК Резиденция Аннаполис</p>
              <p className="text-blue-100">Большой Утриш, Анапа</p>
              <p className="text-blue-100 mt-2">Телефон: +7 (XXX) XXX-XX-XX</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-blue-100">
                <li>
                  <a href="#description" className="hover:text-white transition-colors cursor-pointer">О квартире</a>
                </li>
                <li>
                  <a href="#rules" className="hover:text-white transition-colors cursor-pointer">Правила проживания</a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors cursor-pointer">Отзывы гостей</a>
                </li>
                <li>
                  <a href="#amenities" className="hover:text-white transition-colors cursor-pointer">Удобства</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <p className="text-blue-100">Следите за новостями и акциями</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100">
            <p>© 2024 Квартира на берегу Черного моря. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;