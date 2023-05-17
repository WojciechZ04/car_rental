import React from "react";

function SpecialCard(props) {

const background = {backgroundImage: `url(${props.url})`}

  return (
    <div class="card mb-4 box-shadow">
      <div class="card-header" style={background}></div>
      <div class="card-body">
        <h2 class="card-title pricing-card-title">{props.name}</h2>
        <h3 class="card-title pricing-card-title">
		{props.price}<small class="text-muted">/ day</small>
        </h3>
        <ul class="list-unstyled mt-3 mb-4">
          <li>{props.spec1}</li>
          <li>{props.spec2}</li>
          <li>{props.spec3}</li>
          <li>{props.spec4}</li>
        </ul>
        <button type="button" class="btn btn-lg btn-block btn-outline-primary">
          Book now
        </button>
      </div>
    </div>
  );
}

export default SpecialCard;
