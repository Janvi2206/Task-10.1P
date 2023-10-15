import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-form">
      <h2 className="form-heading">Sign up for the daily insider</h2>
      <form id="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
