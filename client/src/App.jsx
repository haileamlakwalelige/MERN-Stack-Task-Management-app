import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList.jsx";
import CreateList from "./CreateList.jsx";
import UpdateList from "./UpdateList.jsx";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} ></Route>
          <Route path="/create" element={<CreateList />} ></Route>
          <Route path="/update/:id" element={<UpdateList />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}