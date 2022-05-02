
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/Login" element= {<Login/>}></Route>
        <Route path="/Logout" element= {<Logout/>}></Route>
        <Route path="/Orders" element= {<ProtectedRoute><Orders/></ProtectedRoute>}></Route>
        <Route path="/NewOrder" element= {<ProtectedRoute><NewOrder/></ProtectedRoute>}></Route>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;