import { useState } from "react"

const Todo = () => {

    const [uservalue, setuservalue] = useState()


    const [addvalue,setaddvalue] = useState([{userinput:"first input"}])

    const newaddvalue = {
        userinput:uservalue
    }


   const onchangeHandler=(e)=> {
        setuservalue(e.target.value)
    }

    const onclickhandler = () => {
            setaddvalue([...addvalue, newaddvalue])
    }
    console.log({addvalue});
    
    
    return (



        <div className="container-fluid bg-info h-100 w-75 text-center">
            <br />
            <div className="container w-50">

            <h1> To Do App</h1>

            <input type="text" onChange={(e)=>onchangeHandler(e) } /> 
            <button onClick={()=> onclickhandler()}> click to add</button> <br/>
            {addvalue.map((i)=>{
                return (
                    <div>
                       <li> {i.userinput} <button>Delete</button></li>
                        </div>
                )
            })}



           
                
                <br/>
             
            <br/>
            <br/>
           
            </div> </div>



    )
}


export default Todo