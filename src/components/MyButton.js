import React from "react";
import {Button} from "@mui/material";

const MyButton = ({children, ...otherProps}) => {
  return <Button
    variant="contained"
    sx = {{margin: 1}}
    color = "info"
    {...otherProps}
  >{children}</Button>
};

export default MyButton;