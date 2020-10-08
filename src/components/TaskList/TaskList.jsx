import React from "react";
import style from './TaskList.module.css';
import Task from "./Task/Task";

const TaskList = ({tasks, toggleCheck, removeTask, toggleEditMode, updateText, saveText}) => {
    let tasksElements = tasks.map((task, index) => {
        return (
            <Task key={task.id}
                  index={index}
                  task={task}
                  toggleCheck={toggleCheck}
                  removeTask={removeTask}
                  toggleEditMode={toggleEditMode}
                  updateText={updateText}
                  saveText={saveText}/>
        )
    });

    return (
        <div className={style.taskList__container}>
            {tasksElements}
        </div>
    )
}

export default TaskList;