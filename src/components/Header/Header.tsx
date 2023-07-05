import { Button } from "../Button/Button"
import { Input } from "../Input/Input"


export const Header = () => {
  return (
    <>
      <div className="flex flex-row h-[68.32px] items-center border-b border-black">
        <img src="/Logo.svg" alt="logo" className="h-[29px] w-[97.54px] ml-2 mr-14" />
        <span > DevChallenges Board </span>
        <span className="border-l h-8 mx-4 border-r-zinc-700"></span>
        <Button title="All board"  typeButton="primary"/>
        <Input />
      </div>
    </>
  )
}
