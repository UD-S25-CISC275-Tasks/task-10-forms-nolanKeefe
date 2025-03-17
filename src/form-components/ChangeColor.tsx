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
                        style={{
                            marginRight: "10px",
                            cursor: "pointer",
                            backgroundColor: c,
                        }}
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
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
