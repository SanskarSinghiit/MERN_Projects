import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [displayData, setDisplayData] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    // alert(`Username is ${name} and Email is ${email}, getting from frontend only`); // Correctly getting username and email this i

    try {
      const response = await axios.post('http://localhost:8000/register', { name, email });  /// this response is the exact same res, we get in index.js, when we do post, res 
      setResponseMessage(response.data.message);
      setDisplayData(response.data.data); // Update state with response data
      console.log("This is from backend -> ");
      // console.log(response.message);
      console.log(response.data.message);
      console.log(response.data.data);
    } catch (error) {
      alert(`Error while registering, ${error} `);
      console.error(`Error while registering, ${error} `);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="UserName">Enter UserName</label>
        <input
          type="text"
          value={name}
          name="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="Email">Enter Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* {responseMessage && <h2>{responseMessage}</h2> } 
      {displayData && (  
        <div>
          <h3>Name: {displayData.name}</h3>
          <h3>Email: {displayData.email}</h3>
        </div>
      )   } */}
      {displayData && 
      <div>
        <h1>{displayData.name}</h1>
        <h1>{displayData.email}</h1>
      </div>}
    </div>
  );
};

export default Auth;
