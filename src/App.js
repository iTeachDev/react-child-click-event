import React from "react";
import { Parent } from "./parent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Demo on handling events</h1>
      <h3>
        For other examples, visit <a href="https://iteach.dev">iTeach.dev</a>
      </h3>
      <p>
        A bare-bones example of firing off events in react and handling those
        events
      </p>
      <Parent />
    </div>
  );
}
