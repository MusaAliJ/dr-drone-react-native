const iState = {
    user: [],
    error: '',
    help:[],
    droneComing:[]
};

const reducer = (state = iState, action) => {

    if (action.type === 'REQUEST_SEND') {
        console.log('REQUEST SEND');
        return {
            ...state,
        }
    } else if (action.type === 'GET_EVENT_REQUEST_FAILED') {
        console.log('GET_EVENT_REQUEST_FAILED');
        return {
            ...state,
            error: action.payload
        }
    } else if (action.type === 'GET_USER_SUCCESS') {
        return {
            ...state,
            user: action.payload
        }
    }else if (action.type === 'GET_HELP_REQUEST_FAILED') {
        console.log('GET_HELP_REQUEST_FAILED');
        return {
            ...state,
            error: action.payload
        }
    } else if (action.type === 'GET_HELP_SUCCESS') {
        return {
            ...state,
            help: action.payload
        }
    }else if (action.type === 'EMPTY_ERRORS') {
        return {
            ...state,
            error: action.payload
        }
    }else if (action.type === 'GET_DRONE_COMING_REQUEST_FAILED') {
        console.log('GET_DRONE_COMING_REQUEST_FAILED');
        return {
            ...state,
            error: action.payload
        }
    } else if (action.type === 'GET_DRONE_COMING_SUCCESS') {
        return {
            ...state,
            droneComing: action.payload
        }
    }

    return state;
}


export default reducer; 