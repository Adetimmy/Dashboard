import React from 'react'
import { year } from './date'

const Footer = () => {
  return (
    <div className='flex justify-center items-center mt-24'>
       <p className='text-base font-normal my-10 dark:text-gray-200 text-gray-700'><span>&copy;</span>{year}{' '}All rights reserved by Adetimmy</p> 
    </div>
  )
}

export default Footer