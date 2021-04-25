import axios from "axios";
import React, { Component } from "react";
import Image from "../Img/day11-blackboard.png";
import FirstStep from "./static/FirstStep";
import Form from "./static/Form";

class Login extends Component {
  state = {
    loginnew: false,
    firstStep: false,
    secondStep: false,
    dni: "",
    celular: "",
    placa: "",
    nombre: "",
  };
  onHandle = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };
  consumerApi = async (e) => {
    let { dni, celular, placa } = this.state;
    if (dni === "" || celular === "" || placa === "") {
      return alert("Por favor completar todos los datos");
    } else {
      let { data } = await axios.get(
        `https://dni.optimizeperu.com/api/persons/${dni}`
      );
      this.setState({ firstStep: true, nombre: data.name });
    }
  };
  render() {
    let { firstStep } = this.state;
    return (
      <React.Fragment>
        {!firstStep ? (
          <section className="row">
            <div className="col s12 m12 l6">
              <img src={Image} className="responsive-img" alt="" />
            </div>
            <div className="col s12 m12 l6">
              <Form onHandle={this.onHandle} consumerApi={this.consumerApi} />
            </div>
          </section>
        ) : (
          <FirstStep
            propiedades={this.state}
            // firstStep={firstStep}
            // secondStep={secondStep}
            // nombre={nombre}
          />
        )}
      </React.Fragment>
    );
  }
}
export default Login;
