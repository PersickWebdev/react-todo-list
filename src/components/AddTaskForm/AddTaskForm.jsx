import React, {useState} from "react";
import style from './AddTaskForm.module.css';

const AddTaskForm = ({onCreate}) => {
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim()) {
            onCreate(value);
        }
        setValue('');
    }

    return (
        <form className={style.addTaskForm__form} onSubmit={onSubmit}>
            <input value={value}
                   onChange={(event) => setValue(event.target.value)}
                   onBlur={() => onCreate}/>
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default AddTaskForm;