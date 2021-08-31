import './App.css';
import ShopCarousel from './components/ShopCarousel';
import ShopNavbar from './components/ShopNavbar';
import ShopInfo from './components/ShopInfo';

function App() {
  return (
    <div className="App">
      <ShopNavbar/>
      <ShopCarousel/>

<div className="container"> 
  <div className="row">
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
      <h4>상품명</h4>
      <p>상품설명 & 가격</p>
    </div>
    <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
      <h4>상품명</h4>
      <p>상품설명 & 가격</p>
    </div>
    <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
      <h4>상품명</h4>
      <p>상품설명 & 가격</p>
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
      <h4>상품명</h4>
      <p>상품설명 & 가격</p>
    </div>
  </div>
</div>
    <ShopInfo></ShopInfo>
    </div>
  );
}

export default App;
