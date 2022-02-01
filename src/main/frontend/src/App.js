import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { DisplayBoard } from './components/DisplayBoard'
import CreateTask from './components/CreateTask'
import { getAllTasks, createTask } from './services/TaskService'

function App() {

  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])
  const [numberOfTasks, setNumberOfTasks] = useState(0)


  const taskCreate = (e) => {

      createTask(task)
        .then(response => {
          console.log(response);
          setNumberOfTasks(numberOfTasks+1)
      });
  }

  const fetchAllTasks = () => {
    getAllTasks()
      .then(tasks => {
        console.log(tasks)
        setTasks(tasks);
        setNumberOfTasks(tasks.length)
      });
  }

  useEffect(() => {
    getAllTasks()
      .then(tasks => {
        console.log(tasks)
        setTasks(tasks);
        setNumberOfTasks(tasks.length)
      });
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'taskname') {
          task.name = e.target.value;
      } else if (e.target.name === 'taskdescription') {
          task.description = e.target.value;
      }
      setTask(task)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateTask 
                    task={task}
                    onChangeForm={onChangeForm}
                    createTask={taskCreate}
                    >
                  </CreateTask>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfTasks={numberOfTasks}
                    getAllTasks={fetchAllTasks}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Tasks tasks={tasks}></Tasks>
          </div>
        </div>
    );
}

export default App;
