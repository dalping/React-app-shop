import './App.css';
import ShopCarousel from './components/ShopCarousel';
import ShopNavbar from './components/ShopNavbar';
import ShopInfo from './components/ShopInfo';
import ShopList from './components/ShopList';

function App() {
  return (
    <div className="App">
      <ShopNavbar/>
      <ShopCarousel/>
      <ShopList />
      <ShopInfo/>
    </div>
  );
}

export default App;
