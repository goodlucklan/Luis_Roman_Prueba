import React, { Component } from "react";
import M from "materialize-css";
export default class SecondStep extends Component {
  componentDidMount() {
    const elem1 = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elem1);
  }
  render() {
    let { placa } = this.props;
    return (
      <React.Fragment>
        <div className="sidebar">
          <a href="#home">1. Datos del auto</a>
          <a className="active" href="#news">
            2. Arma tu plan
          </a>
        </div>
        <div className="row">
          <div className="container">
            <div className="col s12 m12 l12">
              <div className="col s6 m12 l5"></div>
              <div className="col s12 m12 l6">
                <div>
                  <button
                    className="btn white"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10%",
                    }}
                    onClick={this.props.onBack2}
                  >
                    <i className="material-icons">keyboard_arrow_left</i>
                    <b style={{ color: "black" }}>Volver</b>
                  </button>
                </div>
                <h3>Mira las coberturas</h3>
                <p>Conoce las coberturas para tu plan</p>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <div className="col s6 m6 l5"></div>
              <div className="col s12 m12 l5">
                <div className="box2">
                  <span style={{ color: "#A3ABCC" }}>Placa: {placa}</span>
                  <h4>Wolkswagen 2019 Golf</h4>
                  <a href="#Login">Editar</a>
                </div>
              </div>
              <div className="col s12 m12 l2">
                <h5>$35.00</h5>
                <p>Mensuales</p>
                <div className="divider"></div>
                <div id="checklist">
                  <p>El precio incluye:</p>
                  <p>
                    <label>
                      <input type="checkbox" defaultChecked="checked" />
                      <span>Llanta de respuesto</span>
                    </label>
                    <label>
                      <input type="checkbox" defaultChecked="checked" />
                      <span>Analisis de motor</span>
                    </label>
                    <label>
                      <input type="checkbox" defaultChecked="checked" />
                      <span>Aros gratis</span>
                    </label>
                  </p>
                </div>
                <button type="submit" className="btn-large red darken-1">
                  LO QUIERO
                </button>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <div className="col s6 m6 l5"></div>
              <div className="col s12 m6 l7">
                <h5>Agrega o quita coberturas</h5>
                <ul className="collapsible">
                  <li className="active">
                    <div className="collapsible-header">
                      <i className="material-icons">adjust</i>Llanta robada
                    </div>
                    <div className="collapsible-body">
                      <span>
                        He salido de casa a las cuatro menos cinco para ir a la
                        academia de ingles de mi pueblo (Sant Cugat, al lado de
                        Barcelona) con mi bici, na llego a la academia que está
                        en el centro del pueblo en una plaza medio-grande y dejo
                        donde siempre la bici atada con una pitón a un sitio de
                        esos de poner las bicis y mucho más
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">adjust</i>Choque y/o pasarte
                      la luz roja
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">adjust</i>Atropello en la
                      vía Evitamiento
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
