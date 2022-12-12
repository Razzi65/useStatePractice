import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "./config/firebase";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";




const Todo10 = () => {

    type todotype10 = {
        name: string,
        id?: string

    }

    const [event, setEvent] = useState<string>("")
    const onChangeHandle = (e: any) => {
        setEvent(e.target.value)
    }


    const addToDo: todotype10 = {
        name: event
    }

    



    const [toDoList, setToDoList] = useState<todotype10[]>([])

    const onClickHandle = async () => {

        try {
            const docRef = await addDoc(collection(db, "todo3"), addToDo);

            setToDoList([...toDoList, { ...addToDo, id: docRef.id }])
            console.log("Document written with ID: ", docRef.id);
            setEvent("")
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    const readHandler = async () => {
        const querySnapshot = await getDocs(collection(db, "todo3"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        })
    }



    const GetHandler = async() =>{

     const querySnapshot = await getDocs(collection(db, "todo3"));
     let newData:todotype10[] = []

    querySnapshot.forEach((doc) => {
        newData.push({
            name:doc.data().name ,
            id: doc.id       })

        console.log(doc.id, " => ", doc.data());
        
    })
    setToDoList(newData)}
    


    const onDeleteHandle = async (item:todotype10) => {

       await deleteDoc(doc(db,"todo3",item.id));

       const filtered = toDoList.filter((val)=>{
        if(val.id!=item.id){
            return val
        }
       })
        console.log(item.name);
        console.log(item.id);
        setToDoList(filtered)
    }


    return (
        <div>

            <input type={"text"} className="m-5" value={event} onChange={(e) => onChangeHandle(e)} />
            <button onClick={() => onClickHandle()} >Click to add</button>

            <br />

            {toDoList.map((item, originalIndex) => {
                return (
                    <div className="ms-5" key={originalIndex}>

                        <li> {item.name} - {item.id}
                        
                        <button onClick={() => onDeleteHandle(item)} >Del</button> </li>
                        <br />


                    </div>

                )
            })}
                <div>
                   
                </div>
            <button onClick={() => readHandler()} className="ms-5" >Read Old Data</button>
            <button onClick={() => GetHandler()} className="ms-5" >Fetch Old Data</button>
        </div>
    )
}


export default Todo10