import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  const categories = Array.from(new Set(products.map(p => p.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Furniture Collection</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse our range of quality furniture pieces, each crafted with care for your home.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-6 py-2.5 rounded-full font-medium transition-all ${
            selectedCategory === "All"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product} 
            image={product.images[0]} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
