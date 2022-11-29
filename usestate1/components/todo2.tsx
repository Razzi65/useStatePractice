import { Button } from "@chakra-ui/react"
// import { useState } from "react"

// const Todo2 = () => {

//     type todotype = {
//         todoitems: string
//     }

//     const [firstTodo, setFirstTodo] = useState()
//     const onchangeHandler = (e) => {
//         setFirstTodo(e.target.value)
//         console.log(e);

//     }

//     const todonew: todotype = {
//         todoitems: firstTodo
//     }

//     const [todoitem1, settodoitem1] = useState<todotype[]>([])

//     const onclickhandler = () => {
//         settodoitem1([...todoitem1, todonew])

//     }

//     const ondeletehandler = (index) => {
//         const newList = todoitem1.filter((item, i) => i !== index)
//         settodoitem1(newList)
//     }
//     const [isUpdate, setIsUpdate] = useState(false)
//     const [docRef, setDocRef] = useState()

//     const onupdateHandler = (index, value) => {
//         setIsUpdate(true)
//         setFirstTodo(value)
//         setDocRef(index)


//     }

//     const handleUpdate = () => {
//         const newList = todoitem1.map((item, i) => {
//             if (i === docRef) {
//                 let updateItem = {
//                     todoitems: firstTodo
//                 }
//                 return updateItem
//             } else {
//                 return item
//             }
//         })
//         settodoitem1(newList)
//         setFirstTodo('')
//         setIsUpdate(false)
//     }




//     return (

//         <div className="container-fluid bg-info h-100 w-75 text-center">
//             <br />
//             <div className="container w-50">

//                 <h1> To-do App</h1>

//                 <input type="text" onChange={(e) => onchangeHandler(e)} value={firstTodo} placeholder={"Write something"} />

//                 <br />
//                 {todoitem1.map((item, index) => {
//                     return (
//                         <div>
//                             <li> {item.todoitems} <button onClick={() => ondeletehandler(index)}>Del</button>
//                                 <button onClick={() => onupdateHandler(index, item.todoitems)}>Edit</button></li>

//                         </div>
//                     )
//                 })}
//                 <br />
//                 {
//                     isUpdate ? <button onClick={() => handleUpdate()}> Click to UPdate</button> :
//                         <button onClick={() => onclickhandler()}> Click to Add</button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Todo2

