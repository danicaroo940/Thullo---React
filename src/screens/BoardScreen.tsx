import {useEffect} from 'react'
import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Modal } from '../components/Modal/Modal';
import { MainLayaout } from '../layout/MainLayaout';
import { getBoards } from '../services/Services';


export const BoardScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [boards, setBoards] = useState();

  const handleClose = () => {
    setShowModal(false);
  }
  const handleOpen = () => {
    setShowModal(true);
  }

useEffect(() => {
  getBoards()
  .then((res) => setBoards(res.data))
}, [showModal])

  

  return (
   <>
    <MainLayaout>
      <div className='px-[12.38rem] pt-[3rem]' >
        
        <div className='flex justify-between items-center'>
          <p className='font-medium pb-[2rem] pl-1'>All Boards</p>
          <Button title='+ Add' typeButton='secondary' w="5rem" h="2rem" onClick={handleOpen}/>
        </div>

        <div className='flex flex-row justify-center flex-wrap gap-3'>
          {boards && boards.map((board:any, key) => {
            return <Card id={key} title={board.attributes.title} image={board.attributes.image.data.attributes.url}/>
          })}
  
        </div>
      </div>
     { showModal &&
          <Modal handleClose={handleClose} />}
    </MainLayaout>
   </>
  )
}
