import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <Alert className="max-w-4xl mx-auto border-muted-foreground/20">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle className="text-lg font-semibold">Important Disclaimer</AlertTitle>
          <AlertDescription className="mt-2 text-sm leading-relaxed">
            Secure Hub is an independent third-party service provider offering technical support and assistance 
            for Norton Antivirus products. We are not directly affiliated with, endorsed by, or officially 
            connected to Norton, NortonLifeLock, or Gen Digital Inc. Norton, Norton 360, and LifeLock are 
            registered trademarks of their respective owners. All product names, logos, and brands mentioned 
            on this website are the property of their respective owners. We provide independent technical 
            support services and are not authorized representatives of Norton or its parent company.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Disclaimer;
