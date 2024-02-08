import React from 'react'
import {Box, Stack} from '@mui/material'
import BodyPart from '../componenets/BodyPart'



function HorizontalScrollBar({exercises, setExercises, data, bodyPart, setBodyPart}) {
    console.log(bodyPart);
  return (
   
    <Stack direction='row' justifyContent='space-evenly' alignItems='center'>
    {data.map((item) => {
        return <Box
        key = {item.id || item}
        itemId = {item.id || item}
        title = {item.id || item}
        m = '30px 12px'
        >
         <BodyPart item = {item} bodyPart = {bodyPart} setBodyPart = {setBodyPart} ></BodyPart>
        </Box>
    })}
    </Stack>
    
  )
}

export default HorizontalScrollBar