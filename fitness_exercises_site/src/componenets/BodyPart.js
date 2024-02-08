import React from 'react'
import {Typography,Button} from '@mui/material'
import GymLogo from '../assets/icons/gym.jpg'

function BodyPart({item, bodyPart, setBodyPart}) {

  return (
    <Button justifyContent="center" alignContent="center" textAlign='center' 
    style = {{
        borderTop: bodyPart === item ? "3px solid black" : '',
        cursor: "pointer",
        flexDirection:"column",
        textTransform:'capitalize'
    }}
    onClick = {() => setBodyPart(item)}
    >
      <img src = {GymLogo} alt ='gym-logo' style = {{width:'100x', height:"100px"}}></img>
      <Typography style = {{fontSize:"15px", color:"black", marginTop:"10px", fontWeight: "bold"}}>{item}</Typography>
    </Button>
  )
}

export default BodyPart