"use client"
import React, { ChangeEvent, useState } from 'react'
import { registerUser } from '../actions/user.actions'

const Page = () => {


  return (


<>
        <div className='flex h-screen justify-center items-center px-5 '>

            <form action={registerUser}  className='bg-gray-100 shadow-lg rounded-sm p-10 
            w-full md:w-1/2
        xl:w-1/3 flex-col gap-4 flex justify-center items-center'>

                <h1 className='text-center text-2xl font-bold'>Register Here</h1>
            
            

            <div>
                
         <label htmlFor="firstname">First Name:</label><br/>
        <input type="text" name='firstname' className='border outline-1
         focus: outline-green-700 p-2 w-full rounded-sm'  />
        </div>

        <div>
                
         <label htmlFor="lastname">Last Name:</label><br/>
        <input type="text" name='lastname' className='border outline-1
         focus: outline-green-700 p-2 w-full rounded-sm'  />
        </div>



            <div>
                
         <label htmlFor="Email">Email:</label><br/>
        <input type="text" name='email' className='border outline-1
         focus: outline-green-700 p-2 w-full rounded-sm' />
        </div>


        <div>
            
        <label htmlFor="Password">Password:</label><br/>
        <input type="password" name='password' className='border outline-1 
        focus: outline-green-700 p-2 w-full rounded-sm' />
        </div>

        <button className='py-2 px-5 bg-black text-white rounded-sm 
        hover:bg-red-800 cursor-pointer hover:-translate-y-1 
        hover:transition'>Register</button>

        </form>
        </div>

            </>
  )
}  

export default Page