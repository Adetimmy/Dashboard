import React, { ReactNode } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../context/ContentProvider'
import Cart from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import UserProfile from './UserProfile'

type NavButtonProps = {
  title:string;
  customFunc: () => void;
  icon:ReactNode;
  color:string;
  dotColor?:string;
}

function NavButton({title, customFunc, icon, color, dotColor}:NavButtonProps):JSX.Element {
  return(
    <>
    <TooltipComponent content={title} position='BottomCenter'>
      <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
        <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
          {icon}
      </button>
    </TooltipComponent>
  </>    
  ) 
}


const Navbar = () => {
 
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, currentColor } = useStateContext()
 
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton 
      title='Menu' 
      customFunc={() => setActiveMenu(!activeMenu)} 
      color= {currentColor}
      icon={<AiOutlineMenu/>}/>

      <div className='flex'>
      <NavButton 
      title='Cart' 
      customFunc={() => handleClick('cart') } 
      color={currentColor} 
      icon={<FiShoppingCart/>}/>

      <NavButton 
      title='Chat' 
      dotColor='#03C9D7'
      customFunc={() => handleClick('chat') } 
      color={currentColor} 
      icon={<BsChatLeft/>}/>

      <NavButton 
      title='Notifications' 
      dotColor='#03C9D7'
      customFunc={() => handleClick('notification') } 
      color={currentColor} 
      icon={<RiNotification3Line />}/>

      <TooltipComponent content='Profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
          <img src={require('../data/avatar.jpg')} alt='avatar' className='w-8 h-8 rounded-full'/>
          <p>
            <span className='text-gray-400 text-14'>Hi, </span> {' '}
            <span className='text-gray-400 text-14 font-bold ml-1'>Michael</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  ) 
}  

export default Navbar