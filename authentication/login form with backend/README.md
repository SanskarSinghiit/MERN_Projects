This takes user input from form, in localhost://5173;
then axios is used to post form data to the backend using await axios.post, await as this is async function;
axois sends post request to http://localhost:8000/register

in the backend the backend server is listening to port - 8000, http://localhost:8000
and the form data will be handled at the route '/register', 

now backend is coded, such that whenever user sends a post request, app.post will trigger;
firstly it will get data from the request using destructuring, and get name and email
then it can use res.send or res.json -> both used to send response back to client, 

the response sent from server to client will be fetched by const response = await axios.post// this response;
so this response will contain the exact response that we as a backend has sent to the client ,
so now we can utilise this to tell client that post has been successful or can send some http status codes as well,;