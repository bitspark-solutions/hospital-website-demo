"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
              alt="Medical Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To revolutionize healthcare management through innovative technology solutions that enhance patient care, streamline operations, and improve healthcare outcomes.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading provider of integrated healthcare management solutions, setting new standards in medical excellence and operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}