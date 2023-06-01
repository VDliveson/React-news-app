import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const SearchQuery = (elem) => {
    // props.updateQuery(event.target.value);
    var val = document.getElementById("searchbox").value;
    //var val = $this.siblings('input[type=text]').val();
    if (val == "") {
      console.log("no input");
    } else {
      console.log(val);
      props.updateQuery(val);
    }
  };

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          News App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              id="searchbox"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={SearchQuery}
            >
              <Link className="dropdown-item" to="/search">
                Search
              </Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
