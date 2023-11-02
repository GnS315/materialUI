import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import MyButton from "./MyButton";
const Header = () => {
  return (
   <AppBar position="static">
      <Toolbar>
        <Typography
          component="h4"
          style={{flexGrow: 1}}
        >
          Какой-то сайт
        </Typography>
        <MyButton>Sign in</MyButton>
        <MyButton disabled>Login</MyButton>
      </Toolbar>
   </AppBar>
  );
};

export default Header;