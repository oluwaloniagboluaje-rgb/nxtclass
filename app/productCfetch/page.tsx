import React, { Suspense } from 'react'
import SkeletonLoader from '../components/SkeletonLoader'
import Products from '../products/page'
import ProductList from '../components/ProductList';
import { complexProduct } from '../types';

   export const getProducts = async()=>{
    const data = await fetch('https://dummyjson.com/products')
    const products = await data.json()

    const convProducts: complexProduct[] = products.products

    return convProducts
   }

    const Page = () => {

        const products =  getProducts()
  return (
    <div>
        <h1>This is the product duplicate page</h1>


       <Suspense fallback={<SkeletonLoader/>}>
       <ProductList products={products}/>
       </Suspense>
    </div>
  ) 

    }

    
  


export default Page