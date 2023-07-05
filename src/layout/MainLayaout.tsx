import { Header } from "../components/Header/Header"

export const MainLayaout = () => {
  return (
   <>
      <div className="flex flex-col justify-center content-center h-screen">
        <Header />
        <div className="h-5/6 grow">MAIN
          
        </div>
      </div>
   </>
  )
}
