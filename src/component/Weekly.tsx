import React from 'react'
import { weeklyStats } from '../data/dummy'
import { BiDotsHorizontal } from 'react-icons/bi'
import { SparkLine } from '../component'
import { useStateContext } from '../context/ContentProvider'
import { SparklineAreaData } from '../data/dummy'


const Weekly = () => {
    const {currentColor} = useStateContext()

  return (
    <div className=' rounded-2xl p-5 dark:bg-secondary-dark-bg w-[370px] '>
        <div className='flex justify-between items-center mb-4 mt-2'>
            <h3 className='text-slate-800 dark:text-slate-200 font-semibold text-xl'>Weekly Stats</h3>
            
            <button>
                <BiDotsHorizontal className='dark:text-gray-400 font-bold'/>
            </button>
            
        </div>
        {weeklyStats.map((item, i) => (
            <div key={i} className='flex justify-between items-center py-2'>
                <div className='flex justify-center items-center gap-4'>
                <div style={{background:`${item.iconBg}`}} className="rounded-full flex justify-center items-center text-2xl text-white p-3" >
                {item.icon}
                </div>
                <div className='flex flex-col justify-center '>
                    <h3 className='font-semibold text-normal dark:text-white'>{item.title}</h3>
                    <p className='font-normal text-sm text-slate-500'>{item.desc}</p>
                </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
            </div>
        ))}

            <div className='my-5'>
                <SparkLine
                currentColor={currentColor}
                id='sparkline'
                type='Line'
                height='150px'
                width='auto'
                data={SparklineAreaData}
                color={currentColor}
                marker={{
                visible: ['All'],
                size: 5, fill: 'white', border: { color: `${currentColor}`, width: 2
            }}}
            />
            </div>
    </div>
  )
}

export default Weekly