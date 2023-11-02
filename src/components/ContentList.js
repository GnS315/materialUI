import React from 'react';
import {Grid} from "@mui/material";
import {data} from "../data/data";
import Item from "./Item";

const ContentList = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{margin: 1}}
    >
      {data.map((item) => <Item key={item.id} {...item} />)}
    </Grid>
  )
};

export default ContentList;