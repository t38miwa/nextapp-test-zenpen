"use client";

import { useState } from "react";

const RegistrationForm = ({ eventId }) => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/participate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ eventId, name, contact }),
            });

            const jsonData = await response.json();
            alert(jsonData.message);
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div className="registration-form">
            <h3>参加登録</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">名前:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">連絡先:</label>
                    <input type="text" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                </div>
                <button type="submit" className="register-button">イベントに参加する</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
