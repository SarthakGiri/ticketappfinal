import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

<Carousel>
  <div>
    <img src="assets/1.jpeg" />
    <p className="legend">Event 1</p>
  </div>
  <div>
    <img src="assets/2.jpeg" />
    <p className="legend">Event 2</p>
  </div>
  <div>
    <img src="assets/3.jpeg" />
    <p className="legend">Event 3</p>
  </div>
</Carousel>
export default Carousel;