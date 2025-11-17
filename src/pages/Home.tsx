import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-furniture.jpg";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Comfort Meets Quality
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Discover handcrafted furniture designed for your home, made right here in Kenya.
            </p>
            <Link to="/products">
              <Button size="lg" className="rounded-full">
                Explore Our Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Furniture</h2>
          <p className="text-muted-foreground text-lg">
            Handpicked pieces to transform your space
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} image={product.images[0]} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/products">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every piece is carefully handcrafted with attention to detail and durability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Locally Made</h3>
              <p className="text-muted-foreground">
                Proudly crafted in Kenya, supporting local artisans and sustainable practices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Personal Service</h3>
              <p className="text-muted-foreground">
                Get in touch with us directly to discuss your furniture needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
