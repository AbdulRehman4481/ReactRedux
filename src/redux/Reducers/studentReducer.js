import { ADD_STUDENTS, DELETE_STUDENTS, FETCH_STUDENTS, UPDATE_STUDENTS } from "../constants/type"
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
        case UPDATE_STUDENTS:
            console.log("data in reducer from action", action.payload);
            // work  / logic will be here
            let updatedStudents = state.students.map((item) => {
                if (action.payload.docID === item.docID) {
                    return { ...action.payload.data, ...action.payload.docID }
                }
                else {
                    return item
                }
            })
            return {
                ...state,
                students: updatedStudents
            };



        default:
            return state
    }
}

export default StudentsReducer;