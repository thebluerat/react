import React from "react";

const students = [
    {
        id: 1,
        name: "dog",
    },
    {
        id: 2,
        name: "cat",
    },
    {
        id: 3,
        name: "james",
    },
    {
        id: 4,
        name: "doja",
    },
];

function AttendaceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendaceBook;