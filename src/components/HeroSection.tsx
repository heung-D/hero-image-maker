import { Button } from "@/components/ui/button";
import logoMountain from "@/assets/logo-mountain.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="animate-fade-in">
            <img 
              src={logoMountain} 
              alt="ARADNAS Logo" 
              className="w-64 h-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in-delay">
            높은 곳을 향한 여정
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            ARADNAS와 함께 당신의 꿈을 현실로 만들어가세요
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-gradient-sunset text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              시작하기
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-xl"
            >
              더 알아보기
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
