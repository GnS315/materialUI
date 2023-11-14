import React from "react";
import {Grid, CardContent, Typography, Card, CardMedia} from "@mui/material";
import MyButton from "./MyButton";
import FlexWrapper from "./FlexWrapper";

const Item = ({title, content, image}) => {
  const titleWithSource = `Источник: ${window.location.href}\n${title}`

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
        <FlexWrapper>
          <MyButton>Subscribe</MyButton>
          <MyButton
              onClick={() => window.navigator.clipboard.writeText(titleWithSource)}
          >
            copy title
          </MyButton>
        </FlexWrapper>
      </Card>
    </Grid>
  )
};

export default Item;