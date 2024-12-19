import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form';

function StudentForm() {
    var {handleSubmit,register,formState:{errors},getValues,reset,setValue} = useForm();
    var [students,setStudents] = React.useState([])
    var [x,setX] = useState(null)
    var [updateStudentIndex,setUpdateStudentIndex] = useState(null)
    function onSubmitFn(data){
        setStudents([...students,data])
        reset({})
    }
    function editStudent(std,index){
      console.log(std)
      setX(true)
      setUpdateStudentIndex(index);
      reset(std)
    }
    function updateStudent(){
      var temp = [...students];
      temp[updateStudentIndex]=getValues();
      setStudents([...temp])
      setX(null)
      reset({
        "firstname": "",
        "lastname": "",
        "password": "",
        "pincode": "",
        "gender": "",
        "tech": [
            
        ],
        "country": ""
    });
    }
  return (
    <div className="m-2 border border-2 border-success p-2">
        <h1>StudentForm</h1>
        <form onSubmit={handleSubmit(onSubmitFn)}>
            Enter Your Firstname: <input {...register("firstname")} placeholder='Enter Your Firstname'/>
            <br />
            Enter Your Lastname: <input {...register("lastname")} placeholder='Enter Your Lastname'/>
            <br />
            Enter Password: <input type="password" {...register('password')}  />
            <br />
            Pincode : <input {...register('pincode')}/>
            <br />
            Gender:
            <input type="radio" {...register('gender')} value="f"/>: Female
            <input type="radio" {...register('gender')} value="m"/>: Male
            <input type="radio" {...register('gender')} value="o"/>: Others
            <br />
            Technology:
            <br />
            <input type="checkbox" value="njs" {...register('tech')}/>:NodeJS
            <input type="checkbox" value="ejs" {...register('tech')}/>:ExpressJS
            <input type="checkbox" value="ajs" {...register('tech')}/>:Angular
            <input type="checkbox" value="rjs" {...register('tech')}/>:ReactJS
            <input type="checkbox" value="js" {...register('tech')}/>:Javascript
            <br />
            <select {...register('country')} defaultValue='null'>
              <option value="null" disabled>Please select Country</option>
              <option value="ind">India</option>
              <option value="usa">USA</option>
              <option value="rus">Russia</option>
              <option value="uk">UK</option>
            </select>
            <br />
            {
              x ?? (<button>Add Student</button>)
            }
            {
              x && (<button type="button" onClick={()=>{updateStudent()}}>Update Student</button>)
            }
            
        </form>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Password</th>
              <th>Pincode</th>
              <th>Gender</th>
              <th>Technologies</th>
              <th>Country</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student,i)=>{
                return <tr>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.password}</td>
                        <td>{student.pincode}</td>
                        <td>{student.gender}</td>
                        <td>{student.tech}</td>
                        <td>{student.country}</td>
                        <td>
                          <button onClick={()=>{editStudent(student,i)}}>Edit</button>
                          <button>Delete</button>
                        </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default StudentForm