"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const CategoryNavbar = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
        console.log(data);
      } catch (e) {
        console.error("Error:", e);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="h-12 justify-center items-center gap-4 border-b-2 text-white font-medium hidden sm:flex">
      <div className="w-max h-full items-center px-10 bg-violet-800 rounded-b-full flex">
        {categories && categories.length > 0
          ? categories.map((item, i) => {
              return (
                <Link href={`/${item}`} key={i}>
                  <span className="cursor-pointer p-2 hover:bg-violet-600">
                    {item}
                  </span>
                </Link>
              );
            })
          : "............."}
      </div>
    </div>
  );
};

export default CategoryNavbar;
