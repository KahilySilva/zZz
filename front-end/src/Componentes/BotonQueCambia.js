import SegundoFormulario from './SegundoFormulario';
import TablaUsuario from './Tablausuario';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BotonQueCambia() {
    const [boolean, setBoolean] = useState(false);

    function Click(e) {
        setBoolean(e = true)
    }

    function Usuario() {
        return (
            <div>
                <TablaUsuario classname="tabla" />
                <Button onClick={Click} id="cancelar">Registro</Button>
            </div>
        )
    }

    function Formulario() {
        return (
            <div>
                <SegundoFormulario boolean={true} />
            </div>
        )
    }

    return (

        boolean ?
            Formulario() : Usuario()
    )
}

export default BotonQueCambia;