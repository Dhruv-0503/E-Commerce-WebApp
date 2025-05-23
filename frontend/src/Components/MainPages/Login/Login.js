import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/user/login', { ...user })

      localStorage.setItem('firstLogin', true);
      window.location.href = "/"
    }
    catch (err) {
      alert(err.response.data.msg);
    }
  }

  return (
    <div className="login_box" style={{backgroundImage : `url('/Assets/image7.jpg')`}}>
      <div className="login-container">
        <form onSubmit={loginSubmit}>
          <input type="email" placeholder="Email" required name="email" value={user.email} onChange={onChangeInput} />
          <input type="password" placeholder="Password" required name="password" value={user.password} onChange={onChangeInput} />

          <div className="row">
            <button type="submit">Login</button>
            <Link to='/register'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
