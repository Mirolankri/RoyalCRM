import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private router: Router) {  }

  signupWithEmailAndPassword(user: Signup, cb: Function) {
    const {email, password} = user;
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((credentials) => {
      console.log(credentials);
      cb(credentials)
      console.log('user Signup with email & password successfuly!');
    })
    .catch(()=>{cb(null)});
  }

  logout() {
    signOut(this.auth)
    .then(()=>{
      console.log('User logged Out!');
      this.router.navigate(['']);
    })
    .catch((error)=>{console.log(error)});
  }

  loginWithEmailAndPassword(user: Login, cb: Function){
    const {email, password} = user;
    signInWithEmailAndPassword(this.auth, email, password)
    .then((credentials)=>{cb(credentials)})
    .catch(()=>{cb(null)});
  }

  signupAndLoginWithGoogle(cb: Function) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((data)=>{
      console.log('Logged successful with Google');
      cb(data);
    })
    .catch(()=>cb(null));
  }

  getUserStatus(cb: Function) {
    return onAuthStateChanged(this.auth, (user) => cb(user));
  }
}

interface Signup{
  email: string;
  password: string;
}

interface Login{
  email: string;
  password: string;
}