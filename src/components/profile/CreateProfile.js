import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProfile} from '../../store/actions/profileActions';
import {Redirect} from 'react-router-dom';

class CreateProfile extends Component {
    state={
        firstname:'',
        lastname:'',
        age:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.createProfile(this.state);
    }
    render() { 
        
        return (  
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Please add some Details</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Profile</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
 
const mapDispatchToProps=(dispatch)=>{
    return{
        createProfile:(project)=>dispatch(createProfile(project))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProfile);
 