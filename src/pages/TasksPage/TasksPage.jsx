import React from 'react';
import styles from './TasksPage.module.scss';

import { TaskAddForm, TaskList } from '../../components';

const TasksPage = () => {
    return (
        <div className={styles['tasks-page']}>
            <div className={styles['container']}>
                <div className={styles['tasks-action-panel']}>
                    <TaskAddForm/>
                </div>
                <TaskList/>
            </div>
        </div>
    );
};

export default TasksPage;