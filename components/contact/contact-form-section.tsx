"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { countryCodes } from "@/lib/country-codes";

const services = [
  "Website Development",
  "Landing Page Development",
  "Web Application Development",
  "Mobile App Development",
  "UI/UX Design",
  "AI & Automation",
  "Embedded Systems Development",
  "IoT Systems",
  "Smart Energy & Solar Solutions",
  "EV Solutions",
  "AI + Electronics Systems",
  "Technical Consulting",
  "Other",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const dataToSubmit = {
        ...formData,
        phone: `${formData.countryCode} ${formData.phone}`,
      };
      
      // When built for mobile, this will use the live website's API
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api/contact";
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again later.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F9F9FB] dark:bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & Why Us */}
          <div className="lg:col-span-5 flex flex-col space-y-12 md:space-y-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 md:mb-8">
                Get in touch
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4 md:space-x-5">
                  <Mail className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-1">Email</p>
                    <a href="mailto:queryholic@gmail.com" className="text-sm md:text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                      queryholic@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-5">
                  <MapPin className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-1">Location</p>
                    <p className="text-sm md:text-base text-neutral-500">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-5">
                  <Clock className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-1">Availability</p>
                    <p className="text-sm md:text-base text-neutral-500">Monday – Saturday<br/>9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Work With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white mb-5 md:mb-6">
                Why Queryholic
              </h3>
              <div className="space-y-5 md:space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">End-to-End Development</h4>
                  <p className="text-sm text-neutral-500 mt-1">From planning and design to deployment and support.</p>
                </div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800/50" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">Software & Engineering Expertise</h4>
                  <p className="text-sm text-neutral-500 mt-1">Combining software, electronics, AI, and IoT under one company.</p>
                </div>
                <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800/50" />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">Future-Ready Solutions</h4>
                  <p className="text-sm text-neutral-500 mt-1">Built with modern technologies designed for long-term scalability.</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#0A0A0A] border border-neutral-200/60 dark:border-neutral-800/60 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-2xl shadow-neutral-200/40 dark:shadow-none relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-50 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
                    </div>
                    <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-3">
                      Thank you for contacting Queryholic.
                    </h3>
                    <p className="text-neutral-500 max-w-md mx-auto">
                      We have received your inquiry and our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white mb-2">
                      Start Your Project
                    </h3>
                    <p className="text-neutral-500 mb-10 text-sm md:text-base">
                      Tell us about your project, goals, and requirements.
                    </p>

                    {error && (
                      <div className="mb-8 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            <div 
                              className="relative w-[110px] sm:w-[130px] shrink-0"
                              tabIndex={0}
                              onBlur={(e) => {
                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                  setIsCountryDropdownOpen(false);
                                }
                              }}
                            >
                              <div 
                                className={`w-full px-3 sm:px-4 py-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${isCountryDropdownOpen ? 'border-neutral-900 dark:border-neutral-400 ring-1 ring-neutral-900 dark:ring-neutral-400 bg-white dark:bg-[#111]' : 'border-neutral-200 dark:border-neutral-800 bg-transparent'} text-neutral-900 dark:text-white`}
                                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              >
                                <span className="text-neutral-900 dark:text-white truncate font-medium text-sm">
                                  {countryCodes.find(c => c.code === formData.countryCode)?.label || formData.countryCode}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 shrink-0 ml-1 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                              </div>
                              
                              <AnimatePresence>
                                {isCountryDropdownOpen && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-50 top-full left-0 w-[240px] sm:w-[280px] mt-2 p-2 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl max-h-60 overflow-y-auto custom-scrollbar"
                                  >
                                    {countryCodes
                                      .sort((a, b) => a.label.localeCompare(b.label))
                                      .sort((a, b) => (a.code === "+91" ? -1 : b.code === "+91" ? 1 : 0))
                                      .map((country) => (
                                      <div 
                                        key={`${country.label}-${country.code}`}
                                        onClick={() => {
                                          setFormData((prev) => ({ ...prev, countryCode: country.code }));
                                          setIsCountryDropdownOpen(false);
                                        }}
                                        className={`px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${formData.countryCode === country.code ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                                      >
                                        {country.label}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full flex-1 px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                              placeholder="98765 43210"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Company Name <span className="text-neutral-400/50">(Optional)</span>
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Service Required
                          </label>
                          <div 
                            className="relative w-full"
                            tabIndex={0}
                            onBlur={(e) => {
                              if (!e.currentTarget.contains(e.relatedTarget)) {
                                setIsServiceDropdownOpen(false);
                              }
                            }}
                          >
                            <div 
                              className={`w-full px-4 py-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${isServiceDropdownOpen ? 'border-neutral-900 dark:border-neutral-400 ring-1 ring-neutral-900 dark:ring-neutral-400 bg-white dark:bg-[#111]' : 'border-neutral-200 dark:border-neutral-800 bg-transparent'} text-neutral-900 dark:text-white`}
                              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                            >
                              <span className={formData.service ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-600"}>
                                {formData.service || "Select a service"}
                              </span>
                              <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            
                            <AnimatePresence>
                              {isServiceDropdownOpen && (
                                <motion.div 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-50 top-full left-0 right-0 mt-2 p-2 bg-white dark:bg-[#0F0F0F] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl max-h-60 overflow-y-auto custom-scrollbar"
                                >
                                  {services.map((service) => (
                                    <div 
                                      key={service}
                                      onClick={() => {
                                        setFormData((prev) => ({ ...prev, service }));
                                        setIsServiceDropdownOpen(false);
                                      }}
                                      className={`px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${formData.service === service ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                                    >
                                      {service}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="budget" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                            Estimated Budget
                          </label>
                          <input
                            id="budget"
                            name="budget"
                            type="text"
                            required
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="details" className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                          Project Details
                        </label>
                        <textarea
                          id="details"
                          name="details"
                          required
                          rows={4}
                          value={formData.details}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-neutral-900 dark:focus:border-neutral-400 outline-none transition-all resize-none placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                          placeholder="Tell us about your goals, timeline, and requirements..."
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                          {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
