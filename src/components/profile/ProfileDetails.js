import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect,Link} from 'react-router-dom';
import './profile.css';

const ProfileDetails=(props)=> {
        const {profile,id,auth}=props;
        console.log(profile)
        console.log(id)
        if(!auth.uid) return <Redirect to='/signin'/>
        if(profile && auth.uid==id){
            
            return ( 
                <div className="profile-details container section">
                <div className="card card-detail z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{profile.firstname} {profile.lastname}</span>
                        <p className="side-crop"><img src={profile.url} className="profile-image" /></p>
                        <Link to="/editprofile"><button className="btn edit-btn">Edit Profile</button></Link>
                    </div>
                </div>
                </div>
             );
        }
        else{
          return(  <div className="profile-details container section">
          <div className="card card-detail z-depth-0">
              <div className="card-content">
                  <span className="card-title">{profile.firstname}</span>
                  <p><img src={profile.url} className="profile-image" /></p>
              </div>
          </div>
          </div>)
        }
        
       
    
}
 
const mapStateToProps=(state,ownProps)=>{
    console.log(state);
    const id=ownProps.match.params.id;
    console.log(id);
    const profiles=state.firestore.data.profiles;
    const profile=profiles ? profiles[id]:null
    return{
        profile:profile,
        id:id,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'profiles'}
    ]))(ProfileDetails);