import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [displayData, setDisplayData] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    alert(`Username is ${name} and Email is ${email}`); // Correctly getting username and email

    try {
      const response = await axios.post('http://localhost:8000/register', { name, email });  /// this response is the exact same res, we get in index.js, when we do post, res 
      setResponseMessage(response.message);
      setDisplayData(response.data.data); // Update state with response data
    } catch (error) {
      console.error("Error while registering", error);
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
      {responseMessage && <h2>{responseMessage}</h2>}
      {displayData && (
        <div>
          <h3>Name: {displayData.name}</h3>
          <h3>Email: {displayData.email}</h3>
        </div>
      )}
    </div>
  );
};

export default Auth;
