import { BrowserRouter, Routes, Route } from "react-router-dom";
import Instructions from "../views/instructions/Instructions";
import About from "../views/about/About";
import MainPage from "../views/main-page/MainPage";
import App from "./App/App";
import Game from "../views/game/Game";
import Login from "../views/profile/Login";
import UserCheck from "../views/protected/UserCheck";
import AdminCheck from "../views/protected/AdminCheck";
import LogoutButton from "../views/profile/Logout";
import Signup from "../views/profile/Signup";


function Routing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/Instructions"} element={<Instructions/>}/>
                    <Route path={"/About"} element={<About/>}/>
                    <Route path={"/MainPage"} element={<MainPage/>}/>
                    <Route path={"/Game/:id/:playerid/:color"} element={<Game />} />
                    <Route path={"/Login"} element={<Login/>}/>
                    <Route path={"/UserCheck"} element={<UserCheck/>}/>
                    <Route path={"/AdminCheck"} element={<AdminCheck/>}/>
                    <Route path={"/Logout"} element={<LogoutButton/>}/>
                    <Route path={"/Signup"} element={<Signup/>}/>
                    <Route path={"/"} element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing