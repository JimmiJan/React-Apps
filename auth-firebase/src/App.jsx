import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { auth, db } from './config/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function App() {

  const [name,setName] =useState("")

  const [email,setEmail] =useState("")
  const [number, setNumber] = useState("")
  const [password,setPassword] =useState("")

  const Login =()=>{
    console.log(email,password)
    createUserWithEmailAndPassword(auth , email,password , name,number)
    .then(user=>{
      console.log(user)
    })
    .catch(err=>{
      console.log(err)
    })    
  }

  return(
    <div className='App '>

    
    <div className='w-50 mx-auto apss '>
    <input className='form-control ' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} type="text" />
      <input type="email" className='form-control my-2'  placeholder='Enter You Email' onChange={(e)=>setEmail(e.target.value)} />
      <input className='form-control my-2'  placeholder='Enter Number'  onChange={(e)=>setNumber(e.target.value)} type="number" />
      <input type="password" className='form-control' placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)}/>
      <div className='text-center'>
        <button onClick={Login}  className="btn btn-primary my-2" >Login</button>
      </div>

    </div>
    </div>
  )
}

export default App;
