import { useState } from "react";

function App() {
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')

  return (
    <div className="App">
      <form>
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
