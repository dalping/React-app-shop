import React from 'react'
import {Carousel,Button} from 'react-bootstrap';

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
    <Carousel.Caption className="first">
      <h3>Seoson Off 50~70%</h3>
      <p>저렴한 가격에 구입하세요.</p>
      <Button variant="dark">보러가기</Button>
    </Carousel.Caption>
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
