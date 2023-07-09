import { Button } from '../Button/Button';


export const Input = () => {
  return (
    <>
     <div className="pl-[300px] relative">
        <input type="search" placeholder="Search" className="drop-shadow pl-2 rounded-lg flex flex-row items-center w-[338px] h-[34px]"/>
        <div className='absolute -right-4  top-0.5'>
          <Button title='Search' typeButton='secondary' />
        </div>
      </div>
    </>
  )
}
