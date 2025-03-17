import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "grey",
        "magenta",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((c) => (
                    <label
                        key={c}
                        style={{ marginRight: "10px", cursor: "pointer" }}
                    >
                        <input
                            type="radio"
                            name="colors"
                            value={c}
                            checked={color === c}
                            onChange={() => {
                                setColor(c);
                            }}
                            style={{ marginRight: "5px" }}
                        />
                        {c}
                    </label>
                ))}
            </div>
            <p>You have chosen:</p>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    color: "white",
                    display: "inline-block",
                    borderRadius: "5px",
                    fontWeight: "bold",
                }}
            >
                {color}
            </div>
        </div>
    );
}
