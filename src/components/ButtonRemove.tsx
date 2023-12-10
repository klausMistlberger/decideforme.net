import React from "react";
import classes from "./Button.module.css";

const ButtonRemove = (props) => {
  return (
    <button
      type="button"
      title="remove option"
      onClick={props.onRemove}
      data-id={props.id}
      className={`${classes["remove-button"]} ${classes["button-option"]} shadow`}
    >
      -
    </button>
  );
};

export default ButtonRemove;
