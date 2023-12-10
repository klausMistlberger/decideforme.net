import React from "react";

import classes from "./Button.module.css";

const AddOptionButton = (props) => {
  return (
    <button
      type="button"
      title="add option"
      className={`${classes["button-add"]} ${classes["button-option"]} shadow`}
      onClick={props.onClick}
    >
      +
    </button>
  );
};

export default AddOptionButton;
