import React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
} from "@material-ui/core";
import Content from "../../ContentJson/Content";
import CardGame from '../../images/cards.png';

const Home = () => {
  return (
    <Box my={24}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} md={6} lg={6}>
          <Box>
            <Box pr={4} py={2}>
              <img src={CardGame} alt="EnjoyHoy, Senior Companion and Concierge Services" style={{ width: "100%" }} />
            </Box>
            <Typography gutterBottom variant={"h2"} component={"h2"}>
              Our Services
            </Typography>
            <Typography gutterBottom variant={"body1"} component={"p"}>
              Our mission is to help you make every day a breeze with
              companionship and concierge services. All services, including
              transportation, can be provided with you, or for you!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} spacing={2}>
          <Grid container spacing={2}>
            {Content.services.map((v, i) => (
              <Grid item xs={12}>
                <Card elevation={24}>
                  <Box p={2}>
                    <Typography variant={"h4"} component={"h4"}>
                      {v.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
