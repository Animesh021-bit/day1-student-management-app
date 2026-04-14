
import { useState } from "react";
function StudentForm({onAddStudent}){
    const [name, studentName] = useState("");
    const [age, studentAge] = useState("");
    const [course, studentCourse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!name || !age || !course) {
        alert("Please fill in all fields");
        return;
    }

    if (age <18){
        alert("AGe muste be 18 or above");
        return;
    }

    const newStudent = { name, age, course };

    onAddStudent(newStudent);

    studentName("");
    studentAge("");
    studentCourse("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={(e) => studentName(e.target.value)} />
            <input placeholder="Age" type="number" value={age} onChange={(e) => studentAge(e.target.value)} />
            <input placeholder="Course" value={course} onChange={(e) => studentCourse(e.target.value)} />
            <button type="submit">Add Student</button>
        </form>
    )
}

export default StudentForm;