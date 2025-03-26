
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-eonverse-600 mb-8 max-w-lg">
              Join thousands of entertainment professionals who have streamlined 
              their process with EONVERSE. Get in touch with our team to schedule 
              a personalized demo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={20} className="text-eonverse-900" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Full-Featured Trial</h3>
                  <p className="text-eonverse-600">Get access to all features for 14 days with no credit card required.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={20} className="text-eonverse-900" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Personalized Onboarding</h3>
                  <p className="text-eonverse-600">Our team will help you set up and customize EONVERSE for your specific needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-eonverse-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={20} className="text-eonverse-900" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Priority Support</h3>
                  <p className="text-eonverse-600">Get dedicated assistance from our entertainment industry specialists.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 animate-on-scroll">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="h-16 w-16 bg-eonverse-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-eonverse-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Received!</h3>
                <p className="text-eonverse-600 mb-6">
                  Thank you for your interest in EONVERSE. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-eonverse-900 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-eonverse-700 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-md border border-eonverse-300 bg-white/70",
                        "focus:outline-none focus:ring-2 focus:ring-eonverse-900 focus:border-transparent",
                        "transition-colors duration-200"
                      )}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-eonverse-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-md border border-eonverse-300 bg-white/70",
                        "focus:outline-none focus:ring-2 focus:ring-eonverse-900 focus:border-transparent",
                        "transition-colors duration-200"
                      )}
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-eonverse-700 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border border-eonverse-300 bg-white/70",
                      "focus:outline-none focus:ring-2 focus:ring-eonverse-900 focus:border-transparent",
                      "transition-colors duration-200"
                    )}
                    placeholder="Your company (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-eonverse-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-3 rounded-md border border-eonverse-300 bg-white/70",
                      "focus:outline-none focus:ring-2 focus:ring-eonverse-900 focus:border-transparent",
                      "transition-colors duration-200 resize-none"
                    )}
                    placeholder="Tell us about your needs"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "w-full flex items-center justify-center px-8 py-3.5 rounded-md font-medium",
                    "transition-all duration-300 relative overflow-hidden group",
                    "bg-eonverse-900 text-white hover:bg-eonverse-800",
                    loading && "opacity-90 cursor-not-allowed"
                  )}
                >
                  {loading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
