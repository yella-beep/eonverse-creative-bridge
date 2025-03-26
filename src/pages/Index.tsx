
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import AnimatedText from "../components/ui/AnimatedText";
import { cn } from "@/lib/utils";
import { Play, Award, Zap } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <div className="inline-block bg-eonverse-100 px-4 py-1.5 rounded-full text-eonverse-900 text-sm font-medium mb-6">
                About EONVERSE
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simplifying Entertainment Industry Collaboration
              </h2>
              
              <p className="text-eonverse-600 mb-6">
                The entertainment industry involves countless moving parts and stakeholders. 
                EONVERSE was built to address the fragmentation that has long plagued the 
                creative process, from script to screen.
              </p>
              
              <p className="text-eonverse-600 mb-8">
                Our platform brings together writers, producers, directors, talent, and crew 
                into one seamless workspace, eliminating silos and enabling true creative 
                collaboration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Play size={18} className="text-eonverse-900" />
                  </div>
                  <span>Accelerate production timelines by up to 40%</span>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={18} className="text-eonverse-900" />
                  </div>
                  <span>Trusted by award-winning production companies</span>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap size={18} className="text-eonverse-900" />
                  </div>
                  <span>Intuitive interface requiring minimal training</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="aspect-square bg-eonverse-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-eonverse-700/10 to-eonverse-900/30 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center text-white">
                      <div className="text-6xl md:text-7xl font-bold mb-2">
                        <AnimatedText text="EONVERSE" />
                      </div>
                      <div className="text-lg md:text-xl tracking-wider">
                        <AnimatedText text="CREATIVE BRIDGE" delay={0.5} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-eonverse-900 rounded-xl"></div>
                <div className="absolute -top-6 -left-6 h-16 w-16 bg-eonverse-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Features />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
