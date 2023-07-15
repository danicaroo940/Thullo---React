interface Props {
  title?: string;
  typeButton?: 'primary' | 'secondary' | 'tertiary';
  icon?: 'appList' | 'lock' | 'none';
  w: string;
  h: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  title,
  typeButton = 'primary',
  w,
  h,
  children,
  onClick,
}: Props) => {
  const classBase = {
    width: w,
    height: h,
  };
  const typeSwitch = {
    primary: (): JSX.Element => {
      return (
        <button
          className="bg-[#F2F2F2] rounded-lg flex flex-row items-center justify-center gap-2"
          style={classBase}
          onClick={onClick}
        >
          {children}
          {title && (
            <span className="text-[#4F4F4F] font-[500] text-xs">{title}</span>
          )}
        </button>
      );
    },

    secondary: (): JSX.Element => {
      return (
        <button
          className="bg-[#2F80ED] rounded-lg flex flex-row items-center justify-center gap-2"
          style={classBase}
          onClick={onClick}
        >
          {children}
          {title && (
            <span className="text-[#ffffff] font-[500] text-xs">{title}</span>
          )}
        </button>
      );
    },
    tertiary: (): JSX.Element => {
      return (
        <button className="bg-[#2F80ED] rounded-lg px-4 py-2 mr-4 flex flex-row items-center justify-center w-20 ">
          <span className="text-[#ffffff] font-[500] text-xs">{title}</span>
        </button>
      );
    },
  };

  return <>{typeSwitch[typeButton]()}</>;
};
