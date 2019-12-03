import React, { Component } from "react";

// The first parameter passed to a function Component is the props object

export default function Child(props) {
  console.log("props in child: ", props);
  return (
    <div>
      <h1>Props Values</h1>
      <p>Display Name: {props.displayName}</p>
      <p>Display Age: {props.displayAge}</p>
      <h3>
        <u>Friends</u>
      </h3>
      {props.friends.map((friend, index) => {
        return (
          <div key={`${friend}-${index}`}>
            <p>Friend: {friend}</p>
          </div>
        );
      })}
      <h3>
        <u>Car</u>
      </h3>
      <p>Make: {props.car.make}</p>
      <p>Year: {props.car.year}</p>
      <p>Active: {props.active ? "True" : "False"}</p>
      {/* If we pass props.parentFunction directly as the callback function, then it will be invoked on each click event. If we invoke it immediately, then it will cause an infinite loop */}
      <button onClick={props.parentFunction}>Flip Active</button>
      <button onClick={e => props.loggerFunction("hello")}>
        Send value to parent!
      </button>
    </div>
  );
}

// We can access props in both class based components and functional components. The difference is in how we access them.
// Class based components access props through this.props
// function components access props through their first parameter, often called props

// export default class Child extends Component {
//   render() {
//     console.log("props in class based child: ", this.props);
//     return <div>Class based component</div>;
//   }
// }
