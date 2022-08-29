import React from 'react'
import "../style/Categorie_card.css";


function Trax({title}) {
  return (
    <div>
      <div className="iii">
         <img src="../trax.jpg" id="im_trax" /></div>
      <div id="ff">
        <div className="tit-p">
          <h4>{title}</h4>
        </div>{" "}
      </div>
    </div>
  );
}

export default Trax