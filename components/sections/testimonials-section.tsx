"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    content: "This system has transformed how we manage our hospital operations. The efficiency gains are remarkable.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Cardiology",
    content: "The patient management features have greatly improved our ability to provide quality care.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Emily Williams",
    role: "Hospital Director",
    content: "A game-changer in healthcare management. The support team is exceptional.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}