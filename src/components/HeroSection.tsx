import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background - Dawn to Sunrise */}
      <div className="absolute inset-0 animate-sunrise"></div>

      {/* Logo */}
      <div className="relative z-10 animate-fade-in">
        <img 
          src={logo} 
          alt="ARADNAS Logo" 
          className="w-[600px] h-auto max-w-[90vw] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
