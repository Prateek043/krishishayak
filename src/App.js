import { useState,useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Auth from './pages/Auth';
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import Admin from './pages/Admin';
import Blogs from "./pages/Blogs";
import About from "./components/About";
import Complaints from "./pages/Complaints"
function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
             <Route exact path='/' element={<Home/>} />
             <Route path='/auth' element={<Auth setActive={setActive} setUser={setUser}/>}/>
             <Route path="/Admin" element={<Admin user={user}/>}
             />
             <Route path="/Admin/Blogs" element={<Blogs setActive={setActive} user={user} />} />
              <Route path="/about" element={<About/>}  />
              <Route path="/Admin/Complaints" element={<Complaints user={user}/>}/>
         </Routes>
        </Router> 
    </div>
  );
}

export default App;
