import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

const [name, setName]=useState('');
const [password, setPassword]=useState('');
const [email, setEmail]=useState('');
const navigate=useNavigate();

useEffect(() => {
  const auth=localStorage.getItem('user')
  if(auth)
  {
    navigate('/')
  }
}, []);

const collectData = async(e)=>{
   e.preventDefault();
    console.log(name, password,email)
    let result=await fetch('http://localhost:5000/register',{

      method:'post',
      body:JSON.stringify({name, password,email}),
      headers:{
        'Content-Type':'application/json'
            
      },
    })
      let final=await result.json();
       console.log(final)
       localStorage.setItem('user',JSON.stringify(final.result));
       localStorage.setItem('token',JSON.stringify(final.auth));
    if(final)
    {
      navigate('/')
    }
}

  return (
    <div className='absolute left-1/3 top-[100px]  rounded-md shadow-2xl  h-[450px] w-[450px] px-10'>
    <form className=' grid grid-cols-1 py-10 gap-5 justify-center'>
        <h1 className='text-2xl'>Register</h1>

        <input className='border-2 rounded-2xl px-5 py-2' onChange={(e)=>setName(e.target.value)}
         type='text' placeholder='Name'></input>

        <input className='border-2 rounded-2xl px-5 py-2' onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email'></input>

        <input className='border-2 rounded-2xl px-5 py-2' onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'></input>

        <button onClick={collectData} className='bg-red-500 border rounded-2xl py-2 w-[100px] h-12 text-white '>Submit</button>
    </form>
    </div>
  )
}

export default Signup
