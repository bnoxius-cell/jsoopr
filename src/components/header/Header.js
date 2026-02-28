import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isShowSecondNav, setIsShowSecondNav ] = useState(false);
  const [activeNav, setActiveNav ] = useState(-1);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const homeHandler = () => {
    navigate("/")
  };

  const loginHandler = () => {
    navigate("/login")
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "false")
    navigate("/login")
  };

  const handleMouseEnter = (activeNavIndex) => {
    setIsShowSecondNav(true);
    setActiveNav(activeNavIndex);
  };

  const handleMouseLeave = () => {
    setIsShowSecondNav(false);
    setActiveNav(-1);
    };
    
  return (
    
    <nav class="header" onMouseLeave={handleMouseLeave}>
      <div class="logo" onClick={homeHandler} onMouseEnter={() => handleMouseEnter(-1)}>Resource Manager</div>
      <div class="nav_items">
        <div class="nav_item" onMouseEnter={() => handleMouseEnter(0)}><a onClick={homeHandler}>Dashboard</a></div>
        <div class="nav_item" onMouseEnter={() => handleMouseEnter(1)}><a href="#">Resources</a></div>
        <div class="nav_item" onMouseEnter={() => handleMouseEnter(2)}><a href="#">Calendar</a></div>
        <div class="nav_item" onMouseEnter={() => handleMouseEnter(3)}><a href="#">Projects</a></div>
        <div class="nav_item" onMouseEnter={() => handleMouseEnter(4)}><a href="#">About Us</a></div>
      </div>
      {isShowSecondNav && activeNav !== -1}
      {isLoggedIn === "true" ?
        <div className="logout_button"><a onClick={logoutHandler} onMouseEnter={() => handleMouseEnter(-1)}>Logout</a></div>
      :
        <div className="login_button"><a onClick={loginHandler} onMouseEnter={() => handleMouseEnter(-1)}>Login</a></div>
      }
    </nav>
  );
};
