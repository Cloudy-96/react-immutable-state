import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"

function App() {
  //workouts = list of existing workouts
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = (event) => {
    // Implement the `addNewWorkout` function to add the 
    // `newWorkout` object to the `workouts` state in an 
    // immutable way.

    event.preventDefault();

    //get the new workout
    const newWorkout = generateWorkout()

    //add new workout to workouts array (line 6)
    //spread operator

    setWorkouts([...workouts, newWorkout]);

    console.log("addNewWorkout:", newWorkout)
  }

  const deleteWorkout = (workout) => {
    console.log("deleteWorkout:", workout)
  }

  const completeWorkout = (workout) => {
    console.log("completeWorkout:", workout)
  }



  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            {!workout.done && 
              <button onClick={e=>completeWorkout(workout)}>Done</button>}
            {workout.done && 
             <p>✅</p>}
            <button onClick={e=>deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default App
