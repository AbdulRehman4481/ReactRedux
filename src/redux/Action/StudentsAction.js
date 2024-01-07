
import { message } from "antd";
import { firestore } from "config/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";

import {
    ADD_STUDENTS,
    DELETE_STUDENTS,
    FETCH_STUDENTS,
    UPDATE_STUDENTS,
} from "../constants/type";

// ADD students

const addStudents = (data) => async (dispatch, previouState) => {

    try {
        const docRef = doc(collection(firestore, "students"));
        await setDoc(docRef, data);
        // await setDoc(doc(firestore, "students"), data)
        dispatch({
            type: ADD_STUDENTS,
            payload: data
        })
    } catch (error) {
        // console.log("Error While add student in Action", error)
        message.error("Error in Action Add student")
    }
}
// UPDATE students

const updateStudents = (docID, data) => async (dispatch, previouState) => {

    try {
        await setDoc(doc(firestore, "students", docID), data);

        dispatch({
            type: UPDATE_STUDENTS,
            payload: { docID, data },
        });
    } catch (error) {
        // console.log("Error While add student in Action", error)
        message.error("Error in Action Add student")
    }
}

// Fetch students

const getStudents = (setLoading) => async (dispatch, prevState) => {
    try {
        setLoading(true)
        const querySnapshot = await getDocs(collection(firestore, "students"));
        const students = [];
        querySnapshot.forEach((doc) => {
            students.push({
                docID: doc.id,
                ...doc.data(),
            });
        });
        // console.log("students in Action in getStudents", students);
        dispatch({
            type: FETCH_STUDENTS,
            payload: students,
        });
    } catch (error) {
        // console.log("Error While get student in Action", error);
        message.error("Error in Action get student");
    } finally {
        setLoading(false);
        
    }
};

// Delete Students
const deleteStudents = (docID) => async (dispatch, previouState) => {

    try {
        await deleteDoc(doc(firestore, "students", docID));
        console.log("data delete into firebase in action",);

        // await setDoc(docRef, data);
        dispatch({
            type: DELETE_STUDENTS,
            payload: docID
        })
    } catch (error) {
        console.log("Error While Deleteing student in Action", error)
        message.error("Error in Action delete student")
    }
}




export { addStudents, getStudents, deleteStudents, updateStudents }