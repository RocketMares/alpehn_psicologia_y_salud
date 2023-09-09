import { Route,Routes,Navigate } from "react-router-dom";
import { Homepage } from "../paginas";
import { Menu } from "../ui";

export const AppRouter = () => {
  return (
    <>
    <Menu />
    <Routes>
        <Route path="/home" element={<Homepage/>} ></Route>
        <Route path="/" element={<Navigate to={'/home'} />} ></Route>
    </Routes>
    </>

  )
}


