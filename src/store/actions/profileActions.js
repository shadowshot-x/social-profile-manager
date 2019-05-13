export const createProfile=(profile)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('profiles').add({
            ...profile,
            firstname:profile.firstname,
            lastname:profile.lastname,
            age:profile.age,
        }).then(()=>{
            dispatch({type:'CREATE_PROFILE',profile})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROFILE_ERROR'})
        })
        dispatch({type:'CREATE_PROFILE',profile});
    }
}
 export const editProfile=(parser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('profiles').doc(parser.id).update({
            firstname:parser.profile.firstname,
            lastname:parser.profile.lastname,
        }).then(()=>{
            dispatch({type:'EDIT_PROFILE',parser})
        }).catch((err)=>{
            dispatch({type:'EDIT_PROFILE_ERROR'})
        })
        dispatch({type:'EDIT_PROFILE',parser});
    }
  
 }
// const updateRef = firebase.firestore().collection('profiles').doc(this.state.key);
//     updateRef.set({
//       firstname,
//       lastname
//     }).then(() => {
//       this.setState({
//         firstname:'',
//         lastname:''
//       });
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });