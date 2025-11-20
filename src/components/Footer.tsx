import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+18884419106";
  
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Secure Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for Norton Antivirus solutions and technical support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-foreground transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${phoneNumber}`} className="hover:text-foreground transition-colors">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@securehub.com" className="hover:text-foreground transition-colors">
                  support@securehub.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>24/7 Phone Support</li>
              <li>Instant Setup Assistance</li>
              <li>Expert Technical Help</li>
              <li>Multi-Language Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Secure Hub. All rights reserved.</p>
          <p className="mt-2">
            Independent third-party service provider. Not affiliated with Norton or Gen Digital Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
