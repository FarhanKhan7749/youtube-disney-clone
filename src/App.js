import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { auth } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        if(user){
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }
      }
    })
  },[isLoggedIn]);
  
  return ( 
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/home" /> : <Login />}
          </Route>
          <Route path="/home">
            {isLoggedIn ? <Home /> : <Redirect to="/" />} 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
