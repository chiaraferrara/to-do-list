import React from "react";
import logo from "../assets/logo.png"

function Navbar({ changePage, returnToHome }: any) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={returnToHome}>
            <img style={{ height: '50px' }} src={logo}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={returnToHome}
              >
                All Tasks
              </a>
              <button className="nav-link" onClick={changePage}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
