import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Furniture Collection</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse our range of quality furniture pieces, each crafted with care for your home.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">{category}</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
              .filter(p => p.category === category)
              .map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  image={product.images[0]} 
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
