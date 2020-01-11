import React from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';

function App() {
  return (
    <div className="container">
      <Header
        titulo={'Administrador de pacientes de veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita/>

          </div>

        </div>
      
    </div>
  );
}

export default App;
