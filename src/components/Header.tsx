import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const phoneNumber = "+18884419106";
  
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">Secure Hub</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button 
          variant="default" 
          size="lg"
          className="bg-gradient-hero shadow-button hover:opacity-90 transition-opacity gap-2"
          onClick={() => window.location.href = `tel:${phoneNumber}`}
        >
          <Phone className="h-5 w-5" />
          <span className="font-semibold">{phoneNumber}</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
