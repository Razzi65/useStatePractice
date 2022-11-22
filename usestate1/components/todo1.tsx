import { useState } from "react"
import { Button, ButtonGroup } from '@chakra-ui/react'

const Todo1 = () => {

    type todotype = {
        name: string,

    }
    const [eventitem, settodoitem1] = useState<string>("")

    const onchageHandler = (e) => {
        settodoitem1(e.target.value)
    }

    const [todoitemOld, settodoitemold] = useState<todotype[]>([])

    const TodoNewData: todotype = {
        name: eventitem,
    }

    const onclickhandler = () => {
        settodoitemold([...todoitemOld, TodoNewData])
    }

    const onDeleteHandler = (olditems) => {
            const filtered = todoitemOld.filter((filterdTodo)=>{
                if(olditems.name != filterdTodo.name){
                    return filterdTodo
                }
            })      
            settodoitemold(filtered)  

    }



    return (
        <div>
            <div className="container-fluid bg-info h-100 w-75 text-center">
                <br />
                <div className="container w-50">

                    <h1> To-do App</h1>

                    <input onChange={(e) => onchageHandler(e)} type={"text"} />

                    <button onClick={() => onclickhandler()}> Click to add</button>  <br />

                    {todoitemOld.map((olditems) => {
                        return (
                            <div>
                                <ul> <li> {olditems.name}   <Button onClick={()=>onDeleteHandler(olditems)}> Del  </Button> </li> </ul>
                            </div>
                        )
                    })}




                </div>
            </div>
        </div>
    )
}


export default Todo1