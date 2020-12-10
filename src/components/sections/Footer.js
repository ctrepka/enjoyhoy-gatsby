import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";

import Content from "../../ContentJson/Content";

const Footer = (props) => {
  return (
    <Grid container >
      <Grid item xs={12} >
        <Container>
          <Box p={4} bgcolor={'#333'}>
            <Grid container>
              <Grid item xs={12} lg={3}>
                <Typography variant="h2" component={"h2"}>
                  Header 1
                </Typography>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Typography variant="h2" component={"h2"}>
                  Header 1
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography variant="h2" component={"h2"}>
                  Header 1
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Footer;
