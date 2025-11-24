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
