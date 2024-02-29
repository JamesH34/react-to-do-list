import { useState} from 'react'
import './App.css'
import taskData from '../tasks.json';

function App() {
  const [items, setItems] = useState([]);//sets items as an empty array
  const [currentInput, setCurrentInput] = useState(''); //currentInput will hold the current value. setCurrent will hold updated state
  const [selectedTask, setSelectedTask] = useState([]);//tracking the checkbox as an array
  const [tasks, setTasks] = useState(taskData)


  const renderTask = (task) => {
    return `${task.id}, ${task.description}, COMPLETED: ${task.completed ? "Yes" : "No"}`;
  }
  
  
  const handleInputChange = (event) => {//triggererd when the user types in the input field
    setCurrentInput(event.target.value);//event=typing, target=input field where it's called, value=what the user types
  };

  const addTask = () => {
    //handle empty inputs
    // event.preventDefault(); // Prevent the default form submission behavior
    const newTask = {id: tasks.length + 1, 
    description: currentInput,
    completed: false}
    setTasks([...tasks, newTask]); //makes an array with all current values then add the current input to the array
    setCurrentInput(''); // Clear the input field after adding the item
  };


  // const toggleTaskSelection = (index) => {
  //   const currentIndex = selectedTask.indexOf(index);//get index of selected task
  //   let newSelectedTask = [...selectedTask];//make a copy of selectedTask array to modify
    
  //   if (currentIndex === -1) {//check if the current index is in the array and adds it if it isnt
  //     newSelectedTask.push(index);
  //   } else {
  //     newSelectedTask.splice(currentIndex, 1);//if item was selected, use splice to remove it
  //   }
  //   setSelectedTask(newSelectedTask);//update the selected tasks to the new array.
  // };

  return (
    <>
   
      <h1>To Do List</h1>
      <div className="card">
        <form>
        <input id='newTask' 
        name='task' 
        type='text' 
        value={currentInput}
        onChange={handleInputChange//calls the function and makes .target reference here
        }></input>
        <button type = 'button' onClick={addTask} > Add Task </button>
        <ul id='listOfStuff' name='stuff'>
          {tasks.map((task, index) => <li key = {index}>{renderTask(task)}</li>)}

         
        </ul>
        </form>
      </div>
      <p className="read-the-docs">
        Don't click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>here</a>
      </p>
    </>
  )
}

export default App
