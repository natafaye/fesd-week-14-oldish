
type StudentItemProps = {
    student: {
        id: number
        name: string
        roles: Array<string>
        goldStar: boolean
    }
    deleteStudent: (studentId: number) => void
    goldStarStudent: (studentId: number) => void
}

export default function StudentItem({ student, deleteStudent, goldStarStudent }: StudentItemProps) {
    return (
        <li>
            { student.goldStar ? "⭐" : ""}
            {student.name}
            {/* {student.roles.map(role => <div>{role}</div>)} */}
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <button onClick={() => goldStarStudent(student.id)}>⭐</button>
        </li>
    )
}