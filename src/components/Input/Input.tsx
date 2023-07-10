import { Button } from '../Button/Button';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';

interface Props {
    title?: string;
    type?: 'searchBar' | 'inputText' | 'inputFileAsButton';
    w?: string;
    h?: string;
    event?: (e:ChangeEvent) => void;
}
export const Input = ({ type = 'searchBar', title, w, h, event }: Props) => {
    const typeSwitch = {
        searchBar: (): JSX.Element => {
            return (
                <div className="pl-[300px] relative">
                    <input
                        type="search"
                        placeholder={title}
                        className="drop-shadow pl-2 rounded-lg flex flex-row items-center w-[338px] h-[34px] "
                    />
                    <div className="absolute right-0 top-0">
                        <Button title="Search" typeButton="secondary" w="5rem" h="32px" />
                    </div>
                </div>
            );
        },
        inputText: (): JSX.Element => {
          return (
            <input 
            type="text" 
            className="w-[16.1875rem] h-[2.125rem] rounded-lg shadow-lg flex flex-row items-center px-2 py-3 border-solid border-2 border-gray-100 placeholder:text-xs" 
            placeholder={title}
            onChange={event}
            />
          )
        },
        inputFileAsButton: (): JSX.Element => {
          return (
            <label style={{width: w, height: h}} className="bg-[#F2F2F2] rounded-lg flex flex-row items-center justify-center cursor-pointer text-[#828282] text-xs font-medium gap-2">
            <input 
            onChange={event}
            type="file" 
            className="hidden" 
            placeholder={title}
            />
            <PhotoIcon className='w-4 h4' />
            {title}
            </label>
          )
        }
    };

    return <>{typeSwitch[type]()}</>;
};
