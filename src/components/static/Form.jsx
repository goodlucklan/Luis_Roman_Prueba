import React, { Component } from "react";
import M from "materialize-css";
import "./Form.css";
export default class Form extends Component {
  componentDidMount() {
    const elem = document.querySelectorAll("select");
    M.FormSelect.init(elem);
  }
  render() {
    return (
      <React.Fragment>
        <div className="form">
          <div className="container">
            <h4>Déjanos tus datos</h4>
          </div>
          <section className="container">
            <div className="row">
              <div className="input-field col s2 m2 l2">
                <select defaultValue={0}>
                  <option value="1">DNI</option>
                  <option value="2">CCI</option>
                </select>
              </div>
              <div className="input-field col s6 m6 l6">
                <input
                  name="dni"
                  type="number"
                  className="validate"
                  onChange={this.props.onHandle}
                />
                <label htmlFor="Codigo">Nro. de doc</label>
              </div>
              <div className="input-field col s8 m8 l8">
                <input
                  name="celular"
                  type="number"
                  className="validate"
                  onChange={this.props.onHandle}
                />
                <label htmlFor="celular">Celular</label>
              </div>
              <div className="input-field col s8 m8 l8">
                <input
                  name="placa"
                  type="text"
                  className="validate"
                  onChange={this.props.onHandle}
                />
                <label htmlFor="placa">Placa</label>
              </div>
              <div className="input-field col s8 m8 l8">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      className="filled-in"
                      defaultChecked="checked"
                    />
                    <span>
                      Acepto la Política de Protecciòn de Datos Personales y los
                      Términos y Condiciones.
                    </span>
                  </label>
                </p>
              </div>
              <div className="input-field col s12 m12 l12">
                <button
                  type="submit"
                  className="btn-large red darken-1"
                  onClick={this.props.consumerApi}
                >
                  Cotizar
                </button>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
