import React from "react";

function HeroA() {
    return (
        <body
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "22px",
            }}
        >
            <img
                src="/photo-grid.png"
                alt="pic-grid"
                style={{
                    maxWidth: "800px",
                    width: "100%",
                    height: "auto",
                    padding: "0px 70px",
                }}
            />
            <div
                style={{
                    padding: "32px 0px",
                }}
            >
                <h2>Online Experiences</h2>
                <p
                    style={{
                        padding: "10px 0px",
                    }}
                >
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </body>
    );
}

export default HeroA;
