import React from "react";
import MainRoutes from "./routes/MainRoutes";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-sjZRKsVMru8puUBizqnqerUzpZ6Hpmk",
  authDomain: "dddd-af7ce.firebaseapp.com",
  projectId: "dddd-af7ce",
  storageBucket: "dddd-af7ce.appspot.com",
  messagingSenderId: "238993084090",
  appId: "1:238993084090:web:87b120ff342e8b9dbb3c83",
  measurementId: "G-4ZMM8Z1KHQ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

function App() {
  return <MainRoutes />;
}

export default App;
