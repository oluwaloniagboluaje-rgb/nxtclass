"use client"
import React from 'react'
import useSWR from 'swr'
import SkeletonLoader from '../components/SkeletonLoader'
import { complexProduct } from '../types'

const fetcher = (url:string)=>fetch(url).then((r)=>r.json())

const Page = () => {
    const{data, error, isLoading }= useSWR(
            "https://dummyjson.com/products",
            
            fetcher
    )

    if(isLoading) return <SkeletonLoader/>
    if(error) return <div className='text-red-600'>Error Loading products</div>

    console.log(data.products);

    const result: complexProduct[]= data.products
    
    
  return (
    <div className='grid grid-cols-2  gap-4'>{
            result.map((prod, idx)=>(
                            <div key={idx} className='border border-gray-300 rounded-2xl p-3 flex gap-3 /basis-1/2 hover:shadow'>
                              <img src={prod.images[0]} alt='product image' width={300} height={300} className='size-50 bg-black rounded-2xl'/>
            
            
            
                              <div className='flex flex-col justify-between'>
                                <p className='text-lg font-bold'>{prod.title}</p>
                                <p className='line-clamp-2 text-sm'>{prod.description}</p>
                                <p>MOQ: {prod.minimumOrderQuantity}</p>
                                <code>${prod.price}</code>
            
            
                                <div>
                                  <button className='px-4 py-2 bg-black text-white rounded-lg hover:-translate-y-1 transition-all'>View details</button>
                                </div>
                              </div>
            
                            </div>
            
            
                        ))}</div>
      )
    }

export default Page