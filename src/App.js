import React from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';

class App extends Component {

  crearCita = (cita) => {
    console.log(cita);
  }
  
  render(){
    return (
      <div className="container">
        <Header
          titulo={'Administrador de pacientes de veterinaria'}
          />
          <div className="row">
            <div className="col-md-6">
              <AgregarCita
                crearCita = {this.crearCita}
              />
  
            </div>
  
          </div>
        
      </div>
    );
  }
  
}

export default App;
