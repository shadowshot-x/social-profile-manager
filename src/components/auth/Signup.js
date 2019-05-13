import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import FileUploader from 'react-firebase-file-uploader';
import './auth.css'

class Signup extends Component {
    state = {
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            image:'',
            url:'',
            progress:0,
            age:'',
            authid:null
          }
          
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state)
    }
    handleUploadStart=(e)=>{
       this.setState({
           progress:0
       })
    }
    handleUploadSuccess=(filename)=>{
        this.setState({
            image:filename,
            progress:100
        })
        firebase.storage().ref('avatars').child(filename).getDownloadURL().then(
            url=>this.setState({
                url:url
            })
        )
     }
    render() { 
        console.log(this.state);
        const {auth,authError}=this.props
        if (auth.uid) return <Redirect to='/' />
        const links=this.state.progress==100?<div className="input-field">
        <button className="btn signup-btn lighten-1 z-depth-0">Sign Up</button>
        <div class="red-text center">{authError?<p>{authError}</p>:null}</div>
    </div>:<div className="input-field">
    <p className="loading-para lighten-1 z-depth-10">Please Enter All Details and wait for Image to Upload</p>
    <div class="red-text center">{authError?<p>{authError}</p>:null}</div>
</div>;
        return ( 
            <div onSubmit={this.handleSubmit} className="container">
                <form className="white">
                    <h5 className="text-darken-3 grey-text">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
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
                       <FileUploader className="signup-image-btn btn" accept="images/*" name="image" storageRef={firebase.storage().ref('avatars')}
                        onUploadStart={this.handleUploadStart} 
                        onUploadSuccess={this.handleUploadSuccess} />
                    </div>
                    {links}
                </form>
            </div>
         );
    }
}
 
const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);