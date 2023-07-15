import LockClosedIcon from '@heroicons/react/24/outline/LockClosedIcon';
import { LockOpenIcon } from '@heroicons/react/24/outline';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { createBoard } from '../../services/Services';

interface Props {
  handleClose: () => void;
}

export const Modal = ({ handleClose }: Props) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [title, setTitle] = useState<string>('');
  const [fileToAdd, setFileToAdd] = useState<any>(null);
  const [privBoard, setPrivBoard] = useState(false);

  const handlePreview = (e: any) => {
    const file = e?.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
      setFileToAdd(e.target.files[0]);
    };
  };

  const handlePrivate = () => {
    setPrivBoard(!privBoard);
  };

  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleErase = () => {
    setPreview(null);
  };

  const handleCreate = () => {
    createBoard(title, fileToAdd, privBoard)
      .then(() => {
        handleClose();
        alert('Board created successfully');
      })
      .catch(() => {
        alert('Error creating board');
      });
  };
  return (
    <>
      {
        <div className="backdrop-blur-sm fixed bg-black bg-opacity-10 w-[100%] h-[100%] z-10 top-0 left-0 flex flex-col justify-center items-center">
          <div className="fixed bg-white rounded-lg w-[19.1875rem] h-[16.9375rem] flex flex-col items-center px-6 py-7 gap-4">
            {preview ? (
              <>
                <img
                  src={preview as string}
                  className="w-[16.1875rem] h-[4.875rem] object-cover rounded-lg cursor-pointer"
                  alt=""
                />
                <div
                  className="hover:bg-opacity-20 hover:bg-black z-10 w-[16.1875rem] h-[4.875rem] object-cover rounded-lg cursor-pointer absolute"
                  onClick={() => handleErase()}
                >
                  <p className="text-white text-center pt-[2.125rem] opacity-0 hover:opacity-100">
                    Eliminar
                  </p>
                </div>
              </>
            ) : (
              <img
                src="/public/unsplash.jpg"
                className="w-[16.1875rem] h-[4.875rem] object-cover rounded-lg"
                alt=""
              />
            )}
            <Input
              title="Add Board Title"
              type="inputText"
              event={(e) => handleTitle(e)}
            />
            <div className="flex flex-row justify-center items-center gap-1">
              <Input
                title="Cover"
                type="inputFileAsButton"
                w="7.5rem"
                h="2rem"
                event={(e) => handlePreview(e)}
              />
              <Button
                title="Private"
                typeButton="primary"
                w="7.5rem"
                h="2.1rem"
                onClick={handlePrivate}
              >
                {privBoard ? (
                  <LockClosedIcon className="w-4 h-4 text-[#828282]" />
                ) : (
                  <LockOpenIcon className="w-4 h-4 text-[#828282]" />
                )}
              </Button>
            </div>
            <div className="flex flex-row justify-end items-center gap-1 w-[100%]">
              <Button
                title="Cancel"
                typeButton="primary"
                w="5rem"
                h="2rem"
                onClick={handleClose}
              ></Button>
              <Button
                title="Create"
                typeButton="secondary"
                w="5rem"
                h="2rem"
                onClick={handleCreate}
              ></Button>
            </div>
          </div>
        </div>
      }
    </>
  );
};
