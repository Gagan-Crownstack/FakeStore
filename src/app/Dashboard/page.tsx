"use client";
import React, { useState, useEffect } from "react";
import { Product } from "@/components/types";
import Card from "@/components/Card";

const Dashboard = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getallData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getallData();
  }, []);
  return (
    <div className="overflow-scroll">
      <div className="text-2xl  mt-5 px-4">All products :</div>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 2xl:grid-cols-4">
        {!isLoading
          ? data.map((item, i) => {
              return (
                <div key={i}>
                  <Card product={item} />
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
};

export default Dashboard;
