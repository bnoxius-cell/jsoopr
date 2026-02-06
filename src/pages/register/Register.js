import { useNavigate } from 'react-router-dom';

import './Register.css';

export default function Login() {
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault()

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmation = document.getElementById("confirmation");

    if (password.value === confirmation.value) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("password", password.value);

      navigate("/login");
    } else {
      alert("Passwords do not match");
    }
  }

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <form className="register" onSubmit={e => registerHandler(e)}>
      <h2>Welcome, User!</h2>
      <p>Please register</p>
      <input id="username" required type="text" placeholder="User Name" />
      <input id="password" required type="password" placeholder="Password" />
      <input id="confirmation" required type="password" placeholder="Confirm Password" />
      <input type="submit" value="Register" />
      <div className="links">
        <a onClick={loginHandler}>Login</a>
      </div>
    </form>
  );
}