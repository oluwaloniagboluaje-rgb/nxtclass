"use client"
import React, { use } from 'react'
import { complexProduct } from '../types'
import Image from 'next/image';

const ProductList = ({products}:{products:Promise<complexProduct[]>}) => {

    console.log(products);
    const allProducts = use(products)
    
  return (
    <div className='grid grid-cols-2  gap-4'>{
        allProducts.map((prod, idx)=>(
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

export default ProductList