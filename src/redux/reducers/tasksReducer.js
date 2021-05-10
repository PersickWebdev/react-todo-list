import { tasksTypes } from '../actionTypes';

const initialState = {
    tasks: {}
}

const tasksReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case tasksTypes.setAll:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }
}

export default tasksReducer;