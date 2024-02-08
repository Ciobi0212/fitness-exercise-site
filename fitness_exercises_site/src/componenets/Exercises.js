import React, {useState} from 'react'
import {Box, Stack, Typography} from "@mui/material"
import ExerciseCard from './ExerciseCard'
import Pagination from '@mui/material/Pagination'

function Exercises({exercises, setExercises, bodyPart}) {
  const exercisesPerPage = 9;
  const [curentPage, setCurentPage] = useState(1);
  const firstExerciseOnPage = exercisesPerPage * curentPage - 9;
  const lastExerciseOnPage = firstExerciseOnPage + 8;

  console.log(exercises);
  
  const Paginate = (e, value) => {
   setCurentPage(value);
   window.scrollTo({top: 1200, behavior:"smooth"});
  }
  return (
    <Box id = "exercises">
     <Typography variant='h3' color="black" ml="20px" m = "20px">Search Results</Typography>
     <Stack direction='row' useFlexGap justifyContent='center' flexWrap='wrap' gap = '100px'>
     {
      exercises.slice(firstExerciseOnPage, lastExerciseOnPage).map((exercise, index) => {
        return <ExerciseCard key = {index} exercise = {exercise}/>
      })
     }
     </Stack>
     <Stack direction='row' justifyContent = "center" alignContent="center" mt = "100px">
      <Pagination
       shape = "rounded"
       defaultPage={1}
       count = {Math.ceil(exercises.length / exercisesPerPage)}
       page = {curentPage}
       onChange = {Paginate}
       size = "large"
       >
      
      </Pagination>
     </Stack>
    </Box>
  )
}

export default Exercises