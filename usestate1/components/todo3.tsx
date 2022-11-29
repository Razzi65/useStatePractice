 import { useState } from "react"

// const Todo3 = () => {

//     const [value, setValue] = useState <toDoType[]> ()
//     const [toDOitem, setToDoItem] = useState <toDoType[]>([])

//     const onChangeHandler = (e) => {
//         setValue(e.target.value)
//     }

//     type toDoType = {
//         todobyuser:string
//     }

//     const toDOByUser:toDoType ={
//         todobyuser:value
//     }
//     const onClickHandler = () => {
//         setToDoItem([...toDOitem, toDOByUser ])
//     }


//     const onDelHandler = (items:toDoType) => {
//         const filteredArr = toDOitem.filter((toDo)=>{
//             if(items.todobyuser != toDo.todobyuser) {
//                 return toDo
//             }
//         }
//         )
//         setToDoItem(filteredArr)
//     }

//     const [istrue, setIsTrue] = useState(false)
//     const updateHandler = () => {
//         setIsTrue(true)
//     }


//     const editHandler = (items) => {
//         toDOitem.filter((val)=> {
//             if(val.todobyuser == items.todobyuser) {
//                 return 
//             }
//         })
//     }
    

//     return (
//         <div>
//              <div className="container-fluid bg-info w-75 text-center">
//                 <br />
//                 <div className="container w-50">

//                     <h1> To-do App</h1>
//                     <br/>
                

//                      <input type="text" onChange={(e)=>onChangeHandler(e)} />
//                      <br/><br/> 

//                         {
//                             toDOitem.map((items)=>{
//                                 return (
//                                     <li> {items.todobyuser}
//                                     <button onClick={()=>onDelHandler(items)}> Del </button> 
//                                     <button onClick={()=>updateHandler()}> Edit </button> 
//                                     </li>
//                                 )
//                             })
//                         }

//                      <br/>
                     
//                      {istrue==true?
//                       <button>Click to update </button> 
//                       :<button onClick={()=>onClickHandler()}> Click To Add</button>
//                      }

//         </div> </div></div>
//     )
// }


// export default Todo3