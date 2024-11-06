"use client";
import React, { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { Product } from "@/components/types";
const Productpage = () => {
  const params = useParams();
  console.log(useParams());
  const id = params.product;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data: Product = await res.json();
          setProduct(data);
        } catch (error) {
          // console.error("Error fetching product:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (isLoading) return <div>Loading product...</div>;

  if (!product) {
    notFound();
  }

  return (
    <div className="h-full w-11/12 mx-auto mt-10 md:mt-20 p-4">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-1 justify-center sm:justify-start">
          <img
            src={product.image}
            alt={product.title}
            className="w-1/2 min-w-[300px] h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-500 my-2">{product.category}</p>
          <p className="text-xl font-semibold text-green-600">
            ${product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <div className="mt-4">
            <p className="text-yellow-500 font-medium">
              Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={() => {}}
              className="text-white bg-violet-700 text-xl font-semibold px-4 py-2 rounded-md hover:opacity-85 outline-offset-2 active:outline active:outline-violet-500 active:opacity-70"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
