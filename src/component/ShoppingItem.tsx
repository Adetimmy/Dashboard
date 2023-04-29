import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { cartData } from '../data/dummy'


const ShoppingItem = () => {
  return (
    <div className="my-8">
        {cartData.map((item, i) => (
        <div key={i} className="py-4 px-2 border-b-1 border-color flex gap-8 items-center">
            <img src={item.image} alt="senderImg" className="w-24 h-20 rounded-lg"/>

            <div>
                <h5 className="dark:text-white font-semibold">{item.name}</h5>
                <p className="text-slate-400 text-sm">{item.category}</p>
               <div className='flex gap-8 mt-2 items-center'>
                    <h4 className="dark:text-white font-semibold">{item.price}</h4>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 cursor-pointer"><AiOutlinePlus /></p>
                    </div>
               </div>
            </div>
        </div>
        ))}

        <div className='mt-10 px-5'>
          <div className='flex justify-between mb-2'>
            <p>Sub Total</p>
            <p>$75</p>
          </div>
          <div className='flex justify-between'>
            <p>Total</p>
            <p>$75</p>
          </div>
        </div>
    </div>
  )
}

export default ShoppingItem