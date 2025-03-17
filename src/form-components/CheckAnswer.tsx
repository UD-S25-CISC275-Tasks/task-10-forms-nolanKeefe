import React, { useState } from "react";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [Answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="textbox"
                onChange={(event) => {
                    setAnswer(event.target.value);
                }}
            />
            <div>{Answer === expectedAnswer ? "✔️" : "❌"}.</div>
        </div>
    );
}
