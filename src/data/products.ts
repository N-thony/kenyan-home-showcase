import diningTableImg from "@/assets/dining-table.jpg";
import sofaImg from "@/assets/sofa.jpg";
import bedImg from "@/assets/bed.jpg";
import bookshelfImg from "@/assets/bookshelf.jpg";
import deskImg from "@/assets/desk.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import armchairImg from "@/assets/armchair.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  priceRange: string;
  images: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "dining-table",
    name: "Modern Dining Table",
    description: "Spacious 6-seater dining table in natural oak",
    longDescription: "This beautiful dining table combines functionality with elegant design. Crafted from solid oak wood, it comfortably seats 6 people and features a smooth, durable finish. Perfect for family meals and entertaining guests.",
    priceRange: "KSh 45,000 - 65,000",
    images: [diningTableImg],
    category: "Dining"
  },
  {
    id: "sectional-sofa",
    name: "Sectional Sofa",
    description: "Comfortable L-shaped sofa in warm beige",
    longDescription: "Experience ultimate comfort with our modern sectional sofa. Upholstered in premium beige fabric with plush cushions, this L-shaped design is perfect for relaxing and hosting. The contemporary style fits beautifully in any living room.",
    priceRange: "KSh 85,000 - 120,000",
    images: [sofaImg],
    category: "Living Room"
  },
  {
    id: "platform-bed",
    name: "Platform Bed",
    description: "Minimalist wooden bed with headboard",
    longDescription: "Sleep in style with our elegant platform bed. Features a sturdy wooden frame with a beautiful headboard, designed for both comfort and aesthetics. The natural wood finish adds warmth to any bedroom.",
    priceRange: "KSh 55,000 - 75,000",
    images: [bedImg],
    category: "Bedroom"
  },
  {
    id: "bookshelf",
    name: "5-Tier Bookshelf",
    description: "Elegant storage solution in natural oak",
    longDescription: "Keep your books and decorative items organized with this spacious 5-tier bookshelf. Made from quality oak wood, it offers ample storage while maintaining a clean, minimalist aesthetic.",
    priceRange: "KSh 25,000 - 35,000",
    images: [bookshelfImg],
    category: "Storage"
  },
  {
    id: "office-desk",
    name: "Office Desk",
    description: "Contemporary desk with storage drawers",
    longDescription: "Boost your productivity with our modern office desk. Features a spacious wooden top with built-in drawers for organization. The sleek metal legs add an industrial touch while ensuring stability.",
    priceRange: "KSh 35,000 - 50,000",
    images: [deskImg],
    category: "Office"
  },
  {
    id: "wardrobe",
    name: "Sliding Door Wardrobe",
    description: "Spacious wardrobe with modern sliding doors",
    longDescription: "Maximize your bedroom storage with our sliding door wardrobe. Features ample hanging space and shelves, all hidden behind smooth-gliding doors. The wooden finish complements any décor style.",
    priceRange: "KSh 60,000 - 90,000",
    images: [wardrobeImg],
    category: "Bedroom"
  },
  {
    id: "armchair",
    name: "Sage Armchair",
    description: "Cozy armchair in beautiful sage green",
    longDescription: "Add a pop of color and comfort to your space with our sage green armchair. Featuring a comfortable cushion and sturdy wooden legs, this Scandinavian-inspired piece is perfect for reading corners or as accent seating.",
    priceRange: "KSh 28,000 - 38,000",
    images: [armchairImg],
    category: "Living Room"
  }
];
