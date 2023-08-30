import React from 'react';

function Navbar() {
  return (
    <div style={{ position: "fixed", width: "100%", zIndex: "9999" , marginTop:"0.1%"}}>
       <nav className="navbar navbar-expand-lg" style={{ color: "grey", margin: "0 auto", borderRadius: "40px", maxWidth: "68%", height: "55px", marginTop: "20px", fontFamily: "General Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "18px", lineHeight: "28px", background: "rgba(255, 255, 255, 0.8)" }}>
        <div className="container-fluid">
        <a><img src='./images/4225205.png' style={{height:"40px", width:"40px"}}/ ></a> &nbsp; &nbsp;
          <a className="navbar-brand" href="#" style={{ color: "#5168F5" , fontWeight:"bold"}}>Pratyush Birole</a>&nbsp; &nbsp;
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Home</a>
              </li>



              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Projects</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Blogs</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>About</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Achievements</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Resources </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "Grey" }}>Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
