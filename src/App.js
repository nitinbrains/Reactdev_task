import React, {Fragment} from 'react';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Fragment>
      {/* <Navbar/> */}
      <Switch>
     <Route exact path='/' component={Login}/>
     <Route exact path='/home' component={Home}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/rooms' component={Rooms}/>
     <Route exact path='/singleroom/:id' component={SingleRoom}/>
     <Route component={Error}/>
     </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
