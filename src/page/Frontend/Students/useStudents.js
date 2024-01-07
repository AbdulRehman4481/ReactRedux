import { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { addStudents, deleteStudents, getStudents, updateStudents } from '../../../redux/Action/StudentsAction';
import { useDispatch, useSelector } from 'react-redux';
export const initialStudent = {
    fullName: "",
    batch: "",
    rollNo: "",
    email: ""
}

export default function useStudents() {
    const [students, setStudents] = useState(initialStudent);
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const student = useSelector(state => state.studentReducer.students)

    // console.log("students from studentReducer in useStudents", student);


    useEffect(() => {
        //    action call for fetching students
        // console.log("call the action in custom hook for fetching setudents from firebase");
        dispatch(getStudents(setLoading))
    }, [students])

    const handleChange = e => {
        const { name, value } = e.target;
        setStudents((prevStudents) => ({
            ...prevStudents,
            [name]: value,
        }));
    }
    // ADD student Function
    const handleSubmit = () => {
        try {
            let { fullName, batch, rollNo, email } = students;
            if (fullName !== "" && batch !== "" && rollNo !== "" && email !== "") {
                let student = {
                    fullName,
                    batch,
                    rollNo,
                    email,
                    createdAt: new Date(),
                    id: Math.random().toString(36).slice(2),
                };
                // console.log("student for passing to actions call action to add new data in firebase", student);
                // call action to add new data in firebase
                dispatch(addStudents(student))
            } else {
                throw new Error("Found few of params empty! Params can't be empty.");
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            message.success("student Add Complete")
            setStudents(initialStudent)
        }
    };




        // Delete student Function
    const handleDelete = (docID) => {
        dispatch(deleteStudents(docID))
    }


        // set data in input field student Function

    const setData = (item) => {
        setUpdatedIndex(item.docID);
        setFlag(true);
        setStudents({
            fullName: item.fullName,
            batch: item.batch,
            rollNo: item.rollNo,
            email: item.email
        });
        // console.log("item.docID", item.docID)
        // console.log("item.fullName", item.fullName)
        // console.log("item.batch", item.batch)
    }

    // Edit (Update) student Function
    const handleEdit = () => {
        try {
            let { fullName, batch, rollNo, email } = students;

            if (fullName !== "" && batch !== "" && rollNo !== "" && email !== "") {
                let student = {
                    fullName,
                    batch,
                    rollNo,
                    email,
                    createdAt: new Date(),
                    id: Math.random().toString(36).slice(2),
                };

                // console.log("student for passing to actions call action to add new data in firebase", student);

                // call action to add new data in firebase      
                dispatch(updateStudents(updatedIndex, student, setLoading))

            } else {
                throw new Error("Found few of params empty! Params can't be empty.");
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            message.success("Udate successfully")
            setFlag(false)
            setStudents(initialStudent)

        }
    }

    return { students, students, setData, flag, updatedIndex, student, handleEdit, setStudents, loading, setLoading, handleChange, handleDelete, handleSubmit, form }
}
