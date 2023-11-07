import NavBar from "../NavBar/NavBar";
import image from "../../Image/dni (2).png";
const Alumno = () => {
  return (
    <div>
      <div className="fondo-rec"></div>
      <NavBar />
      <div className="contenedor-dni">
        <div className="borde">
          <div className="contenido-dni">
          <h1>Ingrese el DNi del aumno</h1>
            <img src={image} alt="" />
          <div className="input">
          <input type="text" placeholder="Ingresa DNI" />
          <button>Enter</button>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Alumno;
