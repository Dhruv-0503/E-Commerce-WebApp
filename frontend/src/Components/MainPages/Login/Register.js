import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name : '',
    email : '',
    password : ''
  })

  const onChangeInput = e =>{
    const {name, value} = e.target;
    setUser({...user , [name] : value})
  }

  const registerSubmit = async e =>{
    e.preventDefault();
    try{
      await axios.post('/user/register', {...user})

      localStorage.setItem('firstRegister',true);
      window.location.href = "/"
    }
    catch(err){
      alert(err.response.data.msg);
    }
  }

  return (
    <div className="register-container">
      <form onSubmit={registerSubmit}>
        <input type="text" placeholder="Enter Name Here..." required name="name" value={user.name} onChange={onChangeInput}/>
        <input type="email" placeholder="Enter Email Here..." required name="email" value={user.email} onChange={onChangeInput}/>
        <input type="password" placeholder="Enter Password Here..." required name="password" value={user.password} onChange={onChangeInput}/>

        <div className="row">
          <button type="submit">Register</button>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
