import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material' 
import {fetchData, videosOptions} from '../utils/fetchData'
import ReactPlayer from 'react-player/youtube'

function ExercisesVideos({videos, exerciseData}) {
 
  console.log("videos: ---------------------------", videos)
  console.log(exerciseData)
  
  return (
    <Box className = 'exercise-videos'>
     <Typography variant='h4' m = '20px'>Tutorials on how to perform this exercise:</Typography>
     <Stack direction= 'row' spacing={5}>
      {
      videos?.slice(0,3).map((video,index) => <ReactPlayer url = {`https://www.youtube.com/watch?v=${video.video.videoId} exercise`}></ReactPlayer>)
      }
     </Stack>
    </Box>
  )
}

export default ExercisesVideos