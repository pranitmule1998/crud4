import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () =>{

         const {studentId} =  useParams()

        const navigate = useNavigate()

       const {register,handleSubmit,setValue} =  useForm()

       async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/get/${studentId}`);
        result.data=result.data[0]
         setValue ("name",result.data.name)
         setValue ("gender",result.data.gender)
         setValue ("city",result.data.city)
         setValue ("password",result.data.password)
         setValue ("shift",result.data.shift)
      }

      function savedata (data){
        axios.put(`http://localhost:8000/students/update/${studentId}`,data)
        navigate("/show");
          
      }

      useEffect(()=>{
        fetchdata()
      },[])


    return(
        <form onSubmit={handleSubmit(savedata)} > <br/>
        <input type="text" id="name" placeholder="name "  {...register("name")} />
  
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
export default Update;