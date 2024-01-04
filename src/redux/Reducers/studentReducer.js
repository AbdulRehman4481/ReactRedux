import ADD_STUDENTS from "../constants/type"
let initialState = {
    name: "AbdulRehman",
    batch: "Batch2",
    rollNo: "2333",
    email: "AbdulRehman@gmail.com"
}

function StudentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENTS:
            console.log("Data in Reducer ",action.payload)
            // logic are here
            let newstate = {
                ...state,
                name: "Ali",
                batch: "Batch3",
                rollNo: "2333",
                email: "AbdulRehmanAli@gmail.com",
                newData: action.payload
            }
            return newstate

        default:
            return state
    }
}

export default StudentsReducer;