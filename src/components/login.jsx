import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, SetPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let data={email,password};
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-group px-5">
        <h1>Login Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your name"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              minLength='8' maxLength='12'
            />
          </div>
          <div className="login">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="signup">
            <p>Are you new user?</p>
            <Link to='/signup' className="btn btn-outline-primary">SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
