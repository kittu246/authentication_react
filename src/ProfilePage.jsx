import {useEffect, useState} from 'react'

const ProfilePage = () => {

  const[user,setUser] = useState(null);

  useEffect(()=>{
    const fetchData = async () =>{

      const user =JSON.parse(localStorage.getItem('user'));

      if(user){
        try{

          const res = await fetch(`https://dummyjson.com/users/${user.id} `);
          const data = await res.json();

          if(res.ok){

            localStorage.setItem('user',JSON.stringify(data));
            setUser(data);
            console.log(data);
          }
          else{

            console.log("error while fetching details" ,data.error)

          }
    
    
          
    
        
    
    
          }
    
          catch(error){
    
            console.log('Error during fetching user details',error)
    
          }
      }

      

      


    }
    fetchData()
  }
  
  ,
  [])
  return (
    <div className='Profile'>
      <h2>Profile Page</h2>
      {
        user ?
        <div>
          <p>Username :{user.username}</p>
          <p>Email :{user.email}</p>
        </div> :
        <div>
          <p>User Loading ...</p>
        </div>
      }
    </div>
  )
}

export default ProfilePage