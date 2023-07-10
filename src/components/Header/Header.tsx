import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"


export const Header = () => {
  return (
    <>
      <div className="flex flex-row h-[68.32px] items-center shadow-xs bg-white">
        <img src="/Logo.svg" alt="logo" className="h-[29px] w-[97.54px] ml-2 mr-14" />
        <span > DevChallenges Board </span>
        <span className="border-l h-8 mx-4 border-r-zinc-700"></span>
        <Button title="All board"  typeButton="primary" w="8rem" h="2rem"/>
        <Input title="Search" type="searchBar" />
        <div className="absolute right-5 flex justify-center items-center">
          <p className="text-[#333333] font-[500] self-start px-3 text-base mt-2.5 truncate overflow-hidden">Login / Register</p>
          <Avatar/>
        </div>
      </div>
    </>
  )
}
