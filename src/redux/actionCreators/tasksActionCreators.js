import { tasksTypes } from '../actionTypes';

export const setAllTasks = (tasks) => {
    return {
        type: tasksTypes.setAll,
        payload: tasks
    }
}