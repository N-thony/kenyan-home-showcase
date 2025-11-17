const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Supreme Furniture</h1>
        
        <div className="space-y-8">
          <div className="bg-card rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Supreme Furniture began with a simple mission: to create beautiful, quality furniture that Kenyan families can be proud to have in their homes. What started as a small workshop has grown into a trusted name for handcrafted furniture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece we create combines traditional craftsmanship with modern design. We believe that furniture should be both functional and beautiful, built to last for years while enhancing your living spaces.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">What We Make</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We specialize in creating custom and ready-made furniture for every room in your home:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Living room furniture including sofas, coffee tables, and entertainment units</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Bedroom sets with beds, wardrobes, and dressers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Dining tables and chairs for family gatherings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Office furniture designed for productivity and comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Storage solutions including shelves and cabinets</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Quality Materials</h3>
                <p className="text-muted-foreground text-sm">
                  We source the finest wood and materials to ensure durability and beauty in every piece.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Expert Craftsmanship</h3>
                <p className="text-muted-foreground text-sm">
                  Our skilled artisans bring years of experience to create furniture with precision and care.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Local Production</h3>
                <p className="text-muted-foreground text-sm">
                  All our furniture is made in Kenya, supporting local jobs and sustainable practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Customer Service</h3>
                <p className="text-muted-foreground text-sm">
                  We work closely with each customer to ensure their furniture meets their exact needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
