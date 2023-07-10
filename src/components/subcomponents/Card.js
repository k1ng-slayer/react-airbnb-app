import React from "react";

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.country === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div
            style={{
                fontSize: "12px",
                width: "176px",
                flex: "0 0 auto",
                // for horizntal scrolling of cards
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            {badgeText && (
                <div
                    style={{
                        position: "absolute",
                        top: "6px",
                        left: "6px",
                        backgroundColor: "white",
                        padding: "5px 7px",
                        borderRadius: "2px",
                        fontWeight: "bold",
                    }}
                >
                    {badgeText}
                </div>
            )}
            <img
                src={props.image}
                alt="katie-img"
                style={{
                    height: "235px",
                    width: "100%",
                    borderRadius: "8.95px",
                }}
            />
            <div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/star.png"
                        alt="star"
                        style={{
                            width: "14px",
                            height: "14px",
                            marginRight: "2px",
                        }}
                    />
                    <span>{props.rating}</span>
                    <span>({props.ratingsCount})</span>
                    <span>{props.country}</span>
                </div>
                <p
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {props.description}
                </p>
                <p
                    style={{
                        marginTop: "auto",
                    }}
                >
                    <b>From ${props.price}</b>/person
                </p>
            </div>
        </div>
    );
}

export default Card;
