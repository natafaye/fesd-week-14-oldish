import StudentItem from "./StudentItem"

type StudentListProps = {
    students: Array<{ id: number, name: string, roles: Array<string>, goldStar: boolean }>
    deleteStudent: (studentId: number) => void
    goldStarStudent: (studentId: number) => void
}

export default function StudentList({ students, deleteStudent, goldStarStudent }: StudentListProps) {
    return (
        <>
            <h3>Students</h3>
            <ul>
                {students.map(s => (
                    <StudentItem key={s.id} student={s} deleteStudent={deleteStudent} goldStarStudent={goldStarStudent}  />
                ))}
            </ul>
        </>
    )
}