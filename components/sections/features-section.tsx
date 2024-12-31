"use client";

import { Heart, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Heart,
    title: "Patient Care",
    description: "Comprehensive patient management system for better healthcare delivery",
  },
  {
    icon: Clock,
    title: "Appointment Scheduling",
    description: "Efficient scheduling system to manage patient appointments",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Complete staff management and scheduling solution",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Maintain high standards of healthcare service delivery",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}