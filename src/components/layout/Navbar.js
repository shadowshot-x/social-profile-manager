import React, { Component } from 'react';
import './Navbar.css'
import SigninLinks from './SigninLinks';
import SignOutLinks from './SignoutLinks';
import SignoutLinks from './SignoutLinks';
import {connect} from 'react-redux';

const Navbar=(props)=>{
    
      const {auth}=props;
      const links=auth.uid?<SigninLinks/>:<SignoutLinks/>
        return ( 
            <div className="navigation-bar">


            <div id="navigation-container">
        
              <img src="https://starcast.com/img/assets_png/bitmap@2x.png" />
        
              <ul>
                <li><a href="https://www.starcast.com">Actor</a></li>
                <li><a href="https://www.starcast.com">Model</a></li>
              </ul>
                {links}
            </div>
            </div>
         );
  
}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
    auth:state.firebase.auth
  }
}
 
export default connect(mapStateToProps)(Navbar);
