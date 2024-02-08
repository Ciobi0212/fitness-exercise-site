import React, {useState, useEffect} from 'react'
import Banner from '../componenets/Banner'
import SearchExercises from '../componenets/SearchExercises'
import Exercises from '../componenets/Exercises'
import {fetchData, exercisesOptions} from '../utils/fetchData'

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [exercisesData, setExerciseData] = useState([]);

  useEffect(() => { 
     const getExercisesData = async () => {const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
     setExerciseData(data);
     setExercises(data);
    
  };
    getExercisesData();
    console.log(exercisesData);
}
, []);

  
  console.log(bodyPart);
  return (
    <div>
    <Banner/>
    <SearchExercises exercisesData = {exercisesData} exercises = {exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises exercisesData = {exercisesData} exercises = {exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </div>
  )
}

export default Home