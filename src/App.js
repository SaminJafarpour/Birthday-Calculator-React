import Signup from './components/auth/signup.js'
import { useState } from "react"
import './App.css';

import Login from './components/auth/login.js';
import Result from './components/final/ResultPage.js'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [fName, setFName]= useState('')
  const [birthday, setBirthday]= useState('')

  function getUsersName(name){
    setFName(name)
    console.log(fName);
  }
  function getUsersBirthday(birthday){
    setBirthday(birthday)
    console.log(birthday);
  }
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login onGetUsersName={getUsersName}  onGetUsersBirthday={getUsersBirthday}/>
        </Route>
        <Route path="/ResultPage">
          <Result username={fName} userBirthday={birthday}/>
        </Route>
        <Route path="/">
          <Login  onGetUsersName={getUsersName}  onGetUsersBirthday={getUsersBirthday}/>
        </Route>
      </Switch>
    </Router>
    
   
  );
}

export default App;
