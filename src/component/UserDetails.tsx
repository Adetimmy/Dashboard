import { userProfileData } from "../data/dummy"


const UserDetails = () => {
  return (
    <div className="my-8 border-t-1 border-color">
      {userProfileData.map((item, i) => (
        <div key={i} className="py-4 px-2 border-b-1 border-color flex gap-8 items-center">
          <div style={{background:`${item.iconBg}`, color:`${item.iconColor}`}} className="rounded-lg w-12 h-12 flex justify-center items-center" >
            {item.icon}
          </div>

          <div>
            <h5 className="dark:text-white font-semibold">{item.title}</h5>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserDetails