import React, { useEffect } from 'react'
import { Button, Col, Form, Input, Row, Space, Tooltip } from 'antd'
import useStudents from './useStudents'
import { DeleteOutlined, EditOutlined, UserOutlined } from "@ant-design/icons"



export default function Students() {

  const { student, loading, handleChange, handleSubmit, form, handleDelete } = useStudents()
  // console.log("student", student)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col py-3">
            <Form onFinish={handleSubmit} form={form} style={{ border: "1px solid black", borderRadius: "10px", padding: "30px 30px", margin: "10px 10px" }}>
              <Row>
                <Col span={8} offset={10} >
                  <h1 > Add Students</h1>
                </Col>
              </Row>
              <Row gutter={40} >
                <Col span={12}>
                  <Form.Item>
                    <Input type='text' placeholder='Name' name='fullName' onChange={handleChange} className="form-control" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input type='text' placeholder='Batch' name='batch' onChange={handleChange} className="form-control" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={40} >
                <Col span={12}>
                  <Form.Item>
                    <Input type='number' placeholder='Roll No:' name='rollNo' onChange={handleChange} className="form-control" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item>
                    <Input type='email' placeholder='Email' name='email' onChange={handleChange} className="form-control" />
                  </Form.Item>
                </Col>
              </Row>
              <Row className=' text-center'>
                <Col span={24}>
                  <button onClick={handleSubmit} style={{
                    border: "1px solid blue",
                    borderRadius: "10px",
                    padding: "8px",
                    color: "white",
                    backgroundColor: "blue",

                  }}>
                    ADD STUDENTS
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th >#</th>
                  <th >Name</th>
                  <th >Batch</th>
                  <th >Roll No </th>
                  <th >Email </th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {
                    student ?
                      <>
                        {student.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.fullName}</td>
                              <td>{item.batch}</td>
                              <td>{item.rollNo}</td>
                              <td>{item.email}</td>
                              <td>
                                <Space>
                                  <Tooltip title="Delete" color='red'><Button onClick={() => { handleDelete(item.docID) }} danger icon={<DeleteOutlined />} /></Tooltip>
                                  <Tooltip title="Edit"><Button type="primary" icon={<EditOutlined />} /></Tooltip>
                                </Space>
                                {/* onClick={() => { navigate(`/dashboard/todos/${todo.id}`) }} */}
                                {/* onClick={() => { handleDelete(todo) }}  */}
                              </td>
                            </tr>
                          )
                        })}
                        {loading && (
                          <tr>
                            <td colSpan="5">Loading....</td>
                          </tr>
                        )}
                      </>
                      :
                      <tr>
                        <td>
                          No Student
                        </td>
                      </tr>
                  }


                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
