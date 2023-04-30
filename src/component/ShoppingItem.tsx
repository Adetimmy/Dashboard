import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { cartData } from '../data/dummy'
import { useState, useEffect } from 'react'
import ChartItem from './ChartItem'
import product5 from '../data/product5.jpg';
import product6 from '../data/product6.jpg';
import product7 from '../data/product7.jpg';


const ShoppingItem = () => {
  // const [butterPrice, setButterPrice] = useState<number>(250)
  // const [tomatoPrice, setTomatoPrice] = useState<number>(450)
  // const [candyPrice, setCandyPrice] = useState<number>(250)
  // const [totalPrice, setTotalPrice] = useState<number>(butterPrice +
  //   tomatoPrice +
  //   candyPrice)
    const [quantity, setQuantity] = useState<any>({
      butterQty:1,
      tomatoQty:1,
      candyQty:1,
      butterPrice:250,
      tomatoPrice:450,
      candyPrice:250
    })

    useEffect(() => {
      setQuantity((prev: any) => ({
        ...prev,
        totalPrice: prev.butterQty * prev.butterPrice + prev.tomatoQty * prev.tomatoPrice + prev.candyQty * prev.candyPrice,
      }));
    }, [quantity.butterQty, quantity.tomatoQty, quantity.candyQty, quantity.butterPrice, quantity.tomatoPrice, quantity.candyPrice]);


    const handleAddToChart = (item: string) => {
      setQuantity((prev:any) => {
        switch (item) {
          case "butter":
            return { ...prev, butterQty: prev.butterQty + 1 };
          case "tomato":
            return { ...prev, tomatoQty: prev.tomatoQty + 1 };
          case "candy":
            return { ...prev, candyQty: prev.candyQty + 1 };
          default:
            return prev;
        }
      });
    };

    const handleSubChart = (item: string) => {
      setQuantity((prev:any) => {
        switch (item) {
          case "butter":
            return { ...prev, butterQty: Math.max(prev.butterQty - 1, 0) };
          case "tomato":
            return { ...prev, tomatoQty: Math.max(prev.tomatoQty - 1, 0) };
          case "candy":
            return { ...prev, candyQty: Math.max(prev.candyQty - 1, 0) };
          default:
            return prev;
        }
      });
    }


  return (
    <div className="my-8">
      <ChartItem
        category = 'butterscotch ice-cream'
        image = {product5}
        price = {quantity.butterPrice}
        quantity = {quantity.butterQty}
        name='Milk product'
        onClickAdd={() => handleAddToChart("butter")}
        onClickSub={() => handleSubChart("butter")}
      />
      <ChartItem
        category = 'Supreme fresh tomato'
        image = {product6}
        price = {quantity.tomatoPrice}
        quantity = {quantity.tomatoQty}
        name='Vegetable Item'
        onClickAdd={() => handleAddToChart("tomato")}
        onClickSub={() => handleSubChart("tomato")}
      />
      <ChartItem
        category = 'Red color candy'
        image = {product7}
        price = {quantity.candyPrice}
        quantity = {quantity.candyQty}
        name='Food Item'
        onClickAdd={() => handleAddToChart("candy")}
        onClickSub={() => handleSubChart("candy")}
      />

       

        <div className='mt-10 px-5 dark:text-white'>
          <div className='flex justify-between mb-2'>
            <p>Sub Total</p>
            <p className='font-semibold'>${quantity.totalPrice}</p>
          </div>
          <div className='flex justify-between'>
            <p>Total</p>
            <p className='font-semibold'>${quantity.totalPrice}</p>
          </div>
        </div>
    </div>
  )
}

export default ShoppingItem