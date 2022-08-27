import { useState } from "react";
import axios from 'axios'

function App() {
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
 const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(username, email, password)
  axios.post('http://localhost:9000/signup', {
    username:username, 
    email:email, 
    password:password
  })
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err.response)
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
