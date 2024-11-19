import './App.css';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getusers, logout, userCurrent } from './redux/userSlice';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import Profil from './components/Profil';
import PrivateRoute from './Routes/PrivateRoute';
import 'swiper/swiper-bundle.css'
import Footer from './components/Footer';
import About from './components/About';
import Nails from './components/Nails';
import { getservice } from './redux/serviceSlice';
import Hair from './components/Hair';
import Makeup from './components/Makeup';
import Care from './components/Care';
import Massage from './components/Massage';
import Modalservice from './components/Modalservice';
import { getreservation } from './redux/reservationSlice';
import Addtocard from './components/Addtocard';

import Dashbord from './components/Dashbord';
import { getproduct } from './redux/productSlice';
import Shop from './components/Shop';
import Detailproduct from './components/Detailproduct';
import { getcommande } from './redux/commandeSlice';

function App() {
  
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [ping, setping] = useState(false)
  useEffect(() => {
      dispatch(userCurrent());
      dispatch(getservice());
      dispatch(getreservation());
      dispatch(getusers());
      dispatch(getproduct());
      dispatch(getcommande())
  }, [ping])

  return (
    <div className="App">
      <div className='headerr'>


<Navbarr ping={ping} setping={setping} />
     </div>

<Routes>
<Route path="/" element={ <Register/> } />
<Route path="/login" element={ <Login/> } />
<Route path="/home" element={ <Home/> } />
<Route path="/about" element={ <About /> } />
<Route path="/nails" element={ <Nails/> } />
<Route path="/hair" element={ <Hair/> } />
<Route path="/makeup" element={ <Makeup /> } />
<Route path="/care" element={ <Care /> } />
<Route path="/massage" element={ <Massage /> } />
<Route element ={<PrivateRoute />}>
<Route path="/profil" element={<Profil ping={ping} setping={setping}/>}/>
<Route path="/modalservice" element={<Modalservice />}/>
<Route path="/shop" element={ <Shop /> } />
<Route path="/detailproduct/:id" element={ <Detailproduct /> } />
<Route path="/contact" element={ <Contact/> } />


<Route path="/dashbord" element={<Dashbord  ping={ping} setping={setping} />}/>



</Route> {" "}
</Routes>


<Footer/>

    </div>
  );
}

export default App;