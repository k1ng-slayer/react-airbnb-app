import React from "react";

import phoneimg from "../images/phone-icon.png";
import mailimg from "../images/mail-icon.png";

function Contact(props) {
    return (
        <>
            <div className="contact-card">
                <img src={props.img} alt="cat-img" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phoneimg} alt="phone" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={mailimg} alt="mail" />
                    <p>{props.email}</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
