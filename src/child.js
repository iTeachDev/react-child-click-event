import React from "react";

export const Child = () => {
  const handleClick = (e, space, txt) => {
    e.preventDefault();
    console.log("clicked");
    console.log(e.target);
  };
  return (
    <div>
      <form className="pure-form">
        <fieldset>
          <legend>Child Component</legend>
          <label for="name">click event example</label>
          <br />
          <input id="name" type="text" placeholder="Enter your name" />
          <button
            type="button"
            className="pure-button pure-button-primary"
            onClick={e => handleClick(e, "home", "Home")}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};
