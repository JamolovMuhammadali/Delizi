import './App.css';
import Home from './companents/Home'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Login from './companents/Login';
import Signup from './companents/Signup';
import Menu from './companents/Menu'
import ResetPassword from './companents/ResetPassword';
import AboutUs from './companents/AboutUs';
import Reservation from './companents/Reservation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Reservation' element={<Reservation />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

// import React from 'react'
// import Github from './companents/GithubLogin'

// function App() {
//   return (
//     <div>
//       <Github/>
//     </div>
//   )
// }

// export default App