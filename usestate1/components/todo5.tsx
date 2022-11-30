
import { Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

const Todo5 = () => {
    type toDOType5 = {
        id?: number,
        toDo: string
    }

    const [targetValue, setTargetValue] = useState('')
    const onChangeHandler = (e: any) => {
        setTargetValue(e.target.value)
    }

    const addToDo: toDOType5 = {
        id: 0,
        toDo: targetValue
    }

    const [toDoList, setToDoList] = useState<toDOType5[]>([])
    const onClickHandler = () => {
        setToDoList([...toDoList, addToDo])
    }

    const onDeleteHandler = (indexToDo:number) => {
       const filteredArry = toDoList.filter((toDOArr, newIndex)=>{
            if(indexToDo != newIndex){
                return toDOArr
            }
        })  
        setToDoList(filteredArry)      
    }

    const [isUpdate, setIsUpdate] = useState(false)
    const [indexToDel, setIndexToDel] = useState<number>()

    const onupdateHandler = (value, indexToDo:number) => {
        setIsUpdate(true)
        setIndexToDel(indexToDo)
        setTargetValue(value)

    }

    const onEditHandler = () => {
       const newArray = toDoList.map((arrayToDo,indexofArryToDo)=>{
            if (indexToDel == indexofArryToDo ){

                let newAddToDo:toDOType5 = {
                    toDo : arrayToDo.toDo
                    }
                
                return newAddToDo
            }
            else { return arrayToDo}
        })

        setIsUpdate(false)
        setToDoList(newArray)
        setTargetValue('')

    }
    

    return (

        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>
                <div className="input-group mb-3">

                    <input onChange={(e) => onChangeHandler(e)} type="text" value={targetValue} className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />

                    {(isUpdate==true)? <button onClick={() => onEditHandler()} type="button" className="btn btn-primary">Update</button> :
                    <button onClick={() => onClickHandler()} type="button" className="btn btn-primary">+</button>} </div>
               
               
                <br />

                {(targetValue || targetValue.length) ? "" : "No task to Display"}

                <div>
                    {
                        toDoList.map((arrToDo, indexToDo) => {
                            return (
                                <div>
                                    <ul className="list-group p-1">
                                        <li className="list-group-item list-group-item-info">{arrToDo.toDo}
                                            <button type="button" className="btn btn-secondary btn-sm float-end ms-1" onClick={()=>onDeleteHandler(indexToDo)}>Del</button>
                                            <button type="button" className="btn btn-secondary btn-sm float-end ms-1" onClick={()=>onupdateHandler(arrToDo.toDo,indexToDo)}>Edit</button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </Flex>
    )
}

export default Todo5