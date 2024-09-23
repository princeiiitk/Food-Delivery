
import './App.css';
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
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { ContextApi } from './component/ContextApi';






function App() {
  return (
    <>
    <ContextApi>
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
    </ContextApi>
    
    </>
  );
}

export default App;