import { chatData } from "../data/dummy"

const Message = () => {
  return (
    <div className="my-8">
      {chatData.map((item, i) => (
        <div key={i} className="py-4 px-2 border-b-1 border-color flex gap-8 items-center">
            <img src={item.image} alt="senderImg" className="w-10 h-10 rounded-full"/>

          <div>
            <h5 className="dark:text-white font-semibold">{item.desc}</h5>
            <p className="text-gray-400 text-sm">{item.message}</p>
            <small className="text-gray-400 text-xs">{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Message