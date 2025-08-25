import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Props from "../pages/Props";
import State from "../pages/State";
import LifeCycle from "../pages/LifeCycle";
import Hooks from "../pages/Hooks";
import VirtualDOM from "../pages/VirtualDOM";
import Redux from "../pages/Redux";


const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Props" element={<Props/>} />
            <Route path="/State" element={<State/>} />
            <Route path="/LifeCycle" element={<LifeCycle/>} />
            <Route path="/Hooks" element={<Hooks/>} />
            <Route path="/VirtualDOM" element={<VirtualDOM/>} />
            <Route path="/Redux" element={<Redux/>} />
        </Routes>
    )
}

export default Rutas;