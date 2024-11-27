import React, { useState } from 'react'

export default function TaskList(props) {
    const [records, setRecords] = useState([
        { id: 1, name: "data" }, { id: 2, name: "data1" }, { id: 3, name: "data2" }
    ])
    const [show, setShowRecords] = useState(true);
    return (
        <div>
            <button onClick={() => setShowRecords(!show)}>show</button>
            <p>Record List {props.title}</p>
            <ul>
                {show &&
                    records.map((record) => (
                        <li className={records.completed ? "completed" : "notcompleted"}>{record.id},{record.name} </li>
                    ))
                }
            </ul>
        </div>
    )
}
