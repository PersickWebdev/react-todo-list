import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import TaskList from "./components/TaskList/TaskList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

const App = (props) => {
    let [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(tasks => {
                setTasks(tasks.map(task => {
                    return {
                        id: task.id,
                        title: task.title,
                        completed: task.completed,
                        isEdit: false
                    }
                }))
            })
    }, []);

    const toggleCheck = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        }))
        console.log(tasks)
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleEditMode = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.isEdit = !task.isEdit;
            }
            return task;
        }))
    }

    const updateText = (event, id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.title = event.target.value;
            }
            return task;
        }))
    }

    const saveText = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.isEdit = false;
            }
            return task;
        }))
    }

    const addTask = (title) => {
        setTasks(tasks.concat([{
            id: Date.now(),
            title,
            completed: false
        }]))
    }

    return (
        <div className={style.app__container}>
            <h1 className={style.app__heading}>Task Manager</h1>
            <AddTaskForm onCreate={addTask}/>
            <TaskList tasks={tasks}
                      toggleCheck={toggleCheck}
                      removeTask={removeTask}
                      toggleEditMode={toggleEditMode}
                      updateText={updateText}
                      saveText={saveText}/>
        </div>
    );
}

export default App;
