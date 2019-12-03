import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor() {
    super();
    this.state = {
      age: 23,
      name: "John",
      friends: ["James", "Ariel", "Sunny"],
      car: { make: "Subaru", year: 2000 },
      active: false
    };

    // Whenever passing functions down to child components, make sure to bind them in the constructor.
    // syntax being this.NAME_OF_METHOD = this.NAME_OF_METHOD.bind(this)
    this.flipActive = this.flipActive.bind(this);
    this.logChildValue = this.logChildValue.bind(this);
  }

  flipActive(event) {
    console.log("event being passed to flipActive: ", event);
    // console.log("Value of this in flipActive: ", this);
    this.setState({ active: !this.state.active });
  }

  logChildValue(value) {
    console.log("Value being passed to logChildValue: ", value);
  }

  render() {
    // let { age, name, friends, car, active } = this.state;
    return (
      // We can pass components props using the key={value} syntax
      <Child
        displayAge={this.state.age}
        displayName={this.state.name}
        friends={this.state.friends}
        car={this.state.car}
        active={this.state.active}
        parentFunction={this.flipActive}
        loggerFunction={this.logChildValue}
      />
    );
  }
}
