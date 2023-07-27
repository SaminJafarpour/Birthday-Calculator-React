import { useState } from "react"
import {auth, signInWithEmailAndPassword, db, ref, get, child} from '../../module/firebase.js'
import {Link, useHistory} from 'react-router-dom'

const Login = (props) =>{
   
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const history = useHistory()

    const loginUser=(e)=>{
        e.preventDefault()
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential.user)
            const userKey = userCredential.user.uid
            //get the data from Database
            const dbRef = ref(db)
            get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                let birthday=snapshot.val().Birthday
                let name = snapshot.val().FirstName
                props.onGetUsersName(name)
                props.onGetUsersBirthday(birthday)
                history.push('/ResultPage')
            
            }else{
                console.log("No data available")
                history.push('/signup')
            }
            }).catch((error) => {
            console.error('error');
            });
           
        })
}
    return(
        <div >
        <form >
            <h1 className="form-label">Sign In</h1><br/>
            <label htmlFor="userEmail" className="form-label">email:</label><br/>
            <input type="email" className="form-control" id="userEmail" name="userEmail" onChange={(e)=>{
        setEmail(e.target.value)
    }}/><br/>
            <label htmlFor="userPassword" className="form-label">password:</label><br/>
            <input type="password" className="form-control" id="userPassword" name="userPassword" onChange={(e)=>{
        setPassword(e.target.value)
    }}/><br/>
            <button type="button" className="btn login" onClick={loginUser}>LogIn</button>
            <Link to="/signup" className="justify-content-center d-flex align-item-center">To Make An Account, Please Sign Up</Link>
        </form>
    </div>
    )
   
}
export default Login