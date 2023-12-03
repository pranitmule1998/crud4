import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
       <NavLink to={"/add"}>Add </NavLink >  &nbsp;
       <NavLink to={"/show"}>Show </NavLink >  &nbsp;
        </>
    )
}
export default Navbar;