
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "EONVERSE has revolutionized how our studio manages production workflows. The time we've saved on coordination alone has paid for itself tenfold.",
    author: "Sarah Johnson",
    title: "Executive Producer, Dreamscape Studios",
    rating: 5,
  },
  {
    quote: "As a screenwriter, I've struggled with the fragmented feedback process for years. EONVERSE brings everyone's input into one elegant interface that actually makes revision enjoyable.",
    author: "Michael Chen",
    title: "Screenwriter & Director",
    rating: 5,
  },
  {
    quote: "The talent sourcing feature helped us find the perfect cast for our independent film in half the time it usually takes. This platform is a game-changer for smaller productions.",
    author: "Aisha Patel",
    title: "Casting Director, Indie Films Collective",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative bg-eonverse-100/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-eonverse-600 max-w-2xl mx-auto">
            Hear from entertainment professionals who have transformed their workflows with EONVERSE.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-eonverse-200">
                    <div className="flex mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "text-yellow-400" : "text-eonverse-300"}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 text-eonverse-900">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-eonverse-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center",
                "border border-eonverse-300 text-eonverse-600",
                "transition-colors duration-300 hover:bg-eonverse-900 hover:text-white hover:border-transparent"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    index === activeIndex 
                      ? "w-8 bg-eonverse-900" 
                      : "w-2.5 bg-eonverse-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center",
                "border border-eonverse-300 text-eonverse-600",
                "transition-colors duration-300 hover:bg-eonverse-900 hover:text-white hover:border-transparent"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
