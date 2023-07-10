
import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Modal } from '../components/Modal/Modal';
import { MainLayaout } from '../layout/MainLayaout';

export const BoardScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }
  const handleOpen = () => {
    setShowModal(true);
  }

  return (
   <>
    <MainLayaout>
      <div className='px-[12.38rem] pt-[3rem]' >
        
        <div className='flex justify-between items-center'>
          <p className='font-medium pb-[2rem] pl-1'>All Boards</p>
          <Button title='+ Add' typeButton='secondary' w="5rem" h="2rem" onClick={handleOpen}/>
        </div>

        <div className='flex flex-row flex-wrap gap-3'>

          <Card />
        </div>
      </div>
     { showModal &&
          <Modal handleClose={handleClose} />}
    </MainLayaout>
   </>
  )
}
