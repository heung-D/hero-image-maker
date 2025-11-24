import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/videos/bg-spotlight.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Better Logo Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Radial Spotlight Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-radial from-white/20 via-transparent to-transparent rounded-full blur-3xl animate-spotlight-glow"></div>
      </div>

      {/* Logo with Glow Effect */}
      <div className="relative z-10 animate-fade-in">
        <img 
          src={logo} 
          alt="ARADNAS Logo" 
          className="w-[600px] h-auto max-w-[90vw] animate-glow-pulse"
        />
      </div>
    </section>
  );
};

export default HeroSection;
