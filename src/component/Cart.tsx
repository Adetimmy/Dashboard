import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../context/ContentProvider'
import { Shop } from '.'


const Cart = () => {
  const { currentColor, setIsClicked, isClicked } = useStateContext()
  const handleClose = () => {
    setIsClicked(isClicked.chat)
  }

  return (
    <div className='w-[400px] min-h-62 bg-light-gray rounded-lg dark:bg-secondary-dark-bg drop-shadow-xl p-8 absolute top-12 mt-5 right-0 z-30'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center gap-5 items-center'>
          <p className='text-slate-500 dark:text-gray-200 text-lg md:text-xl'>Shopping Cart</p>
          <p className='text-slate-500 dark:text-gray-200 text-xs font-hairline'>5 New</p>
        </div>
       
                  <TooltipComponent position='BottomCenter' content="Close"> 
            <button type='button' className='text-xl rounded-full p-3 hover:bg-slate-200 dark:hover:bg-slate-700  block hover:drop-shadow-xl' onClick={handleClose}>
              <MdOutlineCancel className=' dark:text-gray-400 text-slate-800'/>
            </button>
          </TooltipComponent>
      </div>
      <Shop/>

    
      <button type='button' className='w-full h-11 outline-none text-gray-200 rounded-lg text-lg' style={{backgroundColor:`${currentColor}`}}>
        Place Order
      </button>
     
    </div>
  )
}

export default Cart