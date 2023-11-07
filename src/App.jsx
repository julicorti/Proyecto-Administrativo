import Login from "./Componentes/Login/login";
import Año from "./Componentes/Años/Año";
import Primero from "./Componentes/Divisiones/Primero";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Historial from "./Componentes/Historial/Historial";
import Seleccion from "./Componentes/Divisiones/Seleccion";
import HistorialAlumno from "./Componentes/HistorialAlumno/HistorialAlumno";
import Alumno from "./Componentes/Alumno/VistaAlumno";
function App() {
  return (

    <BrowserRouter>
  
          
          <Routes>
          <Route path="/" element={<Año/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Primero" element={<Primero/>} />
          <Route path="/Historial" element={<Historial/>} />
          <Route path="/Ciclo_lectivo/:year" element={<Año/>}/>
          <Route path="/Seleccion" element={<Seleccion/>}/>
          <Route path="/HistorialAlumno" element={<HistorialAlumno/>}/>
          <Route path="/Alumno" element={<Alumno/>}/>
          </Routes>

    </BrowserRouter>
 /*    <div>
    

    </div> */
  );
}

export default App;
