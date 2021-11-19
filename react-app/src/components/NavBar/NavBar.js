import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { logout } from "../../store/session";
// import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import  { searchBusinesses } from "../../store/search";
import { loadBusinesses } from "../../store/businesses";
import { loadOneBusiness } from "../../store/business";

const NavBar = () => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const results = useSelector(state => state.search.businesses)
  //   const sessionLoaded = useSelector((state) => state.session.loaded);


  useEffect(() => {
      if (input.length > 0){
          dispatch(loadBusinesses())
          dispatch(searchBusinesses(input))
      }
  }, [dispatch, input])

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/");
  };

  const show = () => {
      document.querySelector(".search-results").classList.remove("hidden")
  }

  const hide = (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
          document.querySelector(".search-results").classList.add("hidden")
      }
  }

  const reset = (id) => {
    document.querySelector(".search-results").classList.add("hidden");
    dispatch(loadOneBusiness(id))
    history.push(`/businesses/${id}`)
    setInput("");
  };



  return (
    <div className="nav_container">
      <div className="left_container">
        {/* <img
          src="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1637193255/poolupp/logo_ffu0hf.png"
          alt="logo"
        /> */}
      </div>
      <div className="right_container">
        {!user && (
          <>
            <div>
              <button
                className="nav_button"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
            </div>
            <div>
              <button
                className="nav_button"
                onClick={() => history.push("/sign-up")}
              >
                Sign Up
              </button>
            </div>
          </>
        )}
        {user && (
          <>
            <div className="search-container" onBlur={e => hide(e)}>
            <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onFocus={() => show()}
            placeholder="Search"
            />
            <div className="search-results hidden">
                {results?.length > 0  && input?.length > 0 ? (
                    results?.map(res => <div className="search-card" onClick={() => reset(res.id)} >{res.name}</div>)
                ) : <div className="search-none">No results.</div>}
            </div>
            </div>
            <div>
              <button
                className="nav_button"
                onClick={() => history.push("/businesses")}
              >
                Businesses
              </button>
              ;
            </div>
            <div>
              <button className="nav_button" onClick={onLogout}>
                Logout
              </button>
              ;
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
