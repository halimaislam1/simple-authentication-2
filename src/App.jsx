
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()



function App() {
  const [user , setUser] = useState(null)

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error);
      })
  
  }


  return (
    <>

      <h1>Firebase + React</h1>
      <button onClick={handleSignIn}>Google sign in</button>
       
       { user &&
        <div className="card">
         <h4>{user.displayName}</h4>

        </div>
       }

    </>
  )
}

export default App
