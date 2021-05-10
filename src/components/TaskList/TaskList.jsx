import React, {useEffect} from 'react';
import styles from './TaskList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../requests/tasksRequests';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasksReducer);

    // TODO: Take all tasks from tasks object (8).

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    console.log(tasks);

    return (
        <div className={styles['task-list']}>
            TaskList
        </div>
    );
};

export default TaskList;