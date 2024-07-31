import React, { useState } from 'react'

const Auth = () => {

  const [name, setName] = useState('');
  const [email, setEmail]=useState('');


  function handleRegister(){
    alert(`Username is ${name} and Email is ${email}`) // correctly getting username and email
    
  }

  return (
    <form onSubmit={handleRegister}>
        <label htmlFor="UserName">Enter UserName</label>
        <input type="text" value={name} name="UserName" onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="Email">Enter Your Email </label>
        <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Auth
