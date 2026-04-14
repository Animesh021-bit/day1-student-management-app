import './App.css';
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const registerLearner = async (student) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    setStudents((prev) => [...prev, student]); 
  };

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <button onClick={handleClick}>
        Click Count: {clickCount}
      </button>

      <StudentForm onAddStudent={registerLearner} />
      <StudentList students={students} />
    </div>
  );
}

export default App;