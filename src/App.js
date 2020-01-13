import React, {useState} from 'react';
import './App.css';
import GoalList from './Components/goalList';
import NewGoal from './Components/newGoal';
const App = () =>{
  
  const [courseGoals,setCourseGoals]=useState([
    {id: '1', text:'Finish the course'},
    {id: '2', text:'Learn all about the course'},
    {id: '3', text:'Help other students in the course'},
  ]);

  const addNewGoalHandler = (goal)=>{
    setCourseGoals((prevData)=>{
     return prevData.concat(goal)
    });
    
    console.log(courseGoals)
  }
  return(
    <div className="course-goal">
    <h1>Course Goals</h1>
   <NewGoal onAddGoal ={addNewGoalHandler}/>
   <GoalList goals={courseGoals}/>
   </div>
  );
};

export default App;
