import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              Leading healthcare management solutions provider, dedicated to improving patient care through innovative technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-muted-foreground">
                  123 Healthcare Ave, Medical District
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-muted-foreground">contact@healthcare.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-muted-foreground">24/7 Available</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647533374815!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© 2024 Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}