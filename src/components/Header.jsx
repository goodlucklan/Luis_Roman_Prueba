import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Img/rimac.png";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="white">
            <div className="container">
              <Link className="brand-logo left" to="/">
                <img
                  src={Logo}
                  alt=""
                  className="responsive-img"
                  id="img_header"
                />
              </Link>
              <ul className="right hide-on-med-and-down">
                <li className="subtitle">¿Tienes alguna duda?</li>
                <li>
                  <Link to="/">
                    <i className="material-icons prefix">call</i>
                  </Link>
                </li>
                <li style={{ color: "#6F7DFF"}}>
                  (01) 411 6001
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
