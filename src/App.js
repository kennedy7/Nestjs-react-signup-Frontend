import { useState } from "react";
import axios from 'axios'

function App() {
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
 const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(username)
  axios.post('http://localhost:8000', {
    username:username, 
    email:email, 
    password:password
  })

 }
  return (
    <div className="App">
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input 
        required 
        type="text" 
        value = {username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />

      <p>Email</p>
        <input 
        required 
        type="email" 
        value = {email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />

       <p>Password</p>
        <input 
        required 
        type="password" 
        value = {password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <button type="submit">submit</button>
        </form>
    
    </div>
  );
}

export default App;
