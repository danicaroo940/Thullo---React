
import { Card } from '../components/Card/Card';
import { MainLayaout } from '../layout/MainLayaout';

export const BoardScreen = () => {
  return (
   <>
    <MainLayaout>
      <div className='px-[12.38rem] pt-[3rem]' >
        <p className='font-medium pb-[2rem] pl-1'>All Boards</p>
        <div className='flex flex-row flex-wrap gap-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        </div>
      </div>
    </MainLayaout>
   </>
  )
}
