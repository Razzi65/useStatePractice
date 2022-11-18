import { useState } from "react";



const Form = () => {

    const student = [{
        user: "Rizwan",
        email:"abc@xyz.com"
    }]
    
    const [uservalue,setuservalue] = useState()
    const [emailvalue,setemailvalue] = useState()
    
    

    const getUservalues = (e) => {
            setuservalue(e.target.value)                       
    }

    const getEmailvalues = (e) => {
        setemailvalue(e.target.value)
    }
    
    const student2 = {
        name: uservalue,
        email: emailvalue
    }

    const [addstudent, setaddstudent] = useState( [{
        user: "Rizwan",
        email:"abc@xyz.com"
    }])

    const addstudentinlist = () => {
        setaddstudent([...addstudent,student2])
       
       
    } 
    
    return (
        <div>

            <input type="text" placeholder="username" onChange={(e)=>getUservalues(e)}/> <br/>
            <input type="text" placeholder="email" onChange={(e)=>getEmailvalues(e)}/>
          
            <br/>
           {uservalue} 
           <br/>
           {emailvalue}

           <br/>

           {addstudent.map((item)=>{
            return (
              <div>  
                {item.user},
                {item.email}
                </div>
                
            )
           })}

           <button onClick={()=> addstudentinlist()} > click </button>
          
           {console.log({addstudent})}

        </div>
    )
}


export default Form