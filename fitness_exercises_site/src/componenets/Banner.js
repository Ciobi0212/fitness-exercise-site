import React from 'react'
import {Grid, Typography, Button} from '@mui/material'
import Dulama from '../assets/images/dulama.jpg'

function Banner() {
  return (
    <Grid container spacing={2} width="1840px">
    <Grid item xs = {6} style = {{color:"black"}}>
        <Typography fontSize={70} fontWeight={600} marginTop={25} marginLeft={5}>Sweat, Improve, <br/> Repeat</Typography>
        <Typography fontSize= {30} fontWeight={600} marginLeft={5} marginTop={10}>Get better every day.<br/> Overcome yourself.</Typography>
        <Button variant='outlined' href = '#exercises' style = {{marginLeft: '35px', marginTop:'35px', backgroundColor:"black", border:"3px solid black", color:"aliceblue", fontWeight:"bold", fontSize:"25px"}}>Explore Exercises</Button>
    </Grid>
    <Grid item xs = {6}>
        <img src ={Dulama} style = {{width:"800px", height:"auto", marginTop:"125px", marginLeft:'100px'}}/>
    </Grid>
        
    </Grid>
  )
}

export default Banner