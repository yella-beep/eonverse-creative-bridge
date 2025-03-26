
import React, { useEffect, useRef } from "react";
import AnimatedText from "./ui/AnimatedText";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = 15 * (0.5 - x);
      const moveY = 15 * (0.5 - y);
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speedX = parseFloat(element.dataset.speedX || "1");
        const speedY = parseFloat(element.dataset.speedY || "1");
        
        element.style.transform = `translate(${moveX * speedX}px, ${moveY * speedY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-eonverse-100 rounded-full blur-[120px] parallax" data-speed-x="0.5" data-speed-y="0.8"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-eonverse-200 rounded-full blur-[150px] parallax" data-speed-x="-0.3" data-speed-y="-0.5"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
        <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <AnimatedText
            text="Bridging Creativity"
            className="block mb-2"
            duration={0.03}
          />
          <span className="relative inline-block">
            <AnimatedText
              text="& Entertainment"
              className="block"
              delay={0.5}
              duration={0.03}
            />
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-eonverse-900 transform scale-x-0 animate-scale-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-eonverse-600 max-w-3xl mx-auto animate-on-scroll">
          EONVERSE seamlessly connects entertainment industry professionals, 
          streamlining collaboration from scriptwriting to production.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 animate-on-scroll">
          <a 
            href="#features" 
            className={cn(
              "px-8 py-3 text-eonverse-50 bg-eonverse-900 rounded-md font-medium",
              "transition-all duration-300 shadow-sm",
              "hover:shadow-lg hover:bg-eonverse-800 transform hover:-translate-y-1"
            )}
          >
            Explore Platform
          </a>
          <a 
            href="#about" 
            className={cn(
              "px-8 py-3 text-eonverse-900 bg-transparent border border-eonverse-300 rounded-md font-medium",
              "transition-all duration-300",
              "hover:bg-eonverse-100 hover:border-eonverse-400"
            )}
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-eonverse-500 mb-2">Scroll to explore</span>
        <ArrowDown size={18} className="text-eonverse-500" />
      </div>
    </section>
  );
};

export default Hero;
