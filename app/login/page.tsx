import React from 'react'

const Page = () => {
  return (
    <>
        <div className='flex h-screen justify-center items-center px-5 '>

            <div className='bg-gray-100 shadow-lg rounded-sm p-10 
            w-full md:w-1/2
        xl:w-1/3 flex-col gap-4 flex justify-center items-center'>

                <h1 className='text-center text-2xl font-bold'>Login Here</h1>
            <div>
                
         <label htmlFor="Email">Email:</label><br/>
        <input type="text" className='border outline-1
         focus: outline-green-700 p-2 w-full rounded-sm' autoFocus />
        </div>


        <div>
            
        <label htmlFor="Password">Password:</label><br/>
        <input type="password" className='border outline-1 
        focus: outline-green-700 p-2 w-full rounded-sm' autoFocus/>
        </div>

        <button className='py-2 px-5 bg-black text-white rounded-sm 
        hover:bg-red-800 cursor-pointer hover:-translate-y-1 
        hover:transition'>Login</button>

        </div>
        </div>

            </>
  )
}

export default Page