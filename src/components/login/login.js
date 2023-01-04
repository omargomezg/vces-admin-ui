import React, {useState} from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    sessionStorage.setItem('token', email);
  };

  return (<div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input type="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 className="form-control mt-1"
                 placeholder="Enter email"/>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input type="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 className="form-control mt-1"
                 placeholder="Enter password"/>
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </form>
  </div>);
}
