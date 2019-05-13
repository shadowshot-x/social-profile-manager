import React, { Component } from 'react';
import ProfileList from '../profile/ProfileList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
    
    render() { 


        const {profile,auth} =this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return ( 
            <div>
            <ProfileList profile={profile}/>
           </div>

         );
    }
}
const mapStateToProps=(state)=>{
    return{
        profile:state.firestore.ordered.profiles,
        auth:state.firebase.auth
    }
}
 
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'profiles'}
    ]))(Dashboard);