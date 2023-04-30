import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type itemProps= {
    category : string
    image : string
    price : number
    quantity : number
    name:string
    onClickAdd:() => void
    onClickSub:() => void
}
const ChartItem = ({category,image,price,quantity,name, onClickAdd, onClickSub}:itemProps) => {
  return (
    <div className="py-4 px-2 border-b-1 border-color flex gap-8 items-center">
    <img src={image} alt="senderImg" className="w-24 h-20 rounded-lg"/>

    <div>
        <h5 className="dark:text-white font-semibold">{name}</h5>
        <p className="text-slate-400 text-sm">{category}</p>
       <div className='flex gap-8 mt-2 items-center'>
            <h4 className="dark:text-white font-semibold">${price * quantity}</h4>
            <div className="flex items-center border-1 border-r-0 border-color rounded">
              <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer" onClick={onClickSub}><AiOutlineMinus /></p>
              <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">{quantity}</p>
              <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 cursor-pointer" onClick={onClickAdd}><AiOutlinePlus /></p>
            </div>
       </div>
    </div>
</div>
  )
}

export default ChartItem