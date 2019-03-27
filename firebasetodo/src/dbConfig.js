import firebase from "firebase";
//Import Firebase config
import { DB_CONFIG } from "./config/config.js";
//Initilizing firebase

export const app = firebase.initializeApp(DB_CONFIG);
export const db = app.database().ref();
