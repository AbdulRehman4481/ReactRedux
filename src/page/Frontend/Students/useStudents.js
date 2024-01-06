import { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { addStudents, deleteStudents, getStudents } from '../../../redux/Action/StudentsAction';
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
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const student = useSelector(state => state.studentReducer.students)
    // console.log("students from studentReducer in useStudents", student);


    useEffect(() => {
        //    action call for fetching students
        // console.log("call the action in custom hook for fetching setudents from firebase");
        dispatch(getStudents(setLoading))
    }, [students])
    const handleChange = e => setStudents(s => ({ ...s, [e.target.name]: e.target.value }))
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
                dispatch(addStudents(student)).then(() => {

                    form.resetFields();
                });
            } else {
                throw new Error("Found few of params empty! Params can't be empty.");
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    const handleDelete = (docID) => {
        dispatch(deleteStudents(docID))
    }
    // const handleEdit = () => {

    // }

    return { students, student, setStudents, loading, setLoading, handleChange, handleDelete, handleSubmit, form }
}
