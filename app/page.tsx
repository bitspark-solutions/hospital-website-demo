"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
          alt="Modern Hospital Building"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Advanced Healthcare Management Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Empowering healthcare providers with cutting-edge technology for better patient care
          </motion.p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Our Services <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}