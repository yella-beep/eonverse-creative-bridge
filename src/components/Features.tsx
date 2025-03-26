
import React from "react";
import { Check, Film, Users, FileText, PenTool, Calendar, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Script Management",
    description: "Collaborative editing, version control, and real-time feedback for scriptwriters.",
    icon: FileText,
  },
  {
    title: "Talent Sourcing",
    description: "Connect with actors, directors, and crew members through our intelligent matching system.",
    icon: Users,
  },
  {
    title: "Production Planning",
    description: "Streamline scheduling, budgeting, and resource allocation in one unified platform.",
    icon: Calendar,
  },
  {
    title: "Asset Management",
    description: "Organize media assets, locations, costumes, and props with advanced tagging.",
    icon: Film,
  },
  {
    title: "Creative Collaboration",
    description: "Share concepts, storyboards, and visual references with your creative team.",
    icon: PenTool,
  },
  {
    title: "Unified Communication",
    description: "Keep all project-related discussions in one place with integrated messaging.",
    icon: MessageSquare,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features</h2>
          <p className="text-eonverse-600 max-w-2xl mx-auto">
            EONVERSE offers a complete suite of tools designed specifically for 
            entertainment industry professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={cn(
                "p-6 rounded-xl animate-on-scroll",
                "transition-all duration-300 group hover-lift",
                "border border-eonverse-200 bg-white/50",
                "hover:bg-white hover:shadow-xl"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-eonverse-100 flex items-center justify-center mb-6 text-eonverse-900 transition-transform duration-500 group-hover:scale-110">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-eonverse-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-eonverse-900 font-medium">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more</span>
                <span className="h-0 w-0 group-hover:h-px group-hover:w-4 bg-eonverse-900 transition-all duration-300"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-10 rounded-xl bg-gradient-to-r from-eonverse-100 to-eonverse-200 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h3 className="text-2xl font-bold mb-3">Ready to transform your workflow?</h3>
              <p className="text-eonverse-700 max-w-xl">
                Join thousands of entertainment professionals who have streamlined their process with EONVERSE.
              </p>
            </div>
            <a
              href="#contact"
              className={cn(
                "px-8 py-3 text-eonverse-50 bg-eonverse-900 rounded-md font-medium whitespace-nowrap",
                "transition-all duration-300 shadow-sm",
                "hover:shadow-lg hover:bg-eonverse-800 transform hover:-translate-y-1"
              )}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
