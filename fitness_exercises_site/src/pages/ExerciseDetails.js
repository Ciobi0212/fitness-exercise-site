import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {fetchData, exercisesOptions, videosOptions} from '../utils/fetchData'
import ExerciseInformation from '../componenets/ExerciseInformation'
import ExercisesVideos from '../componenets/ExercisesVideo'

function ExerciseDetails() {
  const {id} = useParams();
  const [exerciseData, setExerciseData] = useState({});
const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    const getExerciseDataAndVideo = async () => {
      const fetchedExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exercisesOptions);
      setExerciseData(fetchedExerciseData);

      const youtubeUrl =`https://youtube-search-and-download.p.rapidapi.com/search?query=${fetchedExerciseData.name}`;
      const fetchedVideosData = await fetchData(youtubeUrl, videosOptions)
      setVideos(fetchedVideosData.contents)
    }
    getExerciseDataAndVideo();
  },[id]);

  console.log(exerciseData);
  return (
    <>
    <ExerciseInformation exerciseData = {exerciseData} ></ExerciseInformation>
    <ExercisesVideos videos = {videos}></ExercisesVideos>
    </>
  )
};

export default ExerciseDetails;