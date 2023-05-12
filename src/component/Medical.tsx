import { BiDotsHorizontal } from "react-icons/bi"
import { medicalproBranding } from "../data/dummy"
import Button from "./Button"
import { useStateContext } from "../context/ContentProvider"


const Medical = () => {
const {currentColor} = useStateContext()

  return (
    <div className=' rounded-2xl p-5 dark:bg-secondary-dark-bg md:w-[370px] w-[385px]'>
      <div className='flex justify-between items-center mb-7 mt-2'>
          <h3 className='text-slate-800 dark:text-slate-200 font-semibold text-xl'>MedicalPro Branding</h3>
          
          <button>
              <BiDotsHorizontal className='dark:text-gray-400 font-bold'/>
          </button>
          
        </div>
        <button className="px-2 py-1 font-semibold text-xs bg-orange-400 text-white rounded-xl my-2">
          16 APR, 2021
        </button>
        
        
        <div className="border-b-1 border-color flex gap-5 mt-2">
        {medicalproBranding.data.map((item, i) => (
          <div key={i} >
            <div className=" border-r-1 border-r-color p-2">
              <p className="text-gray-400 text-xs">{item.title}</p>
              <p className="text-sm dark:text-white">{item.desc}</p>
            </div>
            
          </div>
        ))}
        </div>
        
        <h3 className="dark:text-white text-medium font-bold p-2">Teams</h3>

        <div className="border-b-1 border-color flex gap-5 p-2 pb-3">
         
          {medicalproBranding.teams.map((item, i) => (
            <button key={i} className='px-2 py-1 font-normal text-xs 
            text-white rounded-xl' style={{background:`${item.color}`}}>{item.name}</button>
          ))}
        </div>

        <h3 className="dark:text-white text-medium font-bold p-2 capitalize">leaders</h3>

        <div className="border-b-1 border-color flex gap-3 p-2 pb-3">
        
          {medicalproBranding.leaders.map((item, i) => (
            <div key={i} className="rounded-full w-9 overflow-hidden">
              <img src={item.image} alt="avatar" />
            </div>
          ))}
        </div>

        <div className='my-3 flex items-center justify-between'>
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

export default Medical