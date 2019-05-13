const initState={
    profiles:[
        {id:'1',name:'Ujjwal'},
        {id:'2',name:'Queen'},
        {id:'3',name:'Ram'},
]
}

const profileReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROFILE':
            console.log('profile created',action.profile);
            return state;
        case 'CREATE_PROFILE_ERROR':
            console.log('profile error',action.err);
            return state;
        case 'EDIT_PROFILE':
            console.log('profile updated',action.profile);
            return state;
        case 'EDIT_PROFILE_ERROR':
            console.log('updation error',action.err);
            return state;    
        default:
            return state;        
    }
    return state;
}

export default profileReducer;