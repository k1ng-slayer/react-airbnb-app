import React from "react";

function Contact(props) {
    return (
        <>
            <div className="contact-card">
                <img src={props.img} alt="cat-img" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="phone-icon.png" alt="phone" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="mail-icon.png" alt="mail" />
                    <p>{props.email}</p>
                </div>
            </div>
        </>
    );
}

export default Contact;
