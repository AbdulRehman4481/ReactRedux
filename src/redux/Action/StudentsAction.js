const ADD_STUDENTS = "redux/constants/type"

// Action will recive data from component and pass to Reducer
export const addStudents = (data) => {
    console.log("Data in Action", data)
    return {
        type: ADD_STUDENTS,
        payload: data
    }
}