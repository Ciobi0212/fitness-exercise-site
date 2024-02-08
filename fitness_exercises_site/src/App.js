import './App.css';
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer'

function App() {
  return (
     <div>
      
      <Navbar/>
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route path = '/exercise/:id' element = {<ExerciseDetails />}/>
      </Routes>
      <Footer/>
  
     </div>
  );
}

export default App;
