import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addStudents } from "../../../redux/Action/StudentsAction"

export default function Students() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  console.log("store", store)

  const ctaHendler = () => {
    let passToStore = {
      name: "Shar Ali",
      batch: "Batch9",
      rollNo: "222",
      email: "SharAli@gmail.com"
    }
    console.log("Data in react Component", passToStore)
    dispatch(addStudents(passToStore))
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className='text-center py-4'>Students List</h1>
            <button onClick={ctaHendler}>
              Update It
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Batch</th>
                  <th>Roll No</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th >1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}
