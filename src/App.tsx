import { useState } from "react"
import ClassDetails from "./ClassDetails"
import StudentList from "./StudentList"

const TEST_STUDENTS = [
  {
    id: 0,
    name: "Jenny",
    roles: ["awesome", "admin"],
    goldStar: false
  },
  {
    id: 1,
    name: "Deion",
    roles: ["admin"],
    goldStar: false
  },
  {
    id: 2,
    name: "Danielle",
    roles: ["moderator"],
    goldStar: false
  }
]

function App() {
  const [students, setStudents] = useState(TEST_STUDENTS)
  // const students = TEST_STUDENTS

  const addGael = () => {
    const newStudent = {
      id: 5,
      name: "Gael",
      roles: [],
      goldStar: false
    }

    // HORRIBLE AND WRONG AND I WILL CRY
    //students.push(newStudent)

    // Fine
    // const copyOfStudents = [...students]
    // copyOfStudents.push(newStudent)
    // setStudents(copyOfStudents)

    setStudents([...students, newStudent])
  }

  const deleteStudent = (idToDelete: number) => {
    setStudents(students.filter(s => s.id !== idToDelete))
  }

  const goldStarStudent = (idToStar: number) => {
    setStudents(students.map(s => (
      s.id !== idToStar ? s : {
        ...s,
        goldStar: true
      }
    )))
   
  }

  return (
    <div>
      <ClassDetails />
      <button onClick={addGael}>Add Gael</button>
      <StudentList students={students} deleteStudent={deleteStudent} goldStarStudent={goldStarStudent} />
    </div>
  )
}

export default App

















// const movies = [
//   {
//     id: 0,
//     title: "soemthing"
//   }
// ]

// const reviews = [
//   {
//     id: 0,
//     rating: 3,
//     movieId: 0
//   }
// ]