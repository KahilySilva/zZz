//import { useState } from 'react';
import logo from './b2.jpg';
import './App.css';
import BotonQueCambia from './Componentes/BotonQueCambia';

function App() {
  //const [personaregistro] = useState();

  return (

    <div className="App">
      <div className="titulo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-header">
      </div>
      <div className="logo">
      </div>
      <BotonQueCambia/>
      
    </div>

  )
}

export default App;