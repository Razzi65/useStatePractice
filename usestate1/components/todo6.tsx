
import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

const Todo6 = () => {

    const [eTarget, seteTarget] = useState("")

    const onChangeHandler = (e: any) => {
        seteTarget(e.target.value)
    }
    type toDoType6 = {
        id?: number,
        itemName: string

    }

    const newTodo: toDoType6 = {
        itemName: eTarget
    }

    const [toDoItem, settoDoItem] = useState<toDoType6[]>([])
    const onclickHandler = () => {
        settoDoItem([...toDoItem, newTodo])
    }

 







    return (

        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>

                <div>  <input onChange={(e) => onChangeHandler(e)} type="text" className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={() => onclickHandler()} type="button" className="btn btn-primary">+</button>  </div>

                {
                    toDoItem.map((inpuvalue, indexItem) => {
                        return (
                            <li>{inpuvalue.itemName}
                                <button onClick={() => (onDeleteHandler(indexItem))}>Del</button>
                            </li>
                        )
                    })
                }




            </div>
        </Flex>
    )
}



export default Todo6