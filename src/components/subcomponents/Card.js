import React from "react";
import katie from "../images/katie-zaferes.png";

function Card() {
    return (
        <div className="card" style={{ fontSize: "12px", width: "176px" }}>
            <img
                src={katie}
                alt="katie-img"
                style={{
                    height: "235px",
                    width: "100%",
                    borderRadius: "8.95px",
                }}
            />
            <div className="details">
                <div
                    className="stats"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <img
                        src="/star.png"
                        alt="star"
                        className="star"
                        style={{
                            width: "14px",
                            height: "14px",
                            marginRight: "2px",
                        }}
                    />
                    <span className="ratings">5.0 </span>
                    <span className="ratings-count">(6) </span>
                    <span className="country">USA</span>
                </div>
                <p className="description">Life lessons with Katie Zaferes</p>
                <p className="price">
                    <b>From $136</b>/person
                </p>
            </div>
        </div>
    );
}

export default Card;
