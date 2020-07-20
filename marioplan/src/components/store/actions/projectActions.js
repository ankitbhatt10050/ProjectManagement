export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //asyncode
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Ryu',
            authorLastName:'Hoshi',
            authorId:12334,
            createAt:new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project:project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err:err});
        })

        
    }
}