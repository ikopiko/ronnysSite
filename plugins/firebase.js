import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAblu1pYjdlWwdnpvslBtff06TENGgO6Vk",
//     authDomain: "peakn-cbb73.firebaseapp.com",
//     databaseURL: "https://peakn-cbb73.firebaseio.com",
//     projectId: "peakn-cbb73",
//     storageBucket: "peakn-cbb73.appspot.com",
//     messagingSenderId: "4760252855",
//     appId: "1:4760252855:web:fe810a1581f5b677a17832"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCk9EDRIfAEfYXjsSgnAFrwmmAKGmt6iPY",
    authDomain: "ronny-s-d1b4f.firebaseapp.com",
    projectId: "ronny-s-d1b4f",
    storageBucket: "ronny-s-d1b4f.appspot.com",
    messagingSenderId: "953493258879",
    appId: "1:953493258879:web:7407ea885f5f5eefd5f54a",
    measurementId: "G-HQMDRKMPG9"
}

// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// db = firebase.firestore();

// export const dbOrderRef = db.collection('order');

// export const orderData = db.collection('order').get()

