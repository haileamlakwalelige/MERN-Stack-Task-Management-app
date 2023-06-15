import {useParams,useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';



const UpdateList = () => {
  const {id}=useParams();
  const [title, setTitle]=useState("")
  const [description, setDescription]=useState("")
  const [status, setStatus] = useState("");
  
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:3001/gettask/"+id)
    .then(result => {
      console.log(result);
      setTitle(result.data.title);
      setDescription(result.data.description);
      setStatus(result.data.status);
    })
    .catch(err => console.log(err))
  },[id]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3001/updatetask/"+id, {title,description,status})
    .then(result => {
      console.log(result);
      navigate("/");
    })
    .catch(err => console.log(err)) 
  }
  const handleOptionChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="bg-[rgb(0,183,255)] font-serif h-screen">
      <div className="flex flex-col items-center justify-center pt-20 md:px-40 sm:px-20 px-10 lg:px-72">
      <div className="bg-white shadow h-96 sm:mx-20 mx-10 w-full md:mx-40 rounded-2xl">
      <h1 className="font-bold p-2 text-3xl">Update Task</h1>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col px-4 py-3">
        <label className="font-bold">Title</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}
         className="pl-2 focus:outline-none outline-none focus:border-none text-lg border-2 py-1 placeholder:pl-3" type="text" placeholder="Enter Your Task"/>
        </div>
        <div className="flex flex-col px-4 py-3">
        <label className="font-bold">Description</label>
        <input value={description} onChange={(e)=>setDescription(e.target.value)}
         className="pl-2 focus:outline-none outline-none focus:border-none text-lg border-2 py-1 placeholder:pl-3" type="text" placeholder="Enter Your Description"/>
        </div>
        <div className="flex flex-col px-4 py-3">
        <label className="font-bold">Status</label>
     <select value={status} onChange={handleOptionChange}>
      <option value="">Select a Status</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
        </div>
        <div className="flex flex-col px-4 py-3">
          <button type="submit" className="font-bold hover:bg-[#cbcb2c] text-white hover:text-black bg-green-500 px-4 py-2">Update</button>
        </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default UpdateList