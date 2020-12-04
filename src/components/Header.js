import React from "react";



function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <a id="navTitle" className="navbar-brand" href="/">E | O </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active mr-2">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Support</a>
            </li>
          </ul>
        </div>

      </nav>
      <br /><br />
      <div className="header container">
        <h1>endymion outfitters</h1>
        <h4>synthetic armament and bio-modification</h4>
      </div>
    </React.Fragment>
  );
}

export default Header;