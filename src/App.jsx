// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react';
import LoginForm from './LoginForm';
import ProfilePage from './ProfilePage';


const App = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };

  const [loggedIn,setLoggedIn] = useState(false);

  const handleLogin =() =>{
    setLoggedIn(true)
  }

  return (
    <div className="App">
      

      {
        loggedIn?
        <ProfilePage/>:
        <LoginForm handleLogin={handleLogin}/>

      }

     
    </div>
  );
};

export default App;
