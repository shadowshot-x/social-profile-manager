import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class SignoutLinks extends Component {
    render() { 
        return (
            <ul className="right">
                <li><NavLink to="/signin">Log In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
          );
    }
}
 
export default SignoutLinks;