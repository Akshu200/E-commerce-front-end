import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate=useNavigate();

   useEffect(()=>{
    let auth=localStorage.getItem('user')
    if(auth)
    {
        navigate('/')
    }
   
   },[])
   
   const handleLogin =async(e)=>{
    e.preventDefault();
    console.log(email,password)
    const result=await fetch(`http://localhost:5000/login`,{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
              
         }
      })
    let final=await result.json();
    console.warn(final)
    if(final.auth)
    {
        localStorage.setItem('user',JSON.stringify(final.find));
        localStorage.setItem('token',JSON.stringify(final.auth));
        navigate('/')
    }
    else{
        alert('Please enter correct details')
    }
   }

  return (
    <div className='absolute left-1/3 top-[100px]  rounded-md shadow-2xl  h-[400px] w-[450px] px-10'>
    <form className=' grid grid-cols-1 py-10 gap-5 justify-center'>
        <h1 className='text-2xl'>Log in</h1>

        <input className='border-2 rounded-2xl px-5 py-2' onChange={(e)=>setEmail(e.target.value)}  value={email} type='text' placeholder='Email'></input>

        <input className='border-2 rounded-2xl px-5 py-2' onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Password'></input>

        <button onClick={handleLogin} className='bg-red-500 border rounded-2xl py-2 w-[100px] h-12 text-white '>Submit</button>
    </form>
    </div>
  )
}

export default Login
