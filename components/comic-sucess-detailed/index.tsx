import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { Comic } from "types/getComic";

interface ComicDetail {
  title: string;
  thumbnail: string;
  prices: number;
  stock: number;
  description: string;
}

const ComicDetail = (props: ComicDetail) => {
  const { description, prices, stock, thumbnail, title } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img src={thumbnail} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" flexDirection="column" height="100%">
            <Paper>
              <Typography variant="h6" component="h3" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {description}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Preço: R$ {prices}
              </Typography>
            </Paper>
            <Box flexGrow={1} />
            <Paper>
              <Typography variant="h6" component="h3" gutterBottom>
                Aproveite sua compra!
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ComicDetail;
