import React from "react";
import {Grid, CardContent, Typography, Card, CardMedia} from "@mui/material";
import MyButton from "./MyButton";

const Item = ({title, content, image}) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 375 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5" component="div"
            align="center"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
        </CardContent>
        <MyButton>Subscribe</MyButton>
        <MyButton>Copy Text</MyButton>
      </Card>
    </Grid>
  )
};

export default Item;