
import {auth, signOut, db, ref, set} from '../../module/firebase.js'
import { useHistory} from 'react-router-dom'
import Birthday from './Birthday'

const Result=(props)=>{

//adding logout functionality to logout button
const history = useHistory()
const logoutFunc=()=>{
    signOut(auth)
      .then(() => {
        console.log(props.username);
        history.push('/')
      })
      // Sign-out unsuccessful
      .catch((error) => {
        console.log(error);
      });
}  





   return(
    <div id="container" className="container">
      <Birthday username={props.username} userBirthday={props.userBirthday}/>
      <button type="button" id="logOutButton" onClick={logoutFunc} className="btn login d-flex justify-content-center">Logout</button>
    </div>
    
   ) 
}

export default Result