import React from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';
import ListaCitas from './Componentes/ListaCitas';

class App extends Component {

  state = {
    citas : []
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);
    this.setState({
      citas
    });
  }

  borrarCita = id => {
    //obtener copia del state
      const citasActuales = [...this.state.citas];
      
      
    //borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);


    //actualizar el state
    this.setState({
      citas
    })
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

            <div className="col-md-6">
                <ListaCitas
                  citas={this.state.citas}
                  borrarCita={this.borrarCita}
                />
            </div>
  
          </div>
        
      </div>
    );
  }
  
}

export default App;
