import firebase from 'firebase';
// Rebase is a React-Firbase-specific package that allows state to mirror firebase
import Rebase from 're-base';

// create firebase app
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBflaq6W1NJHSAA77kWGRF4E4rXKyM5xns",
    authDomain: "chasin-tail-menu.firebaseapp.com",
    databaseURL: "https://chasin-tail-menu.firebaseio.com"
  });

// create rebase bindings
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;