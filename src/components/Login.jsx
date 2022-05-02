import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../Redux/Auth/action';
export const Login = () => {
    const dispatch = useDispatch()
     const [userdata,setuserData] = useState({})
     function changeHandler (e){
         const {name,value} = e.target
         setuserData({...userdata, [name]:value})
     }
     console.log(userdata)
     const [data,setData] = useState([])
     async function getData(){
         let res = await fetch('http://localhost:8080/users')
         let h = await res.json()
         setData(h)
     }
     useEffect(()=>{
         getData()
     },[])
     function handleSubmit(){
         let flag = false;
        function check(){
        for(let i = 0;i<data.length;i++){
            if(data[i].username === userdata.username && data[i].pass === userdata.password){
                flag = true
                dispatch(login(true))
            }
        }
     }check()
     if(flag===true){
        alert("Logged in sucessfully")
     }else{
         alert("UserName or Password is wrong")
     }
    }
    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={changeHandler}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={changeHandler}
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button onClick={handleSubmit} className="submit">Login</button>
      </div>
    );
  };