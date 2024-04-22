import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import List from "./pages/List/List";

function App() {
  const [userId, setUserId] = useState(Cookies.get("user_id"));

  const logOut = () => {
    setUserId(null);
    Cookies.remove("user_id");
  };

  const onLogin = (val) => {
    setUserId(val);
    Cookies.set("user_id", val, { path: "/" });
  };

  return (
    <Router>
      <header>
        <div class="top-menu">
          <h1 class="title">Announcements Web</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            {userId && (
              <>
                <li>
                  <a href="/announcements/local">Local List</a>
                </li>

                <li>
                  <a href="/announcements/create">Create</a>
                </li>
              </>
            )}
            {userId ? (
              <li class="access side dropdown">
                <a
                  class="nav-link dropdown-toggle action_link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button class="dropdown-item logout" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li class="access side">
                  <Link to="/login">Log In</Link>
                </li>
                <li class="access">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            {/* {% endif %} */}
          </ul>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<SignIn onLogin={onLogin} />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/announcements/create" element={<Create />} />
          <Route path="/announcement*" element={<List />} />
          <Route path="/announcements/*" element={<List />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
