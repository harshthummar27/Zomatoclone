
import './App.css';
import HomePage from './pages/HomePage';
import Footer from './components/common/footer';
import { Route, Routes } from 'react-router-dom';
import CollectionPlaceDetail from './components/HomeComp/collection/CollectionPlaceDetail';

import DiningPage from './pages/DiningPage';
import DeliveryPage from './pages/DeliveryPage';
import Inverstorrelation from './pages/InverstorRelationPage';
import AddRestaurants from './pages/AddRestaurantsPage';
import DeliveryResDetails from './components/DeliveryComp/DeliveryResDetails';
import DiningResDetails from './components/DiningComp/DiningResDetails';
import CartPage from './pages/CartPage';

function App() {

  return (
    <div className="App">
      

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Ahmedabad/:restaurant' element={<CollectionPlaceDetail/>}/>
      <Route path='/Ahmedabad/order-food-online' element={<DeliveryPage/>}/>
      <Route path='/Ahmedabad/dine-out' element={<DiningPage/>}/>
      <Route path='investor-relations' element={<Inverstorrelation/>}/>
      <Route path='partner-with-us' element={<AddRestaurants/>}/>
      <Route path='/Ahmedabad/order-food-online/:DeliResDetails/order' element={<DeliveryResDetails/>}/>
      <Route path='/Ahmedabad/dine-out/:DiningResDetails/info' element={<DiningResDetails/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
