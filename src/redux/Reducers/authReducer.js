let initialState = {
    isAuth: true,
    user: {
        name: "AbdulRehman",
        email: "AbdulRehmn@gmail.com"
    }

}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_LOGEDIN":
            // logic are here
            let newstate = {
                ...state,
                isAuth: true,
                newData: action.payload
            }
            return newstate

        default:
            return state
    }
}

export default authReducer;