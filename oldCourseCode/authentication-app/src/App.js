import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const App = () => {
    return (
        <>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/" exact>
            <h1>Home Component</h1>
          </Route>
        
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        
        </Router>

        </>
    );
}

export default App;