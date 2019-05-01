import React, { Component } from "react";
import api from "services/api";

export default class extends Component {
  componentDidMount() {
    console.log("main - componentDidMount()");
    api.get("/teste");
  }
  render() {
    return <h1>Hello</h1>;
  }
}
