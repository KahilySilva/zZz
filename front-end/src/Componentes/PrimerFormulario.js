import {Button,Col,Row,Form}from 'react-bootstrap';
import { useState } from 'react';

function PrimerFormulario(personaregistro)  {
    
    function Click() {
        console.log(personaregistro);
    }

    const [ nombre, setNombre ] = useState ("");
    const [papellido, setpapellido] = useState("");
    const [sapellido, setsapellido] = useState("");
    const [usuario, setusuario] = useState ("");
    const [contra, setcontra] = useState("");
    const [ccontra, setccontra] = useState("");

    const cambiarNombre = (e) => {
        const value=e.target.value;
        setNombre (value);
      };

      const cambiarpapellido = (e) => 
      {
        const value=e.target.value;
        setpapellido(value);
    };
    
    const cambiarsapellido = (e) => 
      {
        const value=e.target.value;
        setsapellido(value);
    };
    
    const cambiarusuario = (e) => 
      {
        const value=e.target.value;
        setusuario(value);
    };
    
    const cambiarcontra = (e) => 
      {
        const value=e.target.value;
        setcontra(value);
    };
    
    const cambiarccontra = (e) => 
      {
        const value=e.target.value;
        setccontra(value);
    };
      
      const guardarClick = () => {
        console.log("Nombre: ",nombre, );
        console.log("Primer apellido: ",papellido);
        console.log("Segundo apellido: ",sapellido);
        console.log("Nombre de usuario: ",usuario);
        console.log("Contraseña: ",contra);
        console.log("Confirmar Contraseña: ",ccontra);

      };

    return (
    <Row>
        <Col> 
            <Form.Label>Nombre:</Form.Label>
            <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={nombre}
            onChange={cambiarNombre}
            ></input>
            
        </Col>
        <Col> 
            <Form.Label>Primer Apellido:</Form.Label>
            <input 
            type="text" 
            id="papellido" 
            name="papellido" 
            value={papellido}
            onChange={cambiarpapellido}
            ></input>

        </Col>
        <Col> 
            <Form.Label>Segundo Apellido:</Form.Label>
            <input 
            type="text" 
            id="sapellido" 
            name="sapellido" 
            value={sapellido}
            onChange={cambiarsapellido}
            ></input>
        </Col>
        <Col> 
            <Form.Label>Nombre de usuario:</Form.Label>
            <input 
            type="text" 
            id="sapellido" 
            name="sapellido" 
            value={sapellido}
            onChange={cambiarusuario}
            ></input>
        </Col>
        <Col> 
            <Form.Label>Contraseña:</Form.Label>
            <input 
            type="text" 
            id="contraseña" 
            name="contraseña" 
            value={contra}
            onChange={cambiarcontra}
            ></input>
        </Col>
        <Col> 
            <Form.Label>Confirmar Contraseña:</Form.Label>
            <input 
            type="text" 
            id="confirmarcontraseña" 
            name="confirmarcontraseña" 
            value={ccontra}
            onChange={cambiarccontra}
            ></input>
        </Col>
        <Col>
          //{<Button onClick={guardarClick}>Guardar</Button>}
        </Col>
    </Row>
    );
}
export default PrimerFormulario;