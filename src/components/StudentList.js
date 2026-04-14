
function StudentList({ students }) {
  const filteredStudents = students.filter((s) => s.age > 18);

  return (
    <div>
      <h2>Student List</h2>
      {filteredStudents.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;