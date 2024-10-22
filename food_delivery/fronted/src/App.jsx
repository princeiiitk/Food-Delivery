
import Home from './Pages/Home';
import Login from './Pages/Login';
import Sginup from './Pages/Sginup';
import MyOrder from './Pages/MyOrder';
import Cart from './Pages/Cart.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";








function App() {
  return (
    <>


      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/CreateUser' element={<Sginup />} />
            <Route path='/MyOrder' element={<MyOrder />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App;