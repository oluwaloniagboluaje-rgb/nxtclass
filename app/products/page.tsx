import React from 'react'
import { complexProduct } from '../types'

const Products = async () => {
    const data = await fetch('https://dummyjson.com/products? //limit= 50')
    const products = await data.json()

    const convProducts: complexProduct[] = products.products

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {convProducts.map((prod, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl 
            shadow-md hover:shadow-lg transition-shadow duration-200
             border border-gray-100 p-4 gap-3 "
                    >
                        <div className="flex items-center gap-3 ">
                            <div className="">
                                <span className="text-sm font-medium text-indigo-500 
                uppercase ">
                                    {prod.category}
                                </span>
                                <h2 className="text-sm font-semibold text-gray-800 truncate">
                                    {prod.title}
                                </h2>
                            </div>
                            {prod.thumbnail && (
                                <img
                                    src={prod.thumbnail}
                                    alt={prod.title}
                                    className="min-w-0 bg-black"
                                />
                            )}
                        </div>

                        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                            {prod.description}
                        </p>

                        <p className="text-lg font-bold text-gray-500 mt-3 line-clamp-2">MOQ:
                            {prod.minimumOrderQuantity}
                        </p>


                        <p className="text-lg font-bold text-gray-500 mt-3 line-clamp-2">
                            ${prod.price}
                        </p>

                        <div>
                            <button className="bg-black text-white  py-2 px-4 rounded-lg hover:translate-y-1 transition-all">
                                View Details
                            </button>
                        </div>



                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products