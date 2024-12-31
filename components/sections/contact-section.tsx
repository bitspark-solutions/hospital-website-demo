"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border border-border bg-background"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-border bg-background"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-border bg-background"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-3 rounded-lg border border-border bg-background"
            ></textarea>
            <Button size="lg" className="w-full">
              Send Message <Phone className="ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}