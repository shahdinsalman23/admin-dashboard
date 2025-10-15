import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };



  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col lg={6} className="mx-auto">
            <div className="shahdin-login-form">
              <div className="login-pg-head">
                <h2>Login Form</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg={12}>
                    <div className="google-login-btn">
                      <button onClick={handleGoogleLogin}><img src="/src/assets/google-icon.png" width={20} height={20} alt="googleicon" /> Sign in with Google</button>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="login-btn">
                      <button type="submit">Login</button>
                    </div>
                  </Col>
                </Row>
              </form>
              <div className="forgot-password-btn"><Link to="/forgot-password">Forgot Password?</Link></div>
              <div className="signup-page-btn"><span>Don't have an account?</span>  <Link to="/signup">Signup</Link></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
