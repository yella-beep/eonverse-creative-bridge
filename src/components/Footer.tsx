
import React from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-eonverse-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold tracking-tight">
                EONVERSE
              </a>
            </div>
            <p className="text-eonverse-300 mb-6 max-w-xs">
              Bridging the gap in entertainment industry collaboration, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-eonverse-700 flex items-center justify-center text-eonverse-300 hover:text-white hover:border-eonverse-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-eonverse-700 flex items-center justify-center text-eonverse-300 hover:text-white hover:border-eonverse-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full border border-eonverse-700 flex items-center justify-center text-eonverse-300 hover:text-white hover:border-eonverse-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Security", "Updates", "Beta Program"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-eonverse-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Careers", "Press", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-eonverse-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "Tutorials", "Case Studies", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-eonverse-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-eonverse-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-eonverse-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EONVERSE. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-6">
            {["Terms", "Privacy", "Cookies", "FAQ"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-eonverse-400 text-sm hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
