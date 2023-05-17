import React from "react";
import SpecialCard from "./SpecialCard";

function SpecialOffers() {
  return (
    <div class="container">
      <h2 class="pb-2 border-bottom">Special Offers</h2>
      <div class="card-deck mb-3 text-center">
        <SpecialCard 
        url={"https://www.topgear.com/sites/default/files/2021/08/01%20DSC06893.jpg?w=976&h=549"}
        name={"Lamborghini Huracan STO"}
        price={"$0 "}
        spec1={"Specification 1"}
        spec2={"Specification 2"}
        spec3={"Specification 3"}
        spec4={"Specification 4"}
        />
        <SpecialCard 
        url={"https://www.topgear.com/sites/default/files/2022/03/1-Ferrari-296-GTB.jpg?w=976&h=549"}
        name={"Ferrari 296 GTB"}
        price={"$0 "}
        spec1={"Specification 1"}
        spec2={"Specification 2"}
        spec3={"Specification 3"}
        spec4={"Specification 4"}/>
      </div>
    </div>
  );
}

export default SpecialOffers;
