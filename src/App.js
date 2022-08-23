import { useState } from "react";

function App() {
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')

  return (
    <div className="App">
      <form>
        <p>Username</p>
        <input 
        required 
        type="text" 
        value = "username"
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />

      <p>Email</p>
        <input 
        required 
        type="text" 
        value = "email"
        onChange={(e)=>{
          setEmail(e.target.value)
        }}


        />
        </form>
    
    </div>
  );
}

export default App;
