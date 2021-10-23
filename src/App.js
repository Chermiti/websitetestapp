import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';


function App() {
  return (
    < >
    <Router>
    <NavBar></NavBar>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
    </Switch>
    </Router>
    
    </>
  );
}

export default App;
