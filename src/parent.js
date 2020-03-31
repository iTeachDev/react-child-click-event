import React from "react";
import { Child } from "./child";
import { ChildWithLoops } from "./child_with_loops";

export const Parent = props => {
  return (
    <div>
      <fieldset>
        <legend>Parent Component</legend>
        <p>Parent component to demonstrate handling events for child forms</p>

        <Child />
        <ChildWithLoops />
      </fieldset>
    </div>
  );
};
