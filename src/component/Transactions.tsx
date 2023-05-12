import { Button} from '.'
import {recentTransactions} from '../data/dummy'
import { useStateContext } from '../context/ContentProvider'
import  DropDown  from './MonthDrop'

const Transactions = () => {
  
const { currentMode, currentColor } = useStateContext()
    
  return (
    <div className=' rounded-2xl p-5 dark:bg-secondary-dark-bg w-[450px] md:w-[550px]'>
        <div className=' flex justify-between items-center mb-3'>
            <div>
                <h3 className=' text-black dark:text-slate-500 font-semibold text-xl'>Recent Transactions</h3>
            </div>

            <div>
                <DropDown currentMode={currentMode} />
            </div>
        </div>

        <div className="py-8 border-b-1 border-color">
        {recentTransactions.map((item, i) => (
        <div key={i} className="py-4 px-2 flex gap-8 items-center justify-between">
        <div className='flex items-center gap-5'>
          <div style={{background:`${item.iconBg}`, color:`${item.iconColor}`}} className="rounded-lg w-[63px] h-[60px] flex justify-center items-center text-2xl" >
            {item.icon}
          </div>

          <div className=''>
            <h5 className="dark:text-white font-semibold">{item.title}</h5>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        </div>

        <div>
            <p className={`text-${item.pcColor}`}>{item.amount}</p>
        </div>
        </div>

        
      ))}
    </div>
    
    
    <div className='mt-3 flex items-center justify-between'>
        <Button 
          color='white'
          bgColor={currentColor}
          text='Add'
          borderRadius='10px'
          size='md'
        />

        <p className='text-gray-400 text-sm'>36 recent transactions</p>
    </div>

    
        
    </div>
  )
}

export default Transactions