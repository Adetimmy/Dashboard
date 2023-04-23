interface ButtonProps{
  color:string
  bgColor:string
  text:string
  size?:string
  borderRadius:string

}

const Button = ({color,bgColor,text,borderRadius,size}:ButtonProps) => {
  return (
    <button type="button" style={{backgroundColor:bgColor, color:color,
    borderRadius:borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button