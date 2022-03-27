import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [input , setInput] = useState("")
  const [ todo,setTodo] = useState([])

  const AddHandel =()=>{
    console.log(input)
    todo.push(input)
    setTodo([...todo])
    setInput("")



  }
  const DleteHandle=()=>{
    setTodo([])
    setInput("")

  }
  // const App = todo
  const Edit=(index)=>{
    const Edit = prompt("Update Todo" )
    todo.splice(index,1,Edit)
    setTodo([...todo])
  }


  const DleteONEHandle=(index)=>{
    todo.splice(index,1)
    setTodo([...todo])
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
            <ul className=' ' key={index}>
              <li>
                {value}
              </li>
              <button className='btn btn-info  mx-2' onClick={()=>Edit()}>Edit</button>
             <button className='btn btn-danger' onClick={()=>DleteONEHandle()} >Delete</button>
            </ul>
          )
        })}
      </div>
    </div>
  );
}

export default App;
