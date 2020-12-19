const axios = require('axios');

export const login = (cred) => {
    const { username, password } = cred
    return async (dispatch) => {
        dispatch({ type: "REQUEST_SEND" });
        axios.post("https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/user/login",
            {
                username,
                password,
            })
            .then((response) => response.json())
            .then(
                (data) => {
                    dispatch({ type: "GET_USER_SUCCESS", payload: { data }, });
                },
                (error) => { dispatch({ type: "GET_EVENT_REQUEST_FAILED", payload: error }); }
            );


    };
};

export const help = (data) => {
    return async (dispatch) => {
        dispatch({ type: "REQUEST_SEND" });
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/drone/request",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => response.json())
            .then(
                (data) => {
                    dispatch({ type: "GET_HELP_SUCCESS", payload: { data }, });
                },
                (error) => { dispatch({ type: "GET_HELP_REQUEST_FAILED", payload: error }); }
            );


    };
};

export const droneComing = (data) => {
    return async (dispatch) => {
        dispatch({ type: "REQUEST_SEND" });
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/drone/rescue/" +
            data.request_id,
            {
                headers: {
                    Authorization: `Bearer ${data.token}`,
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => response.json())
            .then(
                (data) => {
                    dispatch({ type: "GET_DRONE_COMING_SUCCESS", payload: { data }, });
                },
                (error) => { dispatch({ type: "GET_DRONE_COMING_REQUEST_FAILED", payload: error }); }
            );


    };
};


export const emptyError = () => {
    return async (dispatch) => {
        dispatch({ type: "EMPTY_ERRORS",payload:'' });
    };
};
