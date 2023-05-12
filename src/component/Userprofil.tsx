type UserProps = {
    name:string
    image:string
    position:string
    website:string
}

const Userprofil = ({image, position, website, name}:UserProps) => {
    
    return (
        <div className="py-6">
            <div className="flex justify-between items-center ">
                <img src={image} alt="user" className="rounded-full w-[120px] h-[120px]"/>
                <div className="mr-6">
                    <h3 className="text-xl text-slate-700 dark:text-slate-300">{name}</h3>
                    <p className="dark:text-gray-400 text-slate-900 text-sm">{position}</p>
                    <p className="dark:text-gray-400 text-slate-900 text-sm">{website}</p>
                </div>
            </div>
        </div>
  )
}

export default Userprofil