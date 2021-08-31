import React from 'react'
import {Carousel} from 'react-bootstrap';

function ShopCarousel() {
    return (
        <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2014/05/23/23/17/dessert-352475_960_720.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2021/08/01/15/54/berries-6514669_960_720.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default ShopCarousel
