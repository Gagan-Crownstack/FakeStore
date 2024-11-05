"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export type ProductType = {
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
};

const Product = () => {
    const params=useParams()
    console.log(useParams())
    const id =params.product;
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data: ProductType = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (isLoading) return <div>Loading product...</div>;

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-1/2 h-auto object-cover rounded-lg" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-500 my-2">{product.category}</p>
          <p className="text-xl font-semibold text-green-600">${product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <div className="mt-4">
            <p className="text-yellow-500 font-medium">
              Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
