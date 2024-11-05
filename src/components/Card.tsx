interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 m-4 max-w-xs cursor-pointer bg-white hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain rounded"
      />
      <h2 className="text-lg font-semibold mt-2 h-[56px] line-clamp-2">{product.title}</h2>
      <p className="text-violet-600">{product.category}</p>
      <p className="text-gray-800 mt-1">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 mt-2 line-clamp-3">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-yellow-500">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
