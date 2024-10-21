
import Home from './Diff_pages/Home';
import Login from './Diff_pages/Login';
import Sginup from './Diff_pages/Sginup';
import MyOrder from './Diff_pages/MyOrder';
import Cart from './Diff_pages/Cart.jsx'
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
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Login' element={<Login/>}/>
      <Route  path='/CreateUser' element={<Sginup/>}/>
      <Route path='/MyOrder' element={<MyOrder />} />
      <Route  path='/cart' element={<Cart/>}/>    
    </Routes>
    </BrowserRouter>
    </div>
    
    
    </>
  );
}

export default App;