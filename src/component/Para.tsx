interface paraProps{
    children:React.ReactNode
}
const para = ({children}:paraProps) => {
  return (
    <p className='text-center font-medium mb-4 dark:text-white text-xl md:text-3xl md:mb-5'>{children}</p>
  )
}

export default para