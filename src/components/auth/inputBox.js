import { useState } from "react"

const Input=(props)=>{
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
   
    const emailChange=(e)=>{
        setEmail(e.target.value) 
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)  
    }

    props.email(email)
    props.password(password)

return(
   <div>     
        <label htmlFor="userEmail" className="form-label">email:</label><br/>
        <input type="email" className="form-control" id="userEmail" name="userEmail" onChange={emailChange}/><br/>
        <label htmlFor="userPassword" className="form-label">password:</label><br/>
        <input type="password" className="form-control" id="userPassword" name="userPassword" onChange={passwordChange}/><br/>
   </div> 
)
}
export default Input