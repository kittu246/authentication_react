
import { useState } from 'react';

const LoginForm = ({handleLogin}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async(e) =>{

    e.preventDefault();

    

      try{

        const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:email,
          password:password,
        })
      })
      const data = await response.json();

      console.log(response);
      console.log(data);

      if(response.ok){
        localStorage.setItem('user',JSON.stringify(data))
        handleLogin();
      }
      else{
        console.log('login-failed',data.error)
      }
      

    }

    catch(error){

    console.log('error During login',error )

      }

      
     
      
      


    

  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Welcome back!</h5>
      <h2>Sign in to your account</h2>
      <label htmlFor='email'>Your email</label>
      <input id='email' type='text' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />

      <button type='submit'>CONTINUE</button>
      <p>Forget your password?</p>



    </form>
  )
}

export default LoginForm