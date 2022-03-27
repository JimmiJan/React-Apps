import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { db } from './config/firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

function App() {

  const [input , setInput] = useState("")
  const [ todo,setTodo] = useState([])
  const [ref,setref] = useState(false)

  useEffect(async()=>{
    const dbref = collection(db,"todos")
    const data =await getDocs(dbref)
    let update = []
    data.forEach((doc)=>{
      update.push({key : doc.id, todo:doc.data().todo})
    })
    setTodo(update)
  },[ref])

  const AddHandel =async ()=>{
    // console.log(input)
    // todo.push(input)
    // setTodo([...todo])
    // setInput("")

    const dbref = collection(db,"todos")
    setInput("")
    try {
      const data = await addDoc(dbref,{
        todo:input
      })
      setref(!ref)
      console.log(data)
    } catch (error) {
      console.log(error)
    }



  }



  const DleteHandle=()=>{
    setTodo([])
    setInput("")

  }
  // const App = todo
  const Edit= async(key)=>{

    console.log(key)
    const dbref = doc(db,"todos", key)
    const prot = prompt("Edit Todo")
    const obj ={
      todo:prot
    }
    try {
      const dat = await setDoc(dbref,obj)
      setref(!ref)
      console.log(dat)
    } catch (error) {
      console.log(error)
    }

    // const Edit = prompt("Update Todo" )
    // todo.splice(index,1,Edit)
    // setTodo([...todo])
  }


  const DleteONEHandle= async  (key)=>{
    // todo.splice(index,1)
    // setTodo([...todo])
const dbref = doc(db,"todos",key)
try {
   const delee = await deleteDoc(dbref)
  setref(!ref)
  } catch (error) {
  console.log(error)
}

  }
  return (
    <div className="App">
      <h1 className='text-center'>Todo App</h1>
      <div className='w-50 mx-auto'>
        <input type="text" value={input} placeholder='Enter You Todo' className='form-control' onChange={(e)=>setInput(e.target.value)} />
        <div className=' pt-2 text-center'>
          <button className='btn btn-info  mx-2' onClick={AddHandel}>Add</button>
          <button className='btn btn-danger' onClick={DleteHandle} >Delete</button>
        </div>
      </div>

      <div className='mx-4'>
        {todo.map((value,index)=>{
          return(
            <ul key={index} >
              <li>
                {value.todo}
              </li>
              <button className='btn btn-info  mx-2' onClick={()=>Edit(value.key)}>Edit</button>
             <button className='btn btn-danger' onClick={()=>DleteONEHandle(value.key)} >Delete</button>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default App;
