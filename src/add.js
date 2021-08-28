import './common.css'
import logo from './add.png'
import { useEffect, useState } from 'react';
import logo2 from './delete.png';

function Task({save}) {
    const [todolist,Addtodo]=useState([{task:"Test Task",id:null}])
    const [value,Setvalue]=useState("")

    function Addtask(e,todolist,Addtodo,value,Setvalue){
        e.preventDefault();
        Addtodo([...todolist,{task:value,id:Math.random()}])
        Setvalue("")

    }

    function HandleDelete(e,id){
        e.preventDefault();
        const todoList = todolist.filter((todolist,todoid) =>{return todoid != id})
        Addtodo(todoList)
    }
    return (
        <div>
            <div className='Card'>
                <p> TODO List</p>
            </div>
            <div className='Card2'>
                <form onSubmit={(e)=>Addtask(e,todolist,Addtodo,value,Setvalue)}>
                    <input className="Text" placeholder= "Add Todo" type="text" value ={value} onChange={(e)=>Setvalue(e.target.value)}/>
                    <input type="image"  className="Image" src={logo} />
                    </form>
            </div>
            <div  >{todolist.map((todo,id)=>(<div  className="Card3" key={id}>{todo.task}<input className="Delete"type="image" src ={logo2} onClick={(e)=>{HandleDelete(e,id)}}/></div>))}</div>
        </div>
        

    );
}
export default Task;