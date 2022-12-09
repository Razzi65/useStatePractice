import { useState } from "react"
import { db } from "./firebase/config"
import { collection, addDoc } from "firebase/firestore"; 


const Todo9 = () => {

    type toDoType9 = {
        item:string,
        id?:string
    }

    const [event, setevent] = useState<any>("")
    const onChangeHandler= (e:any) => {
        setevent(e.target.value)           
    }

    const addItem:toDoType9={
        item:event
    }

    const [toDoList, setToDoList] = useState<toDoType9[]>([])
    const onClickHandler = async() => {

     try{
const docRef = await addDoc(collection(db, "todo2"), addItem);
  console.log("Document written with ID: ", docRef.id);

        setToDoList([...toDoList, {...addItem, id:docRef.id}])
    }

    catch(e){
        console.error(e);
        
    }}


    return (
    <div className="m-5">
        <h1> To Do App</h1>
            <input onChange={(e)=>onChangeHandler(e)} type="text"  />
            <button onClick={()=>onClickHandler()} className="ms-2">Add</button>
            <br/>

            {
                toDoList.map((toDoItem)=>{
                    return (
                    <li>{toDoItem.item}</li>
                )})
            }
    </div>
    )
}

export default Todo9