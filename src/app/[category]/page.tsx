'use client'
import React,{useState,useEffect} from 'react'
import { useParams } from 'next/navigation'
import { Product } from '@/components/types'
import Card from '@/components/Card'

const categorypage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading,setIsLoading]=useState(false)
    const params= useParams()
    const query =params.category

    useEffect(()=>{
      const getcategoryData=async()=>{
        try{
          setIsLoading(true)
          const res= await fetch(`https://fakestoreapi.com/products/category/${query}`)
          const data= await res.json();
          setData(data)
          setIsLoading(false)
        }catch(e){
          console.log("Error",e);
        }
      }
      getcategoryData()
    },[query])
  return (
    <div className='w-11/12 mx-auto'>
      <div className='text-2xl mt-5 px-4 uppercase'> {query 
    ? (typeof query === 'string' 
        ? decodeURIComponent(query).replaceAll('%', ' ') 
        : decodeURIComponent(query.join(' ')).replaceAll('%', ' '))
    : ''}</div>

<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 2xl:grid-cols-4">
        {!isLoading
          ? data.map((item, i) => {
              return (
                <div key={i}>
                  <Card product={item} />
                </div>
              );
            })
          : <div className='px-4'>Loading...</div>}
      </div>

    </div>
  )
}

export default categorypage