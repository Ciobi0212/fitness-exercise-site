import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


function Navbar() {
  return (
    <div>
      <Stack direction= 'row' spacing = {2} alignItems="center" style = {{borderBottom: "3px double black"}}>
      <Link to = '/'><img src = {Logo} style = {{width: "100px", height: "75px"}}/></Link>
      <Link to = '/' style = {{textDecoration: "none", fontSize: "25px", color: "black"}}>Home</Link>
      <a href = "#exercises" style = {{textDecoration: "none", fontSize: "25px", color: "black"}}>Exercises</a>
      <Typography pl = "550px"  fontSize={30} fontWeight={600}>Fitness Center</Typography>
      </Stack>
    </div>
  )
};

export default Navbar;