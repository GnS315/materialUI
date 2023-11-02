import React from "react";
import {Button} from "@mui/material";

const MyButton = (props) => {
  return <Button
    variant="contained"
    sx = {{margin: 1}}
    color = "info"
    {...props}
  >{props.children}</Button>
};

export default MyButton;