import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      name: "Norton AntiVirus Plus",
      description: "Essential protection for 1 PC or Mac",
      price: "$19.99",
      features: [
        "Real-time threat protection",
        "Password Manager",
        "2GB Cloud Backup",
        "Firewall for PC",
        "100% Virus Protection Promise",
      ],
    },
    {
      name: "Norton 360 Standard",
      description: "Complete protection for 1 device",
      price: "$39.99",
      popular: true,
      features: [
        "All AntiVirus Plus features",
        "Secure VPN",
        "10GB Cloud Backup",
        "Dark Web Monitoring",
        "SafeCam for PC",
      ],
    },
    {
      name: "Norton 360 Deluxe",
      description: "Advanced security for up to 5 devices",
      price: "$49.99",
      popular: true,
      features: [
        "All 360 Standard features",
        "Covers 5 devices",
        "50GB Cloud Backup",
        "Parental Controls",
        "Privacy Monitor",
      ],
    },
    {
      name: "Norton 360 with LifeLock Select",
      description: "Ultimate protection with identity theft coverage",
      price: "$99.99",
      features: [
        "All 360 Deluxe features",
        "LifeLock Identity Alert System",
        "Credit monitoring",
        "Up to $25K stolen funds reimbursement",
        "Up to $25K personal expense compensation",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Choose Your Norton Protection Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading antivirus and security solutions for every need
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
