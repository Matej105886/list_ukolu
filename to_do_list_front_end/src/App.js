
import './App.css';
import ToDoList from "./Components/ToDoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditGoal from "./Components/EditGoal";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route index element={<ToDoList/>}/>
                <Route path="/edit_goal/:goalId" element={<EditGoal/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
