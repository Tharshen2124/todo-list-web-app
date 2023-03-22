import './App.css';
import { useState } from "react"
import Task from "./Task"

export default function App() {
    
    //initalised an empty array
    const [todoList, setTodoList] = useState([]);
    // used to take the input value
    const [newTask, setNewTask] = useState("");
    

    const handleChange = (e) => {
      setNewTask(e.target.value);
    }

    const addTask = () => {
      // cant use .push cause returns new array and old array still remains
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        completed: false,
      }  
      setTodoList([...todoList, task]);
    }

    const deleteTask = (id) => {
              //if not equals, returns true but if equals, returns false
      setTodoList(todoList.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {
      setTodoList(
        todoList.map((task) => {
          if(task.id === id) {
            return {...task, completed: true};
          } else {
            return task;
          }
        })
      );
    };

    return (
      <div className="App"> 
        <div className="addTask">
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list"> 
          {todoList.map((task) => {
            return (
              <Task 
                taskName={task.taskName} 
                id={task.id} 
                completeTask={completeTask}
                completed = {task.completed}
                deleteTask={deleteTask}
              />);
          })}
        </div>
      </div> 
    );
}



