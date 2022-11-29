
import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

const Todo4 = () => {


    const [userTodo, setUserToDo] = useState()
    const onchangeHandler = (e:any) => {
        setUserToDo(e.target.value)
    }

    type toDoType4 = {
        item: string | any
    }

    const [userValue, setUserValue] = useState<toDoType4[]>([])

    const onClickHandler = () => {
        const addTodo: toDoType4 = { item: userTodo }
        setUserValue([...userValue, addTodo])
    }

    const onDeleteHandler = (index:number) => {
        const filteredArr = userValue.filter((OriginalArr,index2)=>{
            if(index !== index2){
                return OriginalArr
            }
        })
            setUserValue(filteredArr)
    }

    const [isUpdate,setIsUpdate] = useState(false)
    const [newobjj,setNewObjj] = useState<toDoType4[]>([])
    const [newIndex,setNewIndex] = useState()
    

    const updateHandler = (OriginalToDo:any, index:any) => {
        setIsUpdate(true)
        setNewObjj (OriginalToDo.items)
        setNewIndex(index)
    }


        const editHandler = () => {
            const newList = userValue.map((newItem,index1)=>{
                if(index1 == newIndex ){
                    let updatedItem = { item:userTodo}
                    return updatedItem
                }
                else { return newItem}
            })
            setIsUpdate(false)
            setUserToDo("")
            setUserValue(newList)


            
        }


    return (

        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>

                <div className="input-group mb-3">

                    <input onChange={(e) => onchangeHandler(e)} type="text"  className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    
                    {isUpdate==true?
                    <button onClick={() => editHandler()} type="button" className="btn btn-primary">Update</button> :
                    <button onClick={() => onClickHandler()} type="button" className="btn btn-primary">+</button>
}
               
                </div>


                {userValue.map((OriginalToDo,index) => {
                    return (
                        <div>
                            <ul className="list-group p-1">
                                <li className="list-group-item list-group-item-info">

                                    <div> {OriginalToDo.item} 

                                    <button type="button" className="btn btn-secondary btn-sm float-end ms-1" onClick={()=>onDeleteHandler(index)}>Del</button>
                                    <button type="button" className="btn btn-secondary btn-sm float-end" onClick={()=>updateHandler(OriginalToDo.item,index)}>Edit</button>
                                    </div>

                                </li>

                            </ul>

                        </div>
                    )
                })}

            </div>



        </Flex>




    )
}

export default Todo4