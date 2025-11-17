import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  image: string;
}

const ProductCard = ({ id, name, description, priceRange, image }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-semibold text-xl mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground mb-3 text-sm line-clamp-2">{description}</p>
          <p className="text-primary font-medium">{priceRange}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
