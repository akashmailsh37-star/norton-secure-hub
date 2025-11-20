import { Check, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const ProductCard = ({ name, description, price, features, popular }: ProductCardProps) => {
  const phoneNumber = "+18884419106";
  
  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-card hover:-translate-y-1 ${popular ? 'border-primary border-2' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold">
          MOST POPULAR
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <p className="text-4xl font-bold text-primary">{price}</p>
          <p className="text-sm text-muted-foreground">per year</p>
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-hero shadow-button hover:opacity-90 transition-opacity gap-2"
          size="lg"
          onClick={() => window.location.href = `tel:${phoneNumber}`}
        >
          <Phone className="h-5 w-5" />
          Call to Order
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
