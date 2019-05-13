import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editProfile} from '../../store/actions/profileActions';
import {Redirect,Link} from 'react-router-dom';
import './profile.css'

class EditProfile extends Component {
   state={
       firstname:'',
       lastname:'',
       redirect:false
   }
   handleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props.auth.uid);
        const parser={
            profile:this.state,
            id:this.props.auth.uid
        }
        this.props.editProfile(parser);
        this.id = setTimeout(() => this.setState({ redirect: true }), 1000)
    }
    render() { 
        return ( <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Edit some Details</h5>
            <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Edit Profile</button> 
              {this.state.redirect
                ? <Redirect to="/" />
                : <div></div>}
            </div>
        </form>
    </div> );
    }
}
 
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
 
const mapDispatchToProps=(dispatch)=>{
    return{
        editProfile:(project)=>dispatch(editProfile(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);