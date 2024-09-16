import { NavLink } from 'react-router-dom';
 function Navbar(){
    return(
        <>
         
    <header>
      <nav>
     
      <NavLink to="/login">Login/Signup</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="profile"> Profile </NavLink>
        {/* <NavLink to="/education"> Education </NavLink>
        <NavLink to="/courses"> Courses </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
        <NavLink to="/extracurricular"> Extra Curricular </NavLink>
        <NavLink to="/languages"> Languages </NavLink>
        <NavLink to="/interest"> Interests </NavLink> */}

      </nav>
    </header>  
        </>
    )
 }
 export {Navbar};