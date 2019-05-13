import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const SigninLinks =(props)=> {
    const {auth}=props;
        return (
            <ul className="right">
                <li><a onClick={props.signOut}><NavLink to="/"> Log Out</NavLink></a></li>
                <li><Link to={'/profile/'+auth.uid}> Profile</Link></li>
                <li><NavLink to="/">Dashboard</NavLink></li>
            </ul>
          );
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>{dispatch(signOut())}
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
      auth:state.firebase.auth
    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(SigninLinks);