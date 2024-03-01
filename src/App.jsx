import { useState } from 'react'
import './App.css'
import taskData from '../tasks.json';//data from json file is represented by "taskData"

function App() {
  const [currentInput, setCurrentInput] = useState(''); //currentInput will hold the current value. setCurrent will update the state
  const [tasks, setTasks] = useState(taskData);//tasks variable is now holding info from 'taskData'


  const renderTask = (item) => {
    return `${item.id}, ${item.description}, COMPLETED: ${item.completed ? "Yes" : "No"}`;
  }


  const handleInputChange = (event) => {//triggererd when the user types in the input field
    setCurrentInput(event.target.value);//event=typing, target=input field where it's called, value=what the user types
  };

  const addTask = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior/page refresh
    const newTask = {
      id: tasks.length + 1,
      description: currentInput,
      completed: false
    }//false makes sure 'completed' is initially set to 'no'
    setTasks([...tasks, newTask]); //makes an array with all current values then add the current input to the array
    setCurrentInput(''); // Clear the input field after adding the item
  };


  const changeStatus = (id) => {
    setTasks(tasks.map(item => {//iterate over the array of tasks
      if (item.id === id) {//while iterating, check if the id matches the id of the clicked item
        return { ...item, completed: !item.completed };//if it matches return a new object with the "completed" changed to the opposite
      }
      return item;//if it doesnt match return the original task
    }));
  };

  return (
    <>

      <h1>To Do List</h1>
      <div id='listContainer'>

        <form>
          <input id='newTask'
            name='task'
            type='text'
            value={currentInput}
            onChange={handleInputChange//calls the function and makes .target reference here
            }></input>
          <button type='submit' onClick={addTask} > Add Task </button>
        </form>

        <ul id='listOfStuff' name='stuff'>
          {tasks.map((item) => (//go through the array of tasks and perform the following function 
            //to make them into list items
            // li represents each task. when clicked calls changeStatus with the id as a reference
            //key is needed for react to keep track of list items by id
            <li onClick={() => changeStatus(item.id)} key={item.id}>
              {renderTask(item)}
            </li>
          ))}


        </ul>
      </div>
      <p>
        Don't click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>here</a>
      </p>
    </>
  )
}

export default App




//to do- handle empty input field, add delete button, add delete functionality