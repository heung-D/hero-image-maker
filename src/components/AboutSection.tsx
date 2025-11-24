import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 bg-gradient-to-b from-black via-background to-background"
    >
      <div className="container mx-auto max-w-6xl">
        {/* About Content */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ARADNAS
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            우리는 혁신과 도전을 통해 불가능을 가능으로 만듭니다.
            <br />
            높은 곳을 향한 여정, ARADNAS와 함께 시작하세요.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="mb-6 text-5xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: "⭐",
    title: "혁신적 솔루션",
    description:
      "최첨단 기술과 창의적 사고를 결합하여 업계를 선도하는 혁신적인 솔루션을 제공합니다.",
  },
  {
    icon: "🚀",
    title: "빠른 성장",
    description:
      "검증된 전략과 체계적인 프로세스를 통해 비즈니스의 급속한 성장을 지원합니다.",
  },
  {
    icon: "💎",
    title: "최고의 품질",
    description:
      "타협 없는 품질 관리와 지속적인 개선으로 최상의 결과물을 보장합니다.",
  },
];

export default AboutSection;
