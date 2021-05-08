import React from 'react';
import styles from './App.module.scss';

import { Header } from './components';
import { TasksPage } from './pages';

const App = () => {
    return (
        <div className={styles['app']}>
            <Header/>
            <div className={styles['app__content']}>
                <TasksPage />
            </div>
        </div>
    );
};

export default App;

// TODO: Complete 'TaskList' component.