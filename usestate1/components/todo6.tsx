
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

    const onDeleteHander = (indexItem:number) => {
        const filteredArr = toDoItem.filter((valu, index)=> {
            if(indexItem!=index) {
                return (valu)
            }
        })
        settoDoItem(filteredArr)
    }

    const [istrue, setIsTrue] = useState(false)
    const [mapIndex,setMapIndex] = useState<number>()
    const onEditHandler = (indexItem:number) => {
        setIsTrue(true)
        setMapIndex(indexItem)

    }
 







    return (

        <Flex borderRadius={"5"} marginLeft={"400"} marginTop={"100"} bg='teal' w='50%' h='500px' p={4} color='white' justifyContent={"center"}>

            <div> <h1 className='mt-3 mb-3 text-center'> To-do App</h1>
            <div className="input-group mb-3">

               <input onChange={(e) => onChangeHandler(e)} type="text" className="form-control" placeholder="Write Task" aria-label="Recipient's username" aria-describedby="button-addon2" />
                   {(istrue==true)? <button onClick={() => onclickHandler()} type="button" className="btn btn-primary">Update</button> : 
                    <button onClick={() => onclickHandler()} type="button" className="btn btn-primary">+</button>  }
                    </div>
                    <br/>

              <div>  {
                    toDoItem.map((inpuvalue, indexItem) => {
                        return (
                            <div>
                            <ul className="list-group p-1">
                            <li className="list-group-item list-group-item-info">{inpuvalue.itemName}
                     <button onClick={()=>onDeleteHander(indexItem)} type="button" className="btn btn-secondary btn-sm float-end ms-1" >Del</button>
                     <button onClick={()=>onEditHandler(indexItem)} type="button" className="btn btn-secondary btn-sm float-end ms-1" >Edit</button>

                            </li> </ul> </div>
                        )
                    })
                }




            </div></div>
        </Flex>
    )
}



export default Todo6