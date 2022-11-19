import { useState } from "react"

const Todo = () => {

    const [item,setitem] = useState()

    const [additem, setadditem] = useState([{input:"first task"}])



    const addNewItem = {
        input:item
    }

    const getitem = (e) => {
        setitem(e.target.value)
    }



    const additemFn = () => {
      
        
        setadditem([...additem, {input:item}])
      
    }


    console.log(additem);

   
    const delItem = () => {
        const a=additem.pop()
        console.log(a);
        

    }
    
    return (



        <div className="container-fluid bg-info h-100 w-75 text-center">
            <br />
            <div className="container w-50">



                <h1> To do App</h1>
                <br />

                <input onChange={(e)=>getitem(e)} className="form-control" type="text" placeholder="Enter Task" />

                <br /><br />
                
                {additem.map((i)=>{
                    return (
                        <div>
                           <li> {i.input} <button type="button" className="btn btn-link text-danger" onClick={()=>delItem()}>Delete </button> </li>
                            </div>
                    )
                })}
                 
                
                <br/>
                <button onClick={()=>additemFn()} type="button" className="btn btn-success">Click to add task</button>
            <br/>
            <br/>
           
            </div>
        </div>



    )
}


export default Todo