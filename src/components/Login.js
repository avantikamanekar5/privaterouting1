import { useNavigate } from "react-router-dom";
 
import { useEffect } from "react";
function Login(){
  const login =()=>{
    localStorage.setItem('login',true)
  }

  const navigate = useNavigate();
   useEffect(()=>{
   let login = localStorage.getItem('login');
   if(login){
     navigate('/')
   }
  });
  return(

    <div>
      <h1>Login Page</h1>
      <p>or <button >Sign up</button></p>
          <p>Username</p>
            <input type="text" placeholder="enter username"  ></input>
          <p>Password</p>
         <input type="password" placeholder="enter password" ></input><br></br>
          <button  >Login</button>
         
    </div>
  )
}
export {Login}








// // import { Profile } from "./Profile";
// // import { Signup } from "./Signup";
// import { Navigate } from "react-router-dom";
// import React , {useState} from "react";


// // src/auth.js
// import { authenticate } from "./authenticate";


// function Login(){
//        const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');
        
      
//         const handleSubmit = () => {
          
      
//           if (authenticate(username, password)) {
//             alert('Login successful!');
//             // Redirect or perform some other action here
//           } else {
//             alert('Invalid username or password');
//           }
//         }
//     //    const [button, setCurrentButton] = useState(1);
//         return(
//             <>
//             <h3>Log in</h3>
//             <p>or <button >Sign up</button></p>
//             <p>Username</p>
//             <input type="text" placeholder="enter username"  onChange={(e) => setUsername(e.target.value)}></input>
//             <p>Password</p>
//             <input type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
//             <button onClick={handleSubmit} >Login</button>
         
    
     
            
//             </>
//         )
//     }
//     export {Login};