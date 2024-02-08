import React from 'react'
import {Link} from "react-router-dom"
import {Box, Button ,Typography, Stack} from "@mui/material"

function ExerciseCard({exercise}) {
  return (
    <Link className='exercise-card' to = {`./exercise/${exercise.id}`} style = {{textDecoration:"none"}}>
    <Box border='1px black solid'>
        <img src = {exercise.gifUrl} alt = "exercise-gifUrl"></img>
    <Stack direction = 'row' useFlexGap gap="5px" m = "10px" md = "20px">
    <Button style = {{color:'aliceblue', borderRadius:"20px", backgroundColor:"red", textTransform:"capitalize", textDecoration:"none", fontWeight:"bold"}}>
    {exercise.bodyPart}
    </Button>
    <Button style = {{color:'aliceblue', borderRadius:"20px", backgroundColor:"black", textTransform:"capitalize", textDecoration:"none", fontWeight:"bold"}}>
    {exercise.target}
    </Button>
    </Stack>
    <Typography style = {{color:"black", fontSize:"20px", textTransform:"capitalize", fontWeight:"bold"}} m="6px" >{exercise.name}</Typography>
    </Box>
    </Link>
  )
}

export default ExerciseCard