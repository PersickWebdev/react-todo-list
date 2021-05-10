import axios from 'axios';
import { setAllTasks } from "../redux/actionCreators/tasksActionCreators";

export const fetchTasks = () => async (dispatch) => {
    const result = await axios.get('http://localhost:5000/tasks/');
    dispatch(setAllTasks(result.data));
}