import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [EditMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [UserName, setUserName] = useState<string>("Your Name");
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                checked={EditMode}
                onChange={updateEditMode}
            />
            {EditMode ?
                <Form.Check
                    type="checkbox"
                    id="student-status"
                    label="Student"
                    checked={isStudent}
                    onChange={updateIsStudent}
                    disabled={!EditMode}
                />
            :   ""}
            {EditMode ?
                <input
                    type="textbox"
                    disabled={!EditMode}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
            :   ""}
            {UserName} is {isStudent ? "a Student" : "not a Student"}
        </div>
    );
}
