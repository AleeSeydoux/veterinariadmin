import React from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';

class App extends Component {

  state = {
    cita : []
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);
    this.setState({
      citas
    });
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
