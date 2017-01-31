import * as Firebase from "firebase";

var config = {
  apiKey: "AIzaSyAMMIYGxi-ktOTtCkeXHOn_-CxeO9_HWKk",
  authDomain: "hansard-dcb75.firebaseapp.com",
  databaseURL: "https://hansard-dcb75.firebaseio.com",
  storageBucket: "hansard-dcb75.appspot.com",
  messagingSenderId: "502525205156"
};
Firebase.initializeApp(config);

export default Firebase;
