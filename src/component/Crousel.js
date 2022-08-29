import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import List_categories from './List_categories';

function Crousel() {
  return (
    <div>
      <Carousel>
        <div>
          {/* <img src="/106_40001.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p> */}
          <List_categories/>
        </div>
      </Carousel>
    </div>
  );
}

export default Crousel