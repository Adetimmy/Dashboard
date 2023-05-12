import { Button } from '.'
import { BiDotsHorizontal } from 'react-icons/bi'
import { useStateContext } from '../context/ContentProvider'


const Activity = () => {
    const {currentColor} = useStateContext()

  return (
    <div className=' rounded-2xl p-5 dark:bg-secondary-dark-bg md:w-[370px] w-[385px]'>
    <div className='flex justify-between items-center mb-7 mt-2'>
        <h3 className='text-slate-800 dark:text-slate-200 font-semibold text-xl'>Daily Activities</h3>
        
        <button>
            <BiDotsHorizontal className='dark:text-gray-400 font-bold'/>
        </button>
        
      </div>

        <img src={require('../data/product9.jpg')} alt='avatar' className='w-full mt-5'/>
      

      <div className='my-5'>
        <h2 className='dark:text-white text-lg font-semibold'>React 18 coming soon!</h2>
        <p className='text-gray-400 capitalize font-normal text-base'>by jonathan doe</p>
      </div>

      <div className='mb-5'>
        <p className='text-gray-400 font-normal text-sm'>This will be the small description for the news you have shown here. There could be some great info.</p>
      </div>

      <Button 
          color='white'
          bgColor={currentColor}
          text='Read More'
          borderRadius='10px'
          size='md'
        />
      </div>
  )
}

export default Activity