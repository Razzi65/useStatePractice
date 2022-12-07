import { useState } from "react"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../usestate1/components/firebase/config'


const Todo8 = () => {


    const [eventData, setEventData] = useState()

    const onChangeHandler = (e: any) => {
        setEventData(e.target.value)
    }

    const [toDoList, setToDoList] = useState([""])
    const newItemAdded = { item: eventData }

    const onClickHandler = async () => {

        // Add a new document with a generated id.
      try{ 
        const docRef = await addDoc(collection(db, "todos"), newItemAdded );
        console.log("Document written with ID: ", docRef.id);

        setToDoList([...toDoList, newItemAdded])
        setEventData("")
    } 
    catch(e) {
        console.error(e)
    }
    


    return (
        <div>
            <input onChange={(e) => onChangeHandler(e)} value={eventData} type="text" placeholder="write task" className="m-5" />

            <button onClick={() => onClickHandler()}>Add Task</button>
            <br />

            {
                toDoList.map((val) => {
                    return (
                        <div className="ms-5">
                            <li> {val}</li>
                        </div>
                    )
                })
            }

        </div>
    )

}}


export default Todo8