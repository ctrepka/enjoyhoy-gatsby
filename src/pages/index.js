import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import {Box, Grid, Container} from "@material-ui/core"

import { theme } from '../Theme/PrimaryTheme';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/sections/Home"
import Services from "../components/sections/Services"
import Faq from "../components/sections/Faq"
import Logo_Bird_Text from "../images/Logo_Text_Bird.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ThemeProvider theme={theme}>
      <Box mt={16}>
        <Grid container justify="center" >
          <Grid item xs={10} sm={8} md={6} lg={4} xl={3} >
            <img src={Logo_Bird_Text} alt="EnjoyHoy, Senior Companion and Concierge Services" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Container>
          <Home />
          <Services />
          <Faq/>
        </Container>
      </Box>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
