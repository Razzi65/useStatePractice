import { useState } from "react"


const Todo9 = () => {

    const [event, setevent] = useState<string>("")
    const onChangeHandler= (e:any) => {
        setevent(e.target.value)           
    }

    const [toDoList, setToDoList] = useState([])

    return (
    <div className="m-5">
        <h1> To Do App</h1>
            <input onChange={(e)=>onChangeHandler(e)} type="text"  />
            <button className="ms-2">Add</button>
    </div>
    )
}

export default Todo9