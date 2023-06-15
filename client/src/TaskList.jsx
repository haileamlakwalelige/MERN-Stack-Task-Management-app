/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


const TaskList = () => {
  const [tasks, setTasks]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result => setTasks(result.data))
    .catch(err => console.log(err))
  },[]);

  const navigate=useNavigate()
  const handleDelete=(id)=>{
    axios.delete("http://localhost:3001/deletetask/"+id)
    .then(res => {
      navigate("/create");
      alert("Data Deleted")
      Window.location.reload(); 
      console.log(res);
      
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="bg-[rgb(0,183,255)] font-serif h-screen">
      <div className="flex flex-col items-center text-center pt-20 px-10 justify-center">
      <div className="bg-white pt-6 pr-10 shadow-lg flex justify-end w-screen">
        <Link to="/create"><button className="bg-green-500 px-4 py-2 font-bold text-white">Add Task</button></Link>
      </div>
        <table className="bg-white shadow-lg flex flex-col justify-between items-between w-screen px-10 pt-10 pb-20">
          <thead className=" px-4 border-black border-b-4">
            <tr className=" border-b-4 md:flex-row flex-col  flex justify-between">
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            tasks.map((task, index)=>(
              <tr key={index} className="py-4 md:flex-row flex-col border-b-4  flex justify-between">
              <td className="flex justify-start">{task.title}</td>
              <td className="flex justify-start">{task.description}</td>
              <td className="flex justify-start">{task.status}</td>
              <td className="flex overflow-hidden justify-between"><Link to={`/update/${task._id}`}><button className="bg-[rgb(0,68,255)] mr-2 md:ml-0 md:mx-4 px-4 py-2 ">Edit</button></Link>
              <button onClick={(e)=>handleDelete(task._id)}
               className="bg-[hsl(357,100%,50%)] md:mx-4 px-4 py-2">Delete</button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TaskList