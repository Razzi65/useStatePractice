import { useState } from "react"

const Todo = () => {

    const [todoitems, settodoitems] = useState()

    const [newtodo, setnewtodo] = useState([{item:"first"}])
    

    const additemFnc = () => {
        setnewtodo([...newtodo, addeditem ])
    }


    const onchangehandler = (e) => {
        settodoitems(e.target.value)
    }
    const addeditem = {item:todoitems}
    
    console.log(newtodo);


    const onclickdelbutton = (items) =>{
        console.log(items);
        
    }
    



    return (
        <div>




            <div className="container-fluid bg-info h-100 w-75 text-center">
                <br />
                <div className="container w-50">

                    <h1> To-do App</h1>

                    

                    <input type={"text"}  onChange={(e)=>onchangehandler(e)} /> <button onClick={()=>additemFnc()} >Click to add</button>
                    <br/>
                    {newtodo.map((items)=>{
                        return (
                            <div>
                                {items.item} <button onClick={()=>onclickdelbutton (items)}> Del</button>
                                </div>
                        )
                    })}
                </div> </div> </div>
            )

}


            export default Todo