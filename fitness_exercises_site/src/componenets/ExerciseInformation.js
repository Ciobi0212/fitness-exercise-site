import React from 'react'
import {Grid, Box, Typography, Stack} from "@mui/material"
import equipmentIcon from '../assets/icons/equipment.jpg'
import bodyPartIcon from '../assets/icons/bodypart.jpg'
import targetIcon from '../assets/icons/target.jpg'
function ExerciseInformation({exerciseData}) {
  const infoStyle = {textTransform:"capitalize",fontSize:"25px", marginLeft:"10px"}
  const iconStyle = {width:"65px", height:"65px", borderRadius:"10px", border:"2px solid black"}

  return (
    <Box className = "exercise-info">
    <Grid container spacing={2}>
      <Grid item xs = {6} sx = {{xs:"300px"}}>
        <img src = {exerciseData.gifUrl} alt = 'exercise-url' width='800px' height='800px' ></img>
      </Grid>
      <Grid item xs = {6}>
        <Typography variant='h2' style = {{textTransform:"capitalize", fontWeight:"bold", marginLeft:"300px", marginBottom:"150px", marginTop:"30px"}}>{exerciseData.name}</Typography>
        <Stack direction='row' alignContent='center' alignItems='center' m = '40px' marginLeft='300px'>
        <img src ={targetIcon} alt = 'equipment-icon' style = {iconStyle}/>
        <Typography style = {infoStyle}>Target Muscle: {exerciseData.target}</Typography>
        </Stack>
        <Stack direction='row' alignContent='center' alignItems='center' m = '40px' marginLeft='300px'>
        <img src ={bodyPartIcon} alt = 'equipment-icon' style = {iconStyle}/>
        <Typography style = {infoStyle}>Body Part: {exerciseData.bodyPart}</Typography>
        </Stack>
        <Stack direction='row' alignContent='center' alignItems='center' m = '40px' marginLeft='300px'>
        <img src ={equipmentIcon} alt = 'equipment-icon' style = {iconStyle}/>
        <Typography style = {infoStyle}>Equipment: {exerciseData.equipment}</Typography>
        </Stack>
      </Grid>
    </Grid>
    </Box>
  )
}

export default ExerciseInformation