import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import Car from '../../images/car.png'

const Home = () => (
    <Box mt={24} mb={16}>
        <Grid 
            container spacing={2}
            justify={"center"} 
        >   
            <Grid item xs={12} sm={6} md={6} lg={4} style={{ display: "flex" }} >
                <Box pr={4} py={2} >
                    <img src={Car} alt="EnjoyHoy, Senior Companion and Concierge Services" style={{ width: "100%" }} />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8}>
                <Box p={2} >
                    <Typography gutterBottom variant={'h2'} component={'h2'}>
                        Life's a breeze with EnjoyHoy!
                    </Typography>
                    <Typography gutterBottom variant={'body1'} component={'p'}>
                        Our mission is to help you make every day a breeze with companionship and concierge services.
                        All services, including transportation, can be provided with you, or for you!
                    </Typography> <br/>
                    <Button variant="contained" color="secondary">
                        <a href="https://www.facebook.com/enjoyhoy" style={{ color: 'white', textDecoration: 'none' }}>Schedule a consultation</a>
                    </Button>    
                </Box>    
            </Grid>
        </Grid>    
    </Box>    
)


export default Home