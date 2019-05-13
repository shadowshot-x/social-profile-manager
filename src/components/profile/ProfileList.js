import React, { Component } from 'react';
import ProfileSummary from './ProfileSummary';
import {Link} from "react-router-dom";
import { auth } from 'firebase';


const ProfileList =({profile})=> {
    
    
        return ( 
            <div className="profile-list container">
                {profile && profile.map(profile=>{
                      return(
                      <Link to={'/profile/'+profile.id} ><ProfileSummary profile={profile} key={profile.id} /></Link>  
                    )
                })}
           </div>
         );
    
}
 
export default ProfileList;