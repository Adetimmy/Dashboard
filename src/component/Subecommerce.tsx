import { SparkLine, Dough, Trans, LineChart } from '../component'
import { useStateContext } from '../context/ContentProvider'
import { SparklineAreaData } from '../data/dummy'
import Activity from './Activity'
import Medical from './Medical'
import DropDown from './MonthDrop'
import Weekly from './Weekly'

const Subecommerce = () => {

    const {currentColor, currentMode} = useStateContext()
  return (
   <>
    <div className='flex justify-center items-center flex-col my-10 gap-8'>
            <div className='rounded-2xl p-5' style={{background:`${currentColor}`}}>
              <div className='text-white flex flex-row justify-between mt-5'>
                <h4 className='text-xl font-semibold'>Earnings</h4>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold'>$63,448.78</h4>
                  <p className='text-xs font-thin self-end'>Monthly Revenue</p>
                </div>
              </div>
              <div className='mt-6 w-full flex justify-center'>
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="150px" type="Column" data={SparklineAreaData} width="380px" color="rgb(242, 252, 253)" />
              </div>
            </div>

            <div className='rounded-2xl p-5 flex items-center justify-between dark:bg-secondary-dark-bg'>
              <div className='flex flex-col'>
                <h4 className='text-xl font-semibold dark:text-white'>$43,246</h4>
                <p className='text-xs font-bold text-gray-500'>yearly Sales</p>
              </div>
             
                <Dough/>
                    
            </div>
      </div>

      <div className='flex justify-center mt-7'>
        <Trans/>
      </div>

      <div className='flex justify-center my-9'>
        <div className=' rounded-2xl p-5 dark:bg-secondary-dark-bg w-[450px] md:w-[700px]'>
              <div className=' flex justify-between items-center mb-6'>
                  <h3 className=' text-black dark:text-slate-200 font-semibold text-xl'>Sales Overview</h3>
                  <DropDown currentMode={currentMode} /> 
              </div>
              <LineChart/>
         </div>
      </div>
      <div className='flex justify-center flex-wrap gap-6'>
        <Weekly/>
        <Medical/>
      </div>


      <div className='flex justify-center my-6 '>
        <Activity/>
      </div>
      
   </>
  )
}

export default Subecommerce