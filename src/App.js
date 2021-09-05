import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShopCarousel from './components/ShopCarousel';
import ShopNavbar from './components/ShopNavbar';
import ShopInfo from './components/ShopInfo';
import ShopList from './components/ShopList';
import GoodsDetail from './components/GoodsDetail';
import React from 'react';
import Cart from './components/Cart';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <ShopNavbar/>
          <Switch>
            {/* 메인페이지 */}
            <Route exact path="/React-app-shop">
              <ShopCarousel/>
              <ShopList title={"Best"} type={"main"}/>
              <ShopList title={"New"} type={"main"}/>
            </Route>
            {/* 제품 상세 페이지 */}
            <Route path="/React-app-shop/detail/:id">
              <GoodsDetail/>
            </Route>
            <Route path="/React-app-shop/best">
              <ShopList title={"Best"} type={"all"}/>
            </Route>
            <Route path="/React-app-shop/new">
              <ShopList title={"New"} type={"all"}/>
            </Route>
            <Route path="/React-app-shop/cart">
              <Cart/>
            </Route>
          </Switch>
        <ShopInfo/>
      </div>
      </BrowserRouter>
  );
}

export default App;
