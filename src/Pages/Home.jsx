import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useContext } from "react";
import { Context } from "../Context/Context";

const Home = () => {

    const [uid, setUid] = useState(null);
    const context = useContext(Context);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUid(user.uid);
        context.setUser({email: user.email, uid: user.uid});
    } else {
        // User is signed out
        setUid(null);
    }
    });

    return(
        uid ? <h2>home</h2> : <h2>not signed in</h2>
    );
}

export default Home;