import { ADD_STUDENTS, DELETE_STUDENTS, FETCH_STUDENTS } from "../constants/type"
let initialState = {
    error: '',
    students: [],
};

function StudentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENTS:
            let newStudent = state.students
            newStudent.push(action.payload)
            // console.log("newStudent in reducer", newStudent)
            return {
                ...state,
                students: newStudent
            }

        case FETCH_STUDENTS:
            // console.log("Data Fetching in Reducer", action.payload)
            return {
                ...state,
                students: action.payload
            }
        case DELETE_STUDENTS:
            let deletedStudent = state.students.filter((item) => item.docID !== action.payload);
            return {
                ...state,
                students: deletedStudent
            }


        default:
            return state
    }
}

export default StudentsReducer;