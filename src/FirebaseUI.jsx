import Firebase from './Firebase';
import * as FirebaseUI from 'firebaseui';



// Initialize the FirebaseUI Widget using Firebase.
var ui = new FirebaseUI.auth.AuthUI(Firebase.auth());
// The start method will wait until the DOM is loaded.

export default ui;
