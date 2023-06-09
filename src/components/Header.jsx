import React from "react";

function Header() {
  return (
    <div class="header position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light ">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Punny headline</h1>
        <p class="lead font-weight-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam
          ligula, semper id ullamcorper sollicitudin, congue vitae leo.
          Vestibulum sit amet fermentum augue. 
        </p>
        <a class="btn btn-outline-secondary" href="#">
          Book now
        </a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  );
}

export default Header;
