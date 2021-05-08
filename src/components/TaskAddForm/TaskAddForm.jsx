import React, { useState } from 'react';
import styles from './TaskAddForm.module.scss';
import { Button } from '../../ui';

const TaskAddForm = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ isVisible, setIsVisible ] = useState(false);
    const [ priority, setPriority ] = useState('Priority');

    const updateInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const showDropdown = () => {
        setIsVisible(true);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: Math.round(Math.random() * 10000),
            description: inputValue,
            priority: priority,
            isCompleted: false,
            date: new Date().toLocaleDateString()
        }
        console.log(newTask);
    }

    const selectPriority = (event) => {
        if (!event.target.closest('li')) return;
        setPriority(event.target.innerHTML);
        setIsVisible(false);
    }

    return (
        <div className={styles['task-add-form']}>
            <form
                className={styles['form']}
            >
                <div className={styles['input__field']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name="description"
                        placeholder="Enter new task ..."
                        onChange={updateInputValue}
                    />

                    <div className={styles['select-box']}>
                        <input
                            className={styles['select']}
                            type="text"
                            readOnly
                            name="priority"
                            value={priority}
                            onFocus={showDropdown}
                        />
                        {isVisible &&
                            <ul
                                className={styles['dropdown']}
                                onClick={selectPriority}
                            >
                                <li className={styles['dropdown__item']}>High</li>
                                <li className={styles['dropdown__item']}>Medium</li>
                                <li className={styles['dropdown__item']}>Low</li>
                            </ul>
                        }
                    </div>

                    <Button
                        name="add"
                        value="Add"
                        priority={priority}
                        description={inputValue}
                        action={onSubmit}
                    />
                </div>
            </form>
        </div>
    );
};

export default TaskAddForm;