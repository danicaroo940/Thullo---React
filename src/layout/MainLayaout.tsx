import { Header } from '../components/Header/Header';

interface Props {
  children: React.ReactNode;
}

export const MainLayaout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center content-center h-screen">
        <Header />
        <div className="h-5/6 grow bg-slate-100">{children}</div>
      </div>
    </>
  );
};
