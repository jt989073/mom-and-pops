import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../store/session';
// import LogoutButton from "../auth/LogoutButton";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
//   const sessionLoaded = useSelector((state) => state.session.loaded);

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return (
    <div className={styles.nav_container}>
      <div className={styles.left_container}>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
      </div>
      <div className={styles.right_container}>
        {!user && (
          <>
            <div>
              <button
                className={styles.nav_button}
                onClick={() => history.push("/login")}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className={styles.nav_button}
                onClick={() => history.push("/sign-up")}
              >
                Sign Up
              </button>
            </div>
          </>
        )}
        {user && (
            <>
                <div>
                    <button className={styles.nav_button} onClick={() => history.push("/businesses")}>Businesses</button>;
                </div>
                <div>
                  <button className={styles.nav_button} onClick={onLogout}>Logout</button>;
                </div>
            </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
