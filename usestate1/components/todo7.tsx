
import { Flex, Spacer } from '@chakra-ui/react'
import { use, useState } from 'react'

const Todo7 = () => {

   
    const [onChange, setOnChange] = useState("")

    const onChangeHandler = (e: any) => {
        setOnChange(e.target.value)
    }

    const addUserValue: toDoType6 = {
        toDoItem: onChange
    }
    type toDoType6 = {
        toDoItem: string
    }


    const [userValue, setUserValue] = useState<toDoType6[]>([])

    const onClickHandler = () => {
        setUserValue([...userValue, addUserValue])
        setOnChange("")

    }

    const onDeleteHandler = (originalIndex: number) => {
        const filteredArray = userValue.filter((Value, newIndex) => originalIndex != newIndex)
        setUserValue(filteredArray)

    }


    const [newIndex, setNewIndex] = useState<number>()
    const [isUpdate, setIsUpdate] = useState(false)

    const onEditHandler = (item:string, index:number) =>{
        setOnChange(item)
        setNewIndex(index)
        setIsUpdate(true)
    }

    const onUpdateHandler = () => {
        const newArry = userValue.map((value, index)=>{
            if(newIndex==index){
                let newAddItem:toDoType6 = {
                    toDoItem:onChange
                }
                return newAddItem
            }
            else {return value}
        })
        setUserValue(newArry)
        setOnChange("")
        setIsUpdate(false)
    }



    return (


        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>
                <div className="input-group mb-3">

                    <input value={onChange} onChange={(e) => onChangeHandler(e)} type="text" className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    {isUpdate==true? <button onClick={() => onUpdateHandler()} type="button" className="btn btn-primary">Update</button>
                    :<button onClick={() => onClickHandler()} type="button" className="btn btn-primary">+</button>}
                </div>


                <div>
                    {userValue.map((items, originalIndex) => {
                        return (
                            <div>
                                <ul className="list-group p-1">
                                    <li className="list-group-item list-group-item-info">
                                        {items.toDoItem}
                                        <button onClick={() => onDeleteHandler(originalIndex)} type="button" className="btn btn-secondary btn-sm float-end ms-1" >Del</button>
                                        <button onClick={() => onEditHandler(items.toDoItem, originalIndex)} type="button" className="btn btn-secondary btn-sm float-end ms-1" >Edit</button>

                                    </li> </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Flex>

    )
}


export default Todo7