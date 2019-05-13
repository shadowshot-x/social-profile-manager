import React, { Component } from 'react';

const ProfileSummary=({profile})=> {   
        return ( 
            <div className="project-details container section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{profile.firstname}</span>
                </div>
            </div>
            </div>
         );
    
}
 
export default ProfileSummary;