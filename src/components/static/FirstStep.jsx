import React, { Component } from "react";
import M from "materialize-css";
import SecondStep from "./SecondStep";
export default class FirstStep extends Component {
  componentDidMount() {
    let elem = document.querySelectorAll("select");
    M.FormSelect.init(elem);
  }
  render() {
    let { nombre, total, secondStep, placa } = this.props.propiedades;
    return (
      <div>
        {!secondStep ? (
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
                    <div>
                      <button
                        className="btn white"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10%",
                        }}
                        onClick={this.props.onBack}
                      >
                        <i className="material-icons">keyboard_arrow_left</i>
                        <b style={{ color: "black" }}>Volver</b>
                      </button>
                    </div>
                    <h3>¡Hola, {nombre}</h3>
                    <p>Completa los datos de tu auto</p>
                  </div>
                </div>
                <div className="col s12 m12 l12">
                  <div className="col s6 m6 l6"></div>
                  <div className="input-field col s12 m6 l6">
                    <select defaultValue={0}>
                      <option value="1">2019</option>
                    </select>
                  </div>
                  <div className="col s6 m6 l6"></div>
                  <div className="input-field col s12 m6 l6">
                    <select defaultValue={0}>
                      <option value="1">Wolkswagen</option>
                    </select>
                  </div>
                  <div className="col s6 m6 l6"></div>
                  <div className="input-field col s12 m6 l6">
                    <p>
                      ¿Tu auto es a gas?
                      <label>
                        <input name="group1" type="radio" />
                        <span>Sí</span>
                      </label>
                      <label>
                        <input name="group1" type="radio" defaultChecked />
                        <span>No</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div className="col s12 m12 l12">
                  <div className="col s6 m6 l6"></div>
                  <div className="col s12 m12 l6">
                    <div className="divider"></div>
                    <div className="col s12 m12 l6">
                      <p>Indica la suma asegurada</p>
                      <p>Min $12,500 | Max 16, 500</p>
                    </div>
                    <div
                      className="col s12 m12 l6"
                      style={{ paddingTop: "10px" }}
                    >
                      <div className="box" id="card_1">
                        <button
                          className="btn-small white"
                          onClick={this.props.onReduce}
                        >
                          <i className="material-icons">arrow_drop_down</i>
                        </button>
                        <p style={{ padding: "10px" }}>${total}</p>
                        <button
                          className="btn-small white"
                          onClick={this.props.onAdd}
                        >
                          <i className="material-icons">arrow_drop_up</i>
                        </button>
                      </div>
                    </div>
                    <div className="col s12 m12 l6">
                      <button
                        type="submit"
                        className="btn-large red darken-1"
                        onClick={this.props.onNext}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <b>Continuar</b>
                          <i className="material-icons">arrow_forward</i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <SecondStep 
          placa= {placa}
          onBack2 = {this.props.onBack2}
          />
        )}
      </div>
    );
  }
}
