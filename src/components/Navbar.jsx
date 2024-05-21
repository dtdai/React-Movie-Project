import { NavLink } from "react-router-dom";
import avatar from "../assets/manager.png"
import "../App.css";

function Navbar() {
  const login = true;

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo"> flMov </h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item active">
              {" "}
              <NavLink to="/home" className="menu-link">
                Trang chủ
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/phim-le" className="menu-link">
                Phim lẻ
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/phim-bo" className="menu-link">
                Phim bộ
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/hoat-hinh" className="menu-link">
                Hoạt hình
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/tv-shows" className="menu-link">
                TV Show
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/signup" className="menu-link">
                Đăng Nhập
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="profile-container">
          <img
            className="profile-picture"
            src={avatar}
            alt="MH Miyazi"
          ></img>
          <div className="profile-text-container">
            <span className="profile-text"> Guest </span>
            {/* <i className="fas fa-caret-down"></i> */}
          </div>
          <div className="toggle">
            <i className="fas fa-moon toggle-icon"></i>
            <i className="fas fa-sun toggle-icon"></i>
            <div className="toggle-ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
