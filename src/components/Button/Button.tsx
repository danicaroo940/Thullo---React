import { QueueListIcon, LockClosedIcon } from "@heroicons/react/20/solid";
interface Props {
    title: string;
    typeButton?: 'primary' | 'secondary' | 'tertiary';
    icon?: 'appList' | 'lock'
  
}

export const Button = ({ title, typeButton = 'primary', icon = "appList" }: Props) => {
    const typeSwitch = {
        primary: (): JSX.Element => {
            return (
                <button className="bg-[#F2F2F2] rounded-lg px-4 py-2 mr-4 flex flex-row items-center">
                  { icon === 'lock' ? <LockClosedIcon className="w-4 h-4 text-[#828282]" /> 
                                    : <QueueListIcon className="w-4 h-4 text-[#828282]" /> 
                    }
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
