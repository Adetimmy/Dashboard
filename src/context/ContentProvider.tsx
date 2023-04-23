
import { createContext, useContext, useEffect, useState } from 'react'


const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}

const initialState:Object = {
  cart : false,
  chat : false, 
  userProfile : false,
  notification : false,
}


const ContentProvider = ({children}:contextType) => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState<null | any>(null)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode ] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)
  
  const setMode = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentMode(e.target.value)
    setThemeSettings(false)

    localStorage.setItem('themeMode', e.target.value)

  }

  const setColor = (color:string) => {
    setCurrentColor(color)
    setThemeSettings(false)

    localStorage.setItem('colorMode', color)

  }



  // in this effect, i'm not going to set activeMenu to false bcos i want to call the resize function once, that is why the dependency array is empty. so i'll create another use useEffect to track the scrensize
  useEffect( () => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()
     
    return () => window.removeEventListener('resize', handleResize)
  }, []) 

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
 
  }, [screenSize])
  

  const handleClick = (clicked:any) => {
    setIsClicked({...initialState, [clicked]:true})
  } 

  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, currentColor, currentMode, setCurrentColor, setCurrentMode, themeSettings, setThemeSettings, setMode, setColor } }>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)