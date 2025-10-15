import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Col, Container, Row } from "react-bootstrap";

const Signup = () => {
  const { signup, loginWithGoogle } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (

<>
    <div className="login-page">
      <Container>
        <Row>
          <Col lg={6} className="mx-auto">
            <div className="shahdin-login-form">
              <div className="login-pg-head">
                <h2>Signup Form</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12}>
                    <div className="google-login-btn">
                      <button onClick={handleGoogleSignup}><img src="/src/assets/google-icon.png" width={20} height={20} alt="googleicon" /> Sign in with Google</button>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="firstname">First Name</label>
                      <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                    </div>
                  </Col>
                   <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="lastname">Last Name</label>
                       <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="login-btn">
                      <button type="submit">Signup</button>
                    </div>
                  </Col>
                </Row>
              </form>
              <div className="forgot-password-btn"><Link to="/forgot-password">Forgot Password?</Link></div>
              <div className="signup-page-btn"><span>Already have an account?</span>  <Link to="/login">Login</Link></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    </>
  );
};

export default Signup;
