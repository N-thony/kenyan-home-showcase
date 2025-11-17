import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${product.name} (${product.priceRange}). Could you provide more details?`
  );
  const whatsappLink = `https://wa.me/254700000000?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <div key={index} className="aspect-square rounded-3xl overflow-hidden bg-muted">
              <img 
                src={image} 
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mb-6">{product.priceRange}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
          </div>

          <div className="pt-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full rounded-full">
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact to Order via WhatsApp
              </Button>
            </a>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Get in touch with us to place your order or ask questions
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-6 mt-8">
            <h3 className="font-semibold mb-3">Need Help?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our team is ready to assist you with sizing, customization options, and delivery details.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="w-full rounded-full">
                View Contact Options
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
