import { Avatar } from "../Avatar/Avatar"

export const Card = () => {
  return (
    <>
      <div className= "flex flex-col items-center bg-white w-[15.1875rem] h-[15.1875rem] rounded-lg drop-shadow-md">
        <img src="/unsplash.jpg" alt="" className="w-[13.6875rem] h-[8.125rem] rounded-lg mt-2.5" />
        <span className="text-[#333333] font-[500] self-start px-4 text-base mt-2.5 ">Beautiful sunset</span>
        <div className="self-start flex flex-row ml-4 mt-5 gap-1">
        <Avatar/>
        <Avatar/>
        </div>
      </div>

    </>
  )
}
