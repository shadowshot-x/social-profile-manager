import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profile/ProfileDetails';
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Dashboard}></Route>
    <Route path="/profile/:id" component={ProfileDetails}></Route>
    <Route path="/signin" component={Signin}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/createprofile" component={CreateProfile}></Route>
    <Route path="/editprofile" component={EditProfile}></Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
