import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/Serler-logo.png";
import icon_logout from "../assests/images/logout.png";

export default class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#CFCAC2", width: "100%", height: 80 }}>
        <div className="row">
          <div className="col s3">
            <img
              src={logo}
              alt="Logo"
              style={{ height: 70, width: 70, marginTop: 5, float: "left" }}
            />
          </div>
          <div className="col s6">
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                lineHeight: "60px"
              }}
            >
              {this.props.title}
            </div>
          </div>
          <div className="col s2">
            <Link to="/Bibtex" style={{ float: "right" }}>
              <img
                src={icon_logout}
                alt="Bibtex"
                style={{ height: 30, width: 30, marginTop: 15 }}
              />
            </Link>
          </div>
          <div className="col s1">
            <Link to="/" style={{ float: "right" }}>
              <img
                src={icon_logout}
                alt="logout"
                style={{ height: 30, width: 30, marginTop: 15 }}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
