import {useState, useEffect} from 'react'
import {Stack, TextField, Typography, Button} from '@mui/material'
import {fetchData, exercisesOptions} from '../utils/fetchData'
import HorizontalScrollBar from '../componenets/HorizontalScrollBar'


function SearchExercises({exercisesData, exercises, setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  console.log(bodyPart);
  useEffect(() => {
   const fetchBodyParts = async () => {
   const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
   setBodyParts(['all', ...bodyPartsData]);
    }

    fetchBodyParts();
  },[])

  useEffect(() => {
    if(bodyPart !== 'all')
    setExercises(exercisesData.filter((exercise) => exercise.bodyPart === bodyPart))
  }, [bodyPart])

  const handleSearch = () => {
    if(search){
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search));

      setExercises(searchedExercises);
      setSearch('');
      
    }
  }
  return (
    <Stack direction='column' justifyContent='center' alignItems='center' mt ={25}>
    <Typography color='black' textAlign='center' fontSize = {50} fontWeight={600}>What do you want <br/> to learn</Typography>
    <Stack direction = "row" justifyContent='center' alignItems='center' mt = {4}>
    <TextField value = {search} onChange = {(e) => {setSearch(e.target.value.toLowerCase())}}style = {{backgroundColor:"aliceblue", color:"aliceblue", width:"500px"}}>Type here</TextField>
    <Button onClick={handleSearch} variant='outlined' href = '#exercises' style = {{height:"56px",backgroundColor:"aliceblue", border:"3px solid black", color:"black", fontWeight:"bold", fontSize:"25px"}}>Search</Button>
    </Stack>
    <HorizontalScrollBar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Stack>
  )
}

export default SearchExercises