import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [Attempts, setAttempts] = useState<number>(3);
    const [Request, setRequest] = useState<string>("");

    function addAttempt(): void {
        setAttempts(Number(Request) ? Attempts + Number(Request) : Attempts);
    }
    function subAttempt(): void {
        setAttempts(Attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => {
                    subAttempt();
                }}
                disabled={Attempts <= 0}
            >
                use
            </Button>{" "}
            attempts: {Attempts}
            <Button
                onClick={() => {
                    addAttempt();
                }}
            >
                gain
            </Button>{" "}
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={Request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(event.target.value);
                    }}
                />
            </Form.Group>
        </div>
    );
}
