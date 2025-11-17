import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Supreme <span className="text-accent">Furniture</span>
            </h3>
            <p className="text-muted-foreground">
              Quality furniture crafted with care for your home in Kenya.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@supremefurniture.ke</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          © 2024 Supreme Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
