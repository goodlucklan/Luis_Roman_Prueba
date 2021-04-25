import React, { Component } from "react";
import M from "materialize-css";
export default class FirstStep extends Component {
  componentDidMount() {}
  render() {
    let { nombre } = this.props.propiedades;
    return (
      <React.Fragment>
        <div className="sidebar">
          <a className="active" href="#home">
            1. Datos del auto
          </a>
          <a href="#news">2. Arma tu plan</a>
        </div>
        <div className="row">
          <div className="container">
            <div className="col s12 m12 l12">
              <div className="col s6 m6 l6"></div>
              <div className="col s12 m6 l6">
                <h2>¡Hola, {nombre}</h2>
                <p>Completa los datos de tu auto</p>
              </div>
            </div>
            <div className="col s12 m12 l12">
                
            </div>
            {/* <div className="col s6 m6 l6"></div>
            <div className="col s6 m6 l4">
              <h2>¡Hola, {nombre}</h2>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
