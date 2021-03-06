import { auth } from '../services/firebase';

export const signin =( email , password)=>{
   return auth().signInWithEmailAndPassword(email,password)
}

export const signup =(email , password)=>{
    return auth().createUserWithEmailAndPassword(email, password);
}
export const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
  }

export const doSignOut = ()=>{
    return auth().signOut()
}