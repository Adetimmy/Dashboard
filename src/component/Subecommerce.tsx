import { SparkLine, Dough, Trans } from '../component'
import { useStateContext } from '../context/ContentProvider'
import { SparklineAreaData } from '../data/dummy'

const Subecommerce = () => {

    const {currentColor} = useStateContext()
  return (
   <>
    <div className='flex justify-center items-center flex-col my-10 gap-8'>
            <div className='rounded-lg p-5' style={{background:`${currentColor}`}}>
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

            <div className='rounded-lg p-5 flex items-center justify-between dark:bg-secondary-dark-bg'>
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
   </>
  )
}

export default Subecommerce