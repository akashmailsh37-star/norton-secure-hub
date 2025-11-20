import { ShieldCheck, Users, Clock, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Secure Hub</h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for Norton Antivirus solutions and expert technical support
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="bg-card p-6 rounded-lg text-center">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Trusted Service</h3>
            <p className="text-sm text-muted-foreground">
              Years of experience providing Norton solutions to customers worldwide
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Certified technicians ready to assist with installation and troubleshooting
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">24/7 Availability</h3>
            <p className="text-sm text-muted-foreground">
              Round-the-clock support whenever you need help with your Norton products
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated to providing exceptional service and customer satisfaction
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Secure Hub is an independent third-party service provider specializing in Norton Antivirus 
              solutions and technical support. We are not affiliated with Norton or Gen Digital Inc., 
              but we are passionate about helping customers protect their digital lives.
            </p>
            <p>
              Our team of certified technicians brings years of experience in cybersecurity and technical 
              support. We understand that choosing the right antivirus solution can be overwhelming, which 
              is why we're here to guide you through every step—from selecting the perfect Norton package 
              to installation and ongoing support.
            </p>
            <p>
              What sets us apart is our commitment to personalized service. When you call our toll-free 
              number, you'll speak directly with knowledgeable experts who take the time to understand 
              your specific needs. Whether you're protecting a single device or securing your entire 
              family's digital presence, we provide tailored recommendations and hands-on assistance.
            </p>
            <p>
              At Secure Hub, we believe everyone deserves robust protection against cyber threats without 
              the complexity. That's why we offer instant setup assistance, multilingual support, and 
              24/7 availability to ensure you're never left vulnerable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
