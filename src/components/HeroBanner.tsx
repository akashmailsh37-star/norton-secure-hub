import { Phone, Shield } from "lucide-react";
import { Button } from "./ui/button";

const HeroBanner = () => {
  const phoneNumber = "+18884419106";
  
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">Authorized Norton Partner</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Protect Your Digital Life with Norton Antivirus
          </h1>
          
          <p className="mb-8 text-xl text-white/90 md:text-2xl">
            Industry-leading security solutions for your devices. Get expert help today.
          </p>

          <div className="mb-6 flex flex-col items-center gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-4 backdrop-blur">
              <p className="mb-2 text-sm font-medium text-white/80">Call Our Toll-Free Number</p>
              <div className="flex items-center gap-2 text-3xl font-bold text-white md:text-4xl">
                <Phone className="h-8 w-8 animate-pulse-glow" />
                <a href={`tel:${phoneNumber}`} className="hover:underline">
                  {phoneNumber}
                </a>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-button text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Now for Instant Support
            </Button>
          </div>

          <p className="text-sm text-white/70">
            Available 24/7 • Expert Technical Support • Fast Setup Assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
