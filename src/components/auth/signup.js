import { useState } from "react"
import {auth, signOut, createUserWithEmailAndPassword, db, ref, set} from '../../module/firebase.js'
import './signup.css';
import {Link, useHistory } from "react-router-dom";


const Signup = () => {
    const [fName, setFName]= useState('')
    const [lName, setLName]= useState('')
    const [birthday, setBirthday]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const fNameChange=(e)=>{
        setFName(e.target.value)
    }
    const LNameChange=(e)=>{
        setLName(e.target.value)
    }
    const birthdayChange=(e)=>{
        setBirthday(e.target.value)
    }
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const history = useHistory();
    
     // create a new pattern for user
    const createUser=(e)=>{
    e.preventDefault()
    console.log(fName);
    console.log(lName);
    console.log(birthday);
    console.log(email);
    console.log(password);
    const userData = { 
        FirstName: fName,
        LastName: lName,
        Birthday:birthday, 
        Email: email, 
        Password: password,
        }
        //creating authentication
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential.user)               

        //set data to Database
            const userKey = userCredential.user.uid
            set(ref(db, 'Users/' + userKey), userData)
            .then(()=>{
                // signout
                signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    console.log(history)
                    console.log('done')
                    history.push('/');
                })
                .catch((error) => {
                    console.log(error)
                });

            })
                            
        })
    }

    
     

return(
    <div >
        <form>
            <h1 className="form-label">Sign Up Form</h1>
            <label htmlFor="fname" className="form-label">First name:</label><br/>
            <input type="text" className="form-control" id="fname" name="fname" onChange={fNameChange}/><br/>
            <label htmlFor="lname" className="form-label">Last name:</label><br/>
            <input type="text" className="form-control" id="lname" name="lname" onChange={LNameChange}/><br/>
            <label htmlFor="birthday"className="form-label">Date Of Birth:</label><br/>
            <input type="date" className="form-control" id="birthday" name="birthday" onChange={birthdayChange}/><br/>
            <label htmlFor="userEmail" className="form-label">email:</label><br/>
            <input type="email" className="form-control" id="userEmail" name="userEmail" onChange={emailChange}/><br/>
            <label htmlFor="userPassword" className="form-label">password:</label><br/>
            <input type="password" className="form-control" id="userPassword" name="userPassword" onChange={passwordChange}/><br/>
            <button type="button" className="btn" onClick={createUser}>Submit</button><br/>
            <Link to="/login" className="justify-content-center d-flex align-item-center">If You Have An Account, Please Sign In</Link>
        </form>

    </div>
)}

export default Signup