import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    typeButton?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ title, typeButton = 'primary' }: Props) => {
    const typeSwitch = {
        primary: (): JSX.Element => {
            return (
                <button className="bg-[#F2F2F2] rounded-lg px-4 py-2 mr-4 flex flex-row items-center">
                    <FontAwesomeIcon icon={faListUl} color="#828282" />
                    <span className="pl-3 text-[#828282] font-[500]">
                        {title}
                    </span>
                </button>
            );
        },

        secondary: (): JSX.Element => {
            return (
                <button className="bg-[#2F80ED] rounded-lg px-4 py-2 mr-4 flex flex-row items-center justify-center w-[74px] h-[30px]">
                    <span className="text-[#ffffff] font-[500] text-xs">
                        {title}
                    </span>
                </button>
            );
        },

        tertiary: (): void => {
            <button className="bg-[#0868f8] rounded-sm flex flex-row items-center">
                <FontAwesomeIcon icon={faListUl} color="#828282" />
                <span className="pl-3 text-[#828282] font-[500]">{title}</span>
            </button>;
        },
    };

    return(
          <>
            {typeSwitch[typeButton]()}
          </>
    );
};
