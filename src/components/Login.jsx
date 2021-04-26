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
    total: 14300,
  };
  onAdd = () => {
    if (this.state.total >= 16500) {
      alert("No puede agregar más el monto");
    } else {
      this.setState({
        total: this.state.total + 100,
      });
    }
  };
  onReduce = () => {
    if (this.state.total <= 12500) {
      alert("No puede reducir más el monto");
    } else {
      this.setState({
        total: this.state.total - 100,
      });
    }
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
      //Aca se quiso usar la api de Reniec pero lamentablemente se paso los accesos permitidos diarios
      let { data } = await axios.get(
        // `https://dni.optimizeperu.com/api/persons/${dni}`
        `https://randomuser.me/api/?gender=male`
      );
      this.setState({ firstStep: true, nombre: data.results[0].name.first });
    }
  };
  onBack = () => {
    this.setState({
      firstStep: false,
      nombre: "",
      dni: "",
      celular: "",
      placa: "",
      total: 14300,
    });
  };
  onNext = () => {
    this.setState({
      secondStep: true,
    });
  };
  onBack2 = () => {
    console.log(this.state);
    this.setState({
      secondStep: false,
    });
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
            onAdd={this.onAdd}
            onReduce={this.onReduce}
            onBack={this.onBack}
            onNext={this.onNext}
            onBack2={this.onBack2}
          />
        )}
      </React.Fragment>
    );
  }
}
export default Login;
