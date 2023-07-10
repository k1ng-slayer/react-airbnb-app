import React from "react";

function HeaderA() {
    return (
        <header>
            <nav
                style={{
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 36px",
                    // backgroundColor: "lightgrey",
                    boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
                }}
            >
                <img
                    src="/airbnb-logo.png"
                    alt="airbnb-logo"
                    style={{
                        maxWidth: "100px",
                    }}
                />
            </nav>
        </header>
    );
}

export default HeaderA;
