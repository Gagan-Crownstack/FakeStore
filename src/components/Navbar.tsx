'use client'
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navMenu=[
  {
    name:'Home',
    link:'/'
  },
  {
    name:'Cart',
    link:'/cart'
  }
]

export default function Navbar() {

  const [isActive,setisActive]=useState('')

  return (
    <div className="flex h-14 justify-between px-7 items-center border-b-2 sticky top-0 bg-white z-50">
      <Link href={"/"}>
        <div className="text-2xl cursor-pointer font-bold">FakeStore</div>
      </Link>
      <div>
        <ul className="flex gap-2 text-l ">
          {
            navMenu.map((item,i)=>{
              return <Link key={i} href={item.link}><li>{item
              .name}</li></Link>
            })
          }
        </ul>
      </div>
      <div className="px-4 py-2 bg-violet-800 cursor-pointer rounded-md hover:opacity-80 active:opacity-70 text-white">
        Login
      </div>
    </div>
  );
}
