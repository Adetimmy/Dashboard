interface paraProps{
    children:React.ReactNode
}
const para = ({children}:paraProps) => {
  return (
    <p className='text-center font-medium mb-4 dark:text-white text-3xl md:text-xl md:mb-5'>{children}</p>
  )
}

export default para