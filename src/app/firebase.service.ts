import {AuthProviders, AuthMethods} from "angularfire2";
//Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBqppR_r-Ac7ZVgWhBRh74F2LVn5eRQMT0",
  authDomain: "rapid-prototyping-meetup.firebaseapp.com",
  databaseURL: "https://rapid-prototyping-meetup.firebaseio.com",
  storageBucket: "rapid-prototyping-meetup.appspot.com",
  messagingSenderId: "619984842215"
};

//Firebase autgh configuration
export const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};
