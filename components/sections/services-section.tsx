"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Electronic Health Records",
    description: "Secure and efficient electronic health record management system",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
  },
  {
    title: "Telemedicine",
    description: "Advanced telemedicine platform for remote consultations",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
  },
  {
    title: "Laboratory Management",
    description: "Comprehensive lab management and reporting system",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80",
  },
  {
    title: "Pharmacy Management",
    description: "Integrated pharmacy management and inventory control",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4 p-6 bg-card rounded-lg shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}