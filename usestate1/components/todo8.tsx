import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../usestate1/components/firebase/config'


const Todo8 = () => {

       
    type toDoType8 = {
            item:string,
            id:string 
        }

    const [eventData, setEventData] = useState<string>("")

    const onChangeHandler = (e: any) => {
        setEventData(e.target.value)
    }

    const [toDoList, setToDoList] = useState<toDoType8[]>([])
    
    
    const newItemAdded = { 
        item: eventData
    }

    const onClickHandler = async () => {

      try{ 
        const docRef = await addDoc(collection(db, "toDo"), newItemAdded );
        console.log("Document written with ID: ", docRef.id);

        setToDoList([...toDoList, {...newItemAdded, id: docRef.id}])
        setEventData("")
    } 
    catch(e) {
        console.error(e)
    }}



    return (
        <div>
            <input onChange={(e) => onChangeHandler(e)} value={eventData} type="text" placeholder="write task" className="m-5" />

            <button onClick={() => onClickHandler()}>Add Task</button>
            <br />

            {
                toDoList.map((val:toDoType8) => {
                    return (
                        <div className="ms-5">
                            <ul><li> {val.item}</li></ul>
                        </div>
                    )
                })
            }

        </div>
    )

}


export default Todo8