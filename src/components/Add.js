import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Add = () =>{
        const navigate =  useNavigate()
      const {register,handleSubmit} =   useForm()

       function savedata (data){
        axios.post("http://localhost:8000/students",data)
        navigate("/show");
      }
    return(
        <form onSubmit={handleSubmit(savedata)} > <br/>
       <input type="text" id="name" placeholder="name enter "  {...register("name")} />
 
          <label htmlFor="gender" ></label>
            <input type="radio" id="male" value="Male" name="gender" {...register("gender")} />
            <label>Male</label>

            <input type="radio" id="female" value="Female" name="gender" {...register("gender")} />
            <label>Female</label> &nbsp;
 

            <select id="city" {...register("city")} >
                <option value={"Daryapur"} >Daryapur</option>
                <option value={"Akola"} >Akola</option>
                <option value={"Amravati"} >Amravati</option>
            </select> &nbsp;

            <input type="password" id="password" placeholder="Password" {...register("password")} /> &nbsp;

            <label htmlFor="shift"></label>
          <input type="checkbox" id="five" name="shift" value="5" {...register("shift")} />
          <label>5</label>

          <input type="checkbox" id="six" name="shift" value="6" {...register("shift")} />
          <label>6</label>

          <input type="checkbox" id="seven" name="shift" value="7" {...register("shift")} />
          <label>7</label>
 
 <button type="submit" >Submit</button>

        </form>
    )
}
export default Add;