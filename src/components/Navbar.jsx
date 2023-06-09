import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
      Fast & Luxurious
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cars">
              Cars
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/book">
              Book Now
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/help">
              Help
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <LanguageIcon />
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                English
              </a>
              <a class="dropdown-item" href="#">
                Polish
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
