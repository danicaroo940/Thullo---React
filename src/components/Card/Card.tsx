import { Avatar } from "../Avatar/Avatar"

interface Props {
  title?: string;
  image?: string;
  id?: number;
  onClick?: () => void;
}

export const Card = ({title, image, id, onClick}:Props) => {
  const url = `http://localhost:2222${image}`
  return (
    <>
      <div  className= "flex flex-col items-center bg-white w-[15.1875rem] h-[15.1875rem] rounded-lg drop-shadow-md"
            onClick={onClick}
      >
        <img src={url} alt="" className="w-[13.6875rem] h-[8.125rem] rounded-lg mt-2.5" />
        <p className="text-[#333333] font-[500] self-start px-3 text-base mt-2.5 truncate overflow-hidden">{title}</p>
        <div className="self-start flex flex-row ml-4 mt-5 gap-1">
           <Avatar/>
        </div>
      </div>

    </>
  )
}
