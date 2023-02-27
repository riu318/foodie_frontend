import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// used to mange all http request
import axios from "axios";

const SignUp = () => {
  let [name, setName] = useState("");
  let [mobileNo, setMobileNo] = useState("");
  let [email, setEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [confirm_password, setConfirm_password] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, mobileNo, email, password, confirm_password };
    if (name && mobileNo && email && password === confirm_password) {
      axios.post("http://localhost:5000/signup", data).then((res) => {
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("invalid cranditure");
    }
  };

  return (
    <div className="signUp">
      <h1>SignUp Page</h1>
      <div className="signup_form">
        <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mobileNo">
            <input
              type="text"
              name="mobileNo"
              placeholder="Enter your mobile number"
              value={mobileNo}
              onChange={(e)=>setMobileNo(e.target.value)}
              required
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              minLength="6"
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              required
            />
          </div>
          <div className="confirm_password">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm your Password"
              value={confirm_password}
              onChange={(e)=>setConfirm_password(e.target.value)}
              required
            />
          </div>
          <div className="sign_up_btn">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div className="login_btn">
            <p>Already a user?</p>
            <Link to="/" className="btn btn-outline-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
