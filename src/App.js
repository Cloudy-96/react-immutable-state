import { useState } from "react"
import { initialWorkouts, generateWorkout } from "./Workouts.js"
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
    // console.log("all the workouts:", initialWorkouts)

  }

  const deleteWorkout = (workout) => {
    //Implement the `deleteWorkout` function to remove the 
    //`workout` from the `workouts` state in an immutable way.

    console.log("Requesting deletion of workout", workout);

    //1 select the workout to delete
    //- will do it by index bec there is no id given

    const deletedWorkoutArray = workouts.filter((deleted) => {
      //keep tasks not at "workout[i]"
      return deleted !== workout
    })

    //update array setWorkouts
    setWorkouts(deletedWorkoutArray)

    console.log("deleteWorkout:", workouts)
  }

  const completeWorkout = (workout) => {
    //## Extension
    // Add a checkbox with the label "Show Done Only"
    // to allow the user to toggle between all workouts and only
    // workouts that are done.
    console.log("completeWorkout:", workout)

    //map for new list
    const updatedWorkouts = workouts.map((updatedStatus) => {
      if (updatedStatus === workout) {
        return { ...updatedStatus, done: !updatedStatus.done }
      }
      return updatedStatus
      // if (updatedStatus === workout) {
      //   const updatedWorkout = { ...workout }
      //   updatedWorkout.done = !workout.done
      //   return updatedWorkout;
      // } else {
      //   return updatedStatus;
      // }
    });

    setWorkouts(updatedWorkouts)
    // 
  };



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
              <button onClick={e => completeWorkout(workout)}>Done</button>}
            {workout.done &&
              <p>✅</p>}
            <button onClick={e => deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
