import React from "react";
import style from './Task.module.css';

const Task = ({task, index, toggleCheck, removeTask, toggleEditMode, updateText, saveText}) => {
    return (
        <div className={style.task__container}>
            <div className={style.task__content}>
                <div className={style.task__checkbox}>
                    <input onChange={() => toggleCheck(task.id)} type="checkbox" checked={task.completed}/>
                </div>
                <div className={style.task__index}>
                    {index + 1}
                </div>
                <div className={style.task__titleBox}>
                    {task.isEdit
                        ? <input className={style.task__input}
                                 value={task.title}
                                 type='text'
                                 onChange={(event) => updateText(event, task.id)}
                                 onBlur={() => saveText(task.id)}/>
                        : <span className={task.completed ? style.task__title + ' ' + style.task__done : style.task__title}>{task.title}</span>}
                </div>
            </div>
            <div>
                <button className={style.task__button_edit} onClick={() => toggleEditMode(task.id)}>Edit</button>
                <button className={style.task__button_close} onClick={() => removeTask(task.id)}>&times;</button>
            </div>
        </div>
    )
}

export default Task;