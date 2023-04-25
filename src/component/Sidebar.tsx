import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { Tooltip } from '@chakra-ui/react'
import { links } from '../data/dummy'
import { useStateContext } from '../context/ContentProvider'


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()
interface StyleProps{
  isActive:boolean
}

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(!activeMenu)
    } 

  }

  // const style= ( {isActive}:Boolean) => isActive? {backgroundColor:currentColor} : {}}

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2'

  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 "

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
      <>
        <div className='flex justify-between items-center'>
          <Link to ='/' 
          onClick={handleCloseSideBar} 
          className='items-center flex gap-3 ml-3 mt-4 text-xl font-extrabold tracking:tight dark:text-white text-slate-900'>
            <SiShopware/> <span>Shoppy</span>
          </Link> 
          <Tooltip placement='bottom' label="Menu"> 
            <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden' onClick={() => {setActiveMenu(!activeMenu)}}>
              <MdOutlineCancel/>
            </button>
          </Tooltip>
        </div>
        <div className='ml-10 mt-8'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map( (link) => (
                <NavLink className={( {isActive} ) => 
                  isActive ? activeLink : normalLink} 
                  onClick={handleCloseSideBar}
                  style={ ({isActive}:StyleProps) => isActive? {backgroundColor:`${currentColor}`} : {} }
                  to={`/${link.name}`}
                  key={link.name}
                >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                </NavLink> 
              )

              )}
            </div>
          )

          )}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar